<script lang="ts">
  import { PUBLIC_URI } from "../../config";
  import Modal from "$lib/modal/globalModal.svelte";
  import { deleteMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  export let showModal = false;
  export let user: any;
  let msg = "";

  async function deleteUser() {
    validatePermissionsToDelete();
    await fetch(`${PUBLIC_URI}/users?user_id=` + user.id, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          msg = "User deletion failed!";
          throw new Error(msg + `Status: ${res.status}`);
        }
        msg = "User deleted successfully!";
        deleteMode.set(false);
        showModal = false;
        requestStatus.set("success");
        tableRefresh.set(true); //fresh page on success
      })
      .catch((err) => {
        console.error(err);
        throw err; // Re-throw the error to propagate it to the caller
      });
  }

  function validatePermissionsToDelete() {
    // In the event user has managed to access this page without being logged in as SuperAdmin, redirect to root page
    if (loggedInUser.role_name === "User") {
      msg = "You do not have permission to delete users.";
      return;
    } else if (loggedInUser.role === "Admin" && user.role_name === "Admin") {
      msg = "You cannot delete Admins.";
      return;
    } else if (
      loggedInUser.role === "SuperAdmin" &&
      user.role_name === "SuperAdmin"
    ) {
      msg = "You cannot delete SuperAdmin.";
      return;
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Please confirm you wish to delete {user.full_name}'s account from the
    system.
  </h2>
  {#if msg}
    <p class="font-bold text-red-600 dark:text-red-400 text-center">{msg}</p>
  {/if}
  <div class="flex flex-col mt-2">
    <button class="deleteModalButton" on:click={() => deleteUser()}
      >Delete User</button>
  </div>
</Modal>
