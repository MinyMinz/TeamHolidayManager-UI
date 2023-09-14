<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/stores";
  import Modal from "$lib/modal/globalModal.svelte";

  export let showModal = false;

  function handleLogout() {
    // Remove the userLoggedIn from sessionStorage
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem("userLoggedIn");
    }
    showModal = false;
    $isLoggedIn = false;
    // Redirect the user to the root page after logout
    goto("/");
  }
</script>

<Modal bind:showModal>
  <h1 class="text-center text-black dark:text-white" slot="header">
    Please confirm that you wish to sign out?
  </h1>
  <br />
  <div class="flex flex-col">
    <button class="submitButton" on:click={() => handleLogout()}>Confirm</button
    >
  </div>
</Modal>
