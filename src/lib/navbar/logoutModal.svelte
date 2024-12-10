<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    createMode,
    deleteMode,
    editMode,
    holidayManagmentData,
    userIsLoggedIn,
    requestStatus,
    tableRefresh,
    teamManagmentData,
    userManagmentData,
  } from "$lib/stores/stores";
  import Modal from "$lib/modal/globalModal.svelte";

  export let showModal = false;

  // Handle the logout request
  function handleLogout() {
    showModal = false;
    // Reset all stores to their default values to ensure that the user is logged out
    resetAllStores();
    // Set the request status to success to display the success message
    requestStatus.set("success");
    // Redirect the user to the root page after logout
    goto("/");
  }

  function resetAllStores() {
    // Remove the userLoggedIn from sessionStorage
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem("userLoggedIn");
      sessionStorage.removeItem("userToken");
    }
    // Reset all local stores to their default values
    userIsLoggedIn.set(false);
    createMode.set(false);
    editMode.set(false);
    deleteMode.set(false);
    tableRefresh.set(false);
    userManagmentData.set(null);
    teamManagmentData.set(null);
    holidayManagmentData.set(null);
  }
</script>

<!-- This is the Modal for logout confirmation  -->
<Modal bind:showModal>
  <h1 class="text-center text-black dark:text-white" slot="header">
    Please confirm that you wish to sign out?
  </h1>
  <div class="flex flex-col">
    <button class="submitModalButton mt-2" on:click={() => handleLogout()}
      >Confirm</button
    >
  </div>
</Modal>
