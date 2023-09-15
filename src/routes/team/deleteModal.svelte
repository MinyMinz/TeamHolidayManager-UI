<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_URI } from "$env/static/public";
  import Modal from "$lib/modal/globalModal.svelte";
  import { deleteMode, requestStatus, tableRefresh } from "$lib/stores/stores";

  export let showModal = false;
  export let teamName: any;
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

  async function deleteTeam() {
    validatePermissions();
    await fetch(`${PUBLIC_URI}/teams?team_name=${teamName}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          msg = "Team deletion failed!";
          throw new Error(msg + `Status: ${res.status}`);
        }
        msg = "Team deleted successfully!";
        $deleteMode = false;
        showModal = false;
        requestStatus.set("success");
        tableRefresh.set(true); //fresh page on success
        })
      .catch((err) => {
        console.error(err);
        throw err; // Re-throw the error to propagate it to the caller
      });
  }

  function validatePermissions() {
    if (loggedInUser.role_name !== "SuperAdmin") {
      alert("You do not have permission to delete teams.");
      showModal = false;
      $deleteMode = false;
      goto("/");
      throw new Error("Unauthorized user trying to delete a team.");
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Please confirm you wish to delete {teamName} from the system.
  </h2>
  {#if msg}
    <p class="errorMessage">{msg}</p>
  {/if}
  <div class="flex flex-col mt-2">
    <button
      class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      on:click={() => deleteTeam()}>Delete Team</button
    >
  </div>
</Modal>
