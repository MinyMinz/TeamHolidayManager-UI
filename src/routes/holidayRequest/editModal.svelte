<script lang="ts">
  import { PUBLIC_URI } from "$env/static/public";
  import Modal from "$lib/modal/globalModal.svelte";
  import { editMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import type { Holiday } from "$lib/types/customTypes";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  export let showModal = false;
  export let holidayData: Holiday;
  let selectedTimeOfDay = holidayData.time_of_day;
  let isApproved = holidayData.approved;
  let msg: string;
  let inputList: any = {};

  async function updateHoliday() {
    validateUserCanEditHolidayOrApprove(); // check if user can edit holiday
    inputList = getInputValues();
    await fetch(`${PUBLIC_URI}/holiday-request`, {
      method: "PUT",
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
          $editMode = false;
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

  function validateUserCanEditHolidayOrApprove() {
    if (loggedInUser.role_name === "User" && holidayData.approved) {
      msg = "You cannot edit an approved holiday";
      throw new Error(msg);
    }
    if (
      loggedInUser.role_name === "Admin" &&
      loggedInUser.id === holidayData.user_id &&
      isApproved !== holidayData.approved
    ) {
      msg =
        "You do cannot edit the approved field of your own holiday request.";
      throw new Error(msg);
    }
    return;
  }

  function getInputValues() {
    let inputs = document.querySelectorAll(
      ".form-input"
    ) as NodeListOf<HTMLInputElement>;
    let inputList: any = {};
    //add the id to the inputList first
    inputList["id"] = holidayData.id;
    //add the rest of the inputs to the inputList
    inputs.forEach((input) => {
      inputList[input.id] = input.value;
    });
    //add the rest of the inputs to the inputList
    inputList.time_of_day = selectedTimeOfDay;
    inputList.user_id = holidayData.user_id;
    inputList.team_name = holidayData.team_name;
    if (
      loggedInUser.role_name === "User" &&
      isApproved !== holidayData.approved
    ) {
      msg = "You do not have permission to edit the approved field.";
      throw new Error(msg);
    }
    if (loggedInUser?.role_name !== "User") {
      inputList.approved = isApproved;
    }
    if (inputList.start_date > inputList.end_date) {
      msg = "Start date cannot be after end date.";
      throw new Error(msg);
    }
    console.log(inputList);
    return inputList;
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Editing Holiday Request
  </h2>
  <form class="text-black dark:text-white">
    <form class="text-black dark:text-white">
      <label for="Description">Description:</label><br />
      <input
        class="form-input"
        type="text"
        id="description"
        name="Description"
        value={holidayData.description}
      /><br />
      <label for="start_date">*Start Date:</label><br />
      <input
        class="form-input"
        type="date"
        id="start_date"
        name="start_date"
        min="2000-01-02"
        value={holidayData.start_date}
      /><br />
      <label for="end_date">*End Date:</label><br />
      <input
        class="form-input"
        type="date"
        id="end_date"
        name="end_date"
        min="2000-01-02"
        value={holidayData.end_date}
      /><br />
      <label
        for="timeOfDay"
        class="block text-sm font-medium text-gray-900 dark:text-white"
        >TimeOfDay:</label
      >
      <select class="selectorDropdown" bind:value={selectedTimeOfDay}>
        <option value={null}>N/A</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <label class="text-gray-600" for="fullname">*Fullname:</label><br />
      <input
        class="disabled-form-input"
        type="text"
        id="full_name"
        name="fullname"
        value={holidayData.full_name}
        readonly={true}
      /><br />
      {#if loggedInUser?.role_name === "Admin" || loggedInUser?.role_name === "SuperAdmin"}
        <label for="approved">Status:</label><br />
        <select class="selectorDropdown" bind:value={isApproved}>
          <option value={null}>N/A</option>
          <option value={true}>Approve</option>
          <option value={false}>Reject</option>
        </select>
      {/if}
      {#if msg}
        <br />
        <p class="text-red-500 font-bold">{msg}</p>
      {/if}
    </form>
    <br />

    <div class="flex flex-col">
      <button class="submitModalButton" on:click={() => updateHoliday()}
        >Update</button
      >
    </div>
  </form>
</Modal>
