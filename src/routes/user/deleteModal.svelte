<script lang="ts">
  import Modal from "$lib/components/modal/GlobalModal.svelte";
  import { deleteMode, isLoggedIn } from "$lib/components/stores/stores";

  export let showModal = false;
  export let user: any;
  let msg = "";

  const loggedInUser: any = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }

  async function deleteUser() {
    if(loggedInUser.role_name === "User"){
      msg = "You do not have permission to delete users."
      return;
    }
    else if(loggedInUser.role === "Admin" && user.role_name === "Admin"){
      msg = "You cannot delete Admins."
        return;
    }
    else if(loggedInUser.role === "SuperAdmin" && user.role_name === "SuperAdmin"){
      msg = "You cannot delete SuperAdmin."
        return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/users?user_id=` + user.id,
        { method: "DELETE" }
      );

      if (response.ok) {
        showModal = false;
        $deleteMode = false;
      } else {
        msg = `Status: ${response.status} Detail: ${response.statusText}`;
        throw new Error(`Failed to send data. Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Please confirm you wish to delete {user.full_name} from the system.
  </h2>
  {#if msg}
    <p class="font-bold text-red-600 dark:text-red-400 text-center">{msg}</p>
  {/if}
  <div class="flex flex-col mt-2">
    <button
      class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      on:click={() => deleteUser()}>Delete User</button
    >
  </div>
</Modal>
