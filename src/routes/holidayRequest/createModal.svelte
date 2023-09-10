<script lang="ts">
  import Modal from "$lib/components/modal/GlobalModal.svelte";
  import { createMode } from "$lib/components/stores/stores";

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
  let selectedTimeOfDay: string | null = null;

  async function createHolidayRequest() {
    try {
      let inputs = document.querySelectorAll(
        ".form-input"
      ) as NodeListOf<HTMLInputElement>;
      let inputList: any = {};
      //add the id to the inputList first as Null for new user
      inputList["id"] = null;
      //add the rest of the inputs to the inputList
      inputs.forEach((input) => {
        inputList[input.id] = input.value;
      });
      // delete full_name from inputList and replace with holidayData.user_id regardless of role
      delete inputList.full_name;
      inputList.user_id = loggedInUser?.id;
      inputList.team_name = loggedInUser?.team_name;
      inputList.approved = null;
      const response = await fetch(`http://127.0.0.1:8000/holiday-request`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputList),
      });
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
      }
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }
</script>

<Modal bind:showModal>
  <h1 class="text-black dark:text-white" slot="header">Creating Holiday Request</h1>
  <form class="text-black dark:text-white">
    <label for="Description">Description:</label><br />
    <input
      class="form-input"
      type="text"
      id="description"
      name="Description"
    /><br />
    <label for="start_date">*Start Date:</label><br />
    <input
      class="form-input"
      type="date"
      id="start_date"
      name="start_date"
      min="2000-01-02"
    /><br />
    <label for="end_date">*End Date:</label><br />
    <input
      class="form-input"
      type="date"
      id="end_date"
      name="end_date"
      min="2000-01-02"
    /><br />
    <label
      for="timeOfDay"
      class="block text-sm font-medium text-gray-900 dark:text-white"
      >TimeOfDay:</label
    >
    <select class="selectorDropdown" bind:value={selectedTimeOfDay}>
      <option value={null}>N/A</option>
      <option value="AM">Morning</option>
      <option value="PM">Afternoon</option>
    </select>
    <label for="fullname">*Fullname:</label><br />
    {#if loggedInUser?.role_name === "User"}
      <input
        class="form-input"
        type="text"
        id="full_name"
        name="fullname"
        value={loggedInUser?.full_name}
        disabled={true}
      /><br />
    {:else}
      <input
        class="form-input"
        type="text"
        id="full_name"
        name="fullname"
        value={loggedInUser?.full_name}
        disabled={false}
      /><br />
    {/if}
    {#if msg}
      <br />
      <p class="text-red-500 font-bold">{msg}</p>
    {/if}
  </form>
  <br />
  <div class="flex flex-col">
    <button class="createOrUpdateSubmitButton" on:click={() => createHolidayRequest()}
      >Create</button
    >
  </div>
</Modal>
