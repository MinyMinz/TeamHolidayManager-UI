<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/stores";
  import LogoutModal from "./logoutModal.svelte";

  let showModal = false;
</script>

<!-- This will check the store isLoggedIn, if true button text should say sign out-->
{#if $isLoggedIn}
  <button
    on:click={() => {
      showModal = true;
    }}
    class="loginButton">
    Sign Out
  </button>
{:else}
  <!-- If isLoggedIn is true button text should say sign in-->
  <button on:click={() => goto("/login")} class="loginButton"> Sign In </button>
{/if}
<!-- Will show logout modal for logout confirmation -->
{#if showModal}
  <LogoutModal bind:showModal />
{/if}
