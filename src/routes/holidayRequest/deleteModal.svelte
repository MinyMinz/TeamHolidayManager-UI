<script lang="ts">
  import { PUBLIC_URI } from "../../config";
  import Modal from "$lib/modal/globalModal.svelte";
  import { deleteMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  export let showModal = false;
  export let holidayData: any;
  let msg: string;

  async function deleteRequest() {
    validateUserCanRemoveHoliday(); //check if the user is authorised to delete the request and sets the msg if not
    if (msg) return; //if the user is not authorised to delete the request, return
    await fetch(`${PUBLIC_URI}/holiday-request?holiday_id=` + holidayData.id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          msg = `Status: ${res.status} `;
          throw new Error(msg);
        } else {
          // Reset the form
          showModal = false;
          $deleteMode = false;
          msg = "";
          requestStatus.set("success");
          tableRefresh.set(true); //refresh the table
        }
      })
      .catch((err) => {
        console.error(err);
        throw err; // Re-throw the error to propagate it to the caller
      });
  }

  function validateUserCanRemoveHoliday() {
    if (loggedInUser.role_name === "User" && holidayData.approved === true) {
      msg = "You cannot delete an approved holiday request.";
      return;
    }
    if (
      loggedInUser.role_name === "Admin" &&
      holidayData.approved === true &&
      loggedInUser.id === holidayData.user_id
    ) {
      msg = "You cannot delete an approved holiday request.";
      return;
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Please confirm you wish to delete this Holiday from the system.
  </h2>
  {#if msg}
    <p class="font-bold text-red-600 dark:text-red-400 text-center">{msg}</p>
  {/if}
  <div class="flex flex-col mt-2">
    <button class="deleteModalButton" on:click={() => deleteRequest()}
      >Delete Request</button>
  </div>
</Modal>
