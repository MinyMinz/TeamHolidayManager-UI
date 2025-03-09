<script lang="ts">
  import { PUBLIC_URI } from "../../config";
  import Modal from "$lib/modal/globalModal.svelte";
  import { editMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import type { Holiday } from "$lib/types/customTypes";
  import { getUserFromSessionStorage, getUserTokenFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage
  const token: any = getUserTokenFromSessionStorage(); //get the token from sessionStorage

  export let showModal = false;
  export let holidayData: Holiday;
  let selectedTimeOfDay = holidayData.time_of_day;
  let isApproved = holidayData.approved;
  let msg: string;

  async function updateHoliday() {
    validateUserCanEditHolidayOrApprove(); // check if user can edit holiday
    const inputList = getInputValues(); //get the input values
    await fetch(`${PUBLIC_URI}/holiday-request`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + token
      },
      body: JSON.stringify(inputList),
    })
      .then((res) => {
        if (!res.ok) {
          msg = "Please fill in all fields correctly!";
          throw new Error(msg);
        } else {
          // Reset the form
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
    //check if the user is authorised to edit or approve the holiday request and sets the msg if not
    if (loggedInUser.role_name === "User" && holidayData.approved) {
      msg = "You cannot edit an approved holiday";
      throw new Error(msg);
    }
    //check if the admin is trying to edit the approved field of their own holiday request and set the msg if so
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
    validateDates(inputList.start_date, inputList.end_date);
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
    console.log(inputList);
    return inputList;
  }

  function validateDates(start_date: string, end_date: string) {
    //check if start date and end date are filled in
    if (!start_date || !end_date) {
      msg = "Please date fields correctly!";
      throw new Error(msg);
    }
    //check if the start date is before the end date
    else if (start_date > end_date) {
      msg = "Start date cannot be after end date.";
      throw new Error(msg);
    }
    //check if start date is equal to end date and time of day is not selected
    else if (start_date === end_date && selectedTimeOfDay === null) {
      msg = "Please select a time of day.";
      throw new Error(msg);
    }
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
        value={holidayData.description} /><br />
      <label for="start_date">*Start Date:</label><br />
      <input
        class="form-input"
        type="date"
        id="start_date"
        name="start_date"
        min="2000-01-02"
        value={holidayData.start_date} /><br />
      <label for="end_date">*End Date:</label><br />
      <input
        class="form-input"
        type="date"
        id="end_date"
        name="end_date"
        min="2000-01-02"
        value={holidayData.end_date} /><br />
      <label
        for="timeOfDay"
        class="block text-sm font-medium text-gray-900 dark:text-white"
        >Time Of Day:</label>
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
        readonly={true} /><br />
      <!-- if the logged in user is an admin, display the approved field -->
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
        >Update</button>
    </div>
  </form>
</Modal>
