<script lang="ts">
  import { goto } from "$app/navigation";
  import { verifyCredentials } from "./verifyUser";
  import Icon from "@iconify/svelte";

  // User's email and password input variables
  let email: string = "";
  let password: string = "";
  let passwordVisible: boolean = false;
  let errorMessage: string = "";

  // Handle form submission
  async function handleSubmit() {
    await verifyCredentials(email, password).then((res) => {
      if (res === "success") {
        // If the user is authenticated, redirect to the homepage but logged in#
        goto("/");
      } else {
        // If the user is not authenticated, display an error message
        errorMessage = res;
      }
    });
  }
</script>

<main class="defaultPage min-h-screen flex flex-col">
  <div class="login-container">
    <div class="login-form-container">
      <h1 class="login-title underline">Sign in</h1>
      {#if errorMessage !== ""}<p class="errorMessage">{errorMessage}</p>{/if}
      <form class="login-form">
        <div class="mb-4 w-full">
          <label>
            Email/ Username:
            <input
              class="form-input"
              type="email"
              bind:value={email}
              required />
          </label>
        </div>
        <div class="w-full">
          <label>
            Password:
            {#if passwordVisible}
              <input
                class="form-input"
                type="text"
                bind:value={password}
                required />
            {:else}
              <input
                class="form-input"
                type="password"
                bind:value={password}
                required />
            {/if}
          </label>
          <button
            type="button"
            class="ml-1 absolute top-50 h-10"
            on:click={() => (passwordVisible = !passwordVisible)}>
            {#if passwordVisible}
              <Icon style="font-size: 18px" icon="mdi:eye" />
              <!-- Show password icon -->
            {:else}
              <Icon style="font-size: 18px" icon="mdi:eye-off" />
              <!-- Hide password icon -->
            {/if}
          </button>
        </div>
        <button
          type="button"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mt-6 mb-1"
          on:click={handleSubmit}>
          Sign in
        </button>
      </form>
    </div>
  </div>
</main>
