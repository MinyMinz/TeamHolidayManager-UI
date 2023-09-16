<script lang="ts">
  import { PUBLIC_URI } from "$env/static/public";
  import Modal from "$lib/modal/globalModal.svelte";
  import { createMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  export let showModal = false;
  let msg: string;
  let selectedTimeOfDay: string | null = null;

  async function createHolidayRequest() {
    const inputList = getInputValues();
    fetch(`${PUBLIC_URI}/holiday-request`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputList),
    })
      .then((res) => {
        if (!res.ok) {
          msg = "Please fill in all fields correctly!";
          throw new Error(msg);
        } else {
          showModal = false;
          $createMode = false;
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

  function getInputValues() {
    try {
      let inputs = document.querySelectorAll(
        ".form-input"
      ) as NodeListOf<HTMLInputElement>;
      let inputList: any = {};
      //add the id to the inputList first as uull for new holiday requests
      inputList["id"] = null;
      //add the rest of the inputs to the inputList
      inputs.forEach((input) => {
        inputList[input.id] = input.value;
      });
      //check if start date and end date are filled in
      if (!inputList.start_date || !inputList.end_date) {
        msg = "Please date fields correctly!";
        throw new Error(msg);
      }
      //check if the start date is before the end date
      if (inputList.start_date > inputList.end_date) {
        msg = "Start date cannot be after end date.";
        throw new Error(msg);
      }
      inputList.user_id = loggedInUser?.id;
      inputList.team_name = loggedInUser?.team_name;
      inputList.time_of_day = selectedTimeOfDay;
      inputList.approved = null;
      return inputList;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }
</script>

<Modal bind:showModal>
  <h1 class="text-black dark:text-white" slot="header">
    Creating Holiday Request
  </h1>
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
    <label class="text-gray-600" for="fullname">*Fullname:</label><br />
    <input
      class="disabled-form-input"
      type="text"
      id="full_name"
      name="fullname"
      value={loggedInUser?.full_name}
      readonly={true}
    /><br />
    {#if msg}
      <br />
      <p class="text-red-500 font-bold">{msg}</p>
    {/if}
  </form>
  <br />
  <div class="flex flex-col">
    <button class="submitModalButton" on:click={() => createHolidayRequest()}
      >Create</button
    >
  </div>
</Modal>
