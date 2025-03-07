<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_URI } from "../../config";
  import Modal from "$lib/modal/globalModal.svelte";
  import { deleteMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage
  const token: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  export let showModal = false;
  export let teamName: any;
  let msg = "";

  async function deleteTeam() {
    // Check if the user is logged in and is a SuperAdmin, redirect to root page and throw an error if not
    validateIsSuperAdmin();
    if (teamName === "Super") {
      msg = "Cannot delete this team!";
      return;
    }
    await fetch(`${PUBLIC_URI}/teams?team_name=${teamName}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + token
      }
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

  function validateIsSuperAdmin() {
    // In the event user has managed to access this page without being logged in as SuperAdmin, redirect to root page
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
    <button class="deleteModalButton" on:click={() => deleteTeam()}
      >Delete Team</button>
  </div>
</Modal>
