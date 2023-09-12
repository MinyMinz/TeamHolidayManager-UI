<script>
  import { authMessage } from "$lib/stores/stores"; // get authMessage from user store
  import { verifyCredentials } from "./verifyUser";
  import Icon from "@iconify/svelte";

  // User's email and password input variables
  let email = "";
  let password = "";
  let passwordVisible = false;

  // Handle form submission
  async function handleSubmit() {
    await verifyCredentials(email, password);
  }
</script>

<main class="page">
  <div class="login-container">
    <div class="login-form-container">
      <h1 class="login-title">Sign in</h1>
      {#if $authMessage}<p class="error">{$authMessage}</p>{/if}
      <form class="login-form">
        <div class="mb-4 w-full">
          <label>
            Email:
            <input
              class="form-input"
              type="email"
              bind:value={email}
              required
            />
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
                required
              />
            {:else}
              <input
                class="form-input"
                type="password"
                bind:value={password}
                required
              />
            {/if}
            <button
              type="button"
              class="ml-1 absolute top-50 h-10"
              on:click={() => (passwordVisible = !passwordVisible)}
            >
              {#if passwordVisible}
                <Icon style="font-size: 18px" icon="mdi:eye" />
                <!-- Show password icon -->
              {:else}
                <Icon style="font-size: 18px" icon="mdi:eye-off" />
                <!-- Hide password icon -->
              {/if}
            </button>
          </label>
        </div>
        <button
          type="button"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mt-6 mb-1"
          on:click={handleSubmit}
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</main>
