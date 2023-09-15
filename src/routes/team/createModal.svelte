<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_URI } from "$env/static/public";
  import Modal from "$lib/modal/globalModal.svelte";
  import { createMode, requestStatus, tableRefresh } from "$lib/stores/stores";

  export let showModal = false;
  let msg = "";
  const loggedInUser: any = {};

  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }

  async function createTeam() {
    // Check if the user is logged in and is a super admin
    validateIsSuperAdmin();
    // Get all the input values
    const inputList = getInputValues();
    // Fetch the data from the API based on the input values
    await window
      .fetch(`${PUBLIC_URI}/teams`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputList),
      })
      .then((res) => {
        // If the response is not ok, throw an error with the status text
        if (!res.ok) {
          if (res.status === 422) {
            msg = "Please fill in all fields correctly!";
          } else {
            msg = "Team deletion failed!";
            throw new Error(msg + `Status: ${res.status}`);
          }
        } else {
          msg = "Team deleted successfully!";
          createMode.set(false);
          showModal = false;
          requestStatus.set("success");
          tableRefresh.set(true); //fresh page on success
        }
      })
      .catch((err) => {
        console.error(err);
        throw err; // Re-throw the error to propagate it to the caller
      });
  }

  function getInputValues() {
    let inputs = document.querySelectorAll(
      ".form-input"
    ) as NodeListOf<HTMLInputElement>;
    let inputList: any = {};
    inputs.forEach((input) => {
      inputList[input.id] = input.value;
    });
    return inputList;
  }

  function validateIsSuperAdmin() {
    if (!loggedInUser || loggedInUser.role_name !== "SuperAdmin") {
      alert("You do not have permission to create teams.");
      showModal = false;
      $createMode = false;
      goto("/");
      throw new Error("Unauthorized user trying to create a team.");
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
    <button class="submitButton" on:click={() => createTeam()}
      >Create Team</button
    >
  </div>
</Modal>
