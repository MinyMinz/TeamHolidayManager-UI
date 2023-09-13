<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_URI } from "$env/static/public";
  import Modal from "$lib/modal/globalModal.svelte";
  import { createMode } from "$lib/stores/stores";

  const loggedInUser: any = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }

  export let showModal = false;
  let msg = "";

  async function createTeam() {
    if (!loggedInUser || loggedInUser.role_name !== "SuperAdmin") {
      alert("You do not have permission to create teams.");
      showModal = false;
      $createMode = false;
      goto("/");
      throw new Error("Unauthorized user trying to create a team.");
    }
    try {
      // Get all the input values
      let inputs = document.querySelectorAll(
        ".form-input"
      ) as NodeListOf<HTMLInputElement>;
      let inputList: any = {};
      inputs.forEach((input) => {
        inputList[input.id] = input.value;
      });
      // Fetch the data from the API based on the input values
      const response = await window.fetch(`${PUBLIC_URI}/teams`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputList),
      });

      // If the response is not ok, throw an error with the status text
      if (!response.ok) {
        if (response.status === 422) {
          msg = "Please fill in all fields correctly!";
        } else {
          msg = `Status: ${response.status} `;
        }
        throw new Error(msg);
      } else {
        showModal = false;
        $createMode = false;
        msg = "";
        return;
      }
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }
</script>

<Modal bind:showModal>
  <h1 class="text-black dark:text-white" slot="header">Creating New Team</h1>
  <form class="text-black dark:text-white">
    <label for="teamname">*Team Name:</label><br />
    <input
      class="form-input"
      type="text"
      id="name"
      name="teamname"
      required={true}
    /><br />
    <label for="description">Description:</label><br />
    <input
      class="form-input"
      type="text"
      id="description"
      name="description"
    /><br />
    {#if msg}
      <br />
      <p class="text-red-500 font-bold text-center">{msg}</p>
    {/if}
  </form>
  <br />
  <div class="flex flex-col">
    <button class="createOrUpdateSubmitButton" on:click={() => createTeam()}
      >Create Team</button
    >
  </div>
</Modal>
