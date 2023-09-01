<script>
  import { authMessage } from "../../lib/components/stores/stores"; // get authMessage from user store
  import { verifyCredentials } from "./verifyUser";

  // User's email and password input variables
  let email = "";
  let password = "";

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
      <form class="login-form" on:submit|preventDefault={handleSubmit}>
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
            <input
              class="form-input"
              type="password"
              bind:value={password}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mt-6 mb-1"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</main>
