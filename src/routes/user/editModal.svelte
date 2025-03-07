<script lang="ts">
  import { PUBLIC_URI } from "../../config";
  import Modal from "$lib/modal/globalModal.svelte";
  import { editMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import type { UserWithPassword } from "$lib/types/customTypes";
  import {
    getUserFromSessionStorage,
    getUserTokenFromSessionStorage,
  } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage
  const token: any = getUserTokenFromSessionStorage(); //get the jwt token from sessionStorage

  export let showModal = false;
  export let userData: UserWithPassword;
  let msg = "";

  let teams: any = [];
  let roles: any = [];
  let selectedTeam = userData.team_name;
  let selectedRole = userData.role_name;

  // This should check if user is of Admin type and only fetch the teams and roles that are relevant to the admin
  if (
    loggedInUser.role_name === "SuperAdmin" ||
    loggedInUser.role_name === "Admin"
  ) {
    (async () => {
      await fetchTeams();
      await fetchRoles();
    })();
  }

  async function updateUser() {
    validatePermissionsToEdit();
    const inputList = getInputValues();
    await fetch(`${PUBLIC_URI}/users`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(inputList),
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 422) {
            msg = "Please fill in all fields correctly!";
          } else {
            msg = "User update failed!";
          }
        } else {
          msg = "User updated successfully!";
          editMode.set(false);
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

  async function fetchTeams() {
    await fetch(`${PUBLIC_URI}/teams`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        teams = data;
      });
  }

  async function fetchRoles() {
    await fetch(`${PUBLIC_URI}/roles`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        roles = data;
      });
  }

  function getInputValues() {
    let inputs = document.querySelectorAll(
      ".form-input"
    ) as NodeListOf<HTMLInputElement>;
    let inputList: any = {};
    //add the id to the inputList first
    inputList["id"] = userData.id;
    //add the rest of the inputs to the inputList
    inputs.forEach((input) => {
      inputList[input.id] = input.value;
    });
    inputList.team_name = selectedTeam;
    //if the logged in user is a SuperAdmin, check role name has not been changed
    if (
      loggedInUser?.role_name === "SuperAdmin" &&
      selectedRole === "SuperAdmin"
    ) {
      inputList.role_name = loggedInUser?.role_name;
    } else {
      inputList.role_name = selectedRole;
    }
    if (loggedInUser?.role_name !== "SuperAdmin") {
      inputList.allocated_holidays = userData.allocated_holidays;
      inputList.remaining_holidays = userData.remaining_holidays;
    }
    return inputList;
  }

  function validatePermissionsToEdit() {
    // validate that the user is not trying to change their team or role if they are not a SuperAdmin
    if (loggedInUser?.role_name == "User") {
      if (selectedTeam != loggedInUser?.team_name || selectedRole != "User") {
        msg = "You do not have permission to change your team or role.";
        return;
      } else if (loggedInUser?.role_name == "Admin") {
        if (selectedRole !== "User") {
          msg = "You do not have permission to edit Admins or SuperAdmins.";
          return;
        } else if (selectedTeam !== loggedInUser?.team_name) {
          msg = "You do not have permission to put users in other teams.";
          return;
        }
      }
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Updating Existing User
  </h2>

  <form class="text-black dark:text-white">
    <label for="fullname">*Full Name:</label><br />
    <input
      class="form-input"
      type="text"
      id="full_name"
      name="fullname"
      value={userData.full_name}
    /><br />
    <label for="email">*Username:</label><br />
    <input
      class="form-input"
      type="email"
      id="email"
      name="email"
      value={userData.email}
    /><br />
    {#if loggedInUser?.role_name === "User" || loggedInUser?.role_name === "Admin"}
      <label class="text-gray-600" for="teamName">*Team Name:</label><br />
      <input
        class="disabled-form-input"
        type="text"
        id="team_name"
        name="teamName"
        value={userData?.team_name}
        readonly={true}
      /><br />
      <label class="text-gray-600" for="roleName">*Role Name:</label><br />
      <input
        class="disabled-form-input"
        type="text"
        id="role_name"
        name="roleName"
        value={userData?.role_name}
        readonly={true}
      /><br />
    {:else if loggedInUser?.role_name === "SuperAdmin"}
      <!-- If SuperAdmin is editing their own user set by default -->
      {#if userData?.role_name === "SuperAdmin"}
        <label class="text-gray-600" for="teamName">*Team Name:</label><br />
        <input
          class="disabled-form-input"
          type="text"
          id="team_name"
          name="teamName"
          value={userData?.team_name}
          readonly={true}
        /><br />
        <label class="text-gray-600" for="roleName">*Role Name:</label><br />
        <input
          class="disabled-form-input"
          type="text"
          id="role_name"
          name="roleName"
          value={userData?.role_name}
          readonly={true}
        /><br />
      {:else}
        <label
          for="teamName"
          class="block text-sm font-medium text-gray-900 dark:text-white"
          >Team Name:</label
        >
        <select class="selectorDropdown" bind:value={selectedTeam}>
          <option selected value>*Choose Team</option>
          {#each teams as team}
            {#if team.name !== "Super"}
              <option value={team.name}>{team.name}</option>
            {/if}
          {/each}
        </select>
        <label
          for="roleName"
          class="block text-sm font-medium text-gray-900 dark:text-white"
          >Role Name:</label
        >
        <select class="selectorDropdown" bind:value={selectedRole}>
          <option selected value>*Choose Role</option>
          {#each roles as role}
            {#if role.name !== "SuperAdmin"}
              <option value={role.name}>{role.name}</option>
            {/if}
          {/each}
        </select>
        <!-- add allocated and remaining holidays -->
        <label for="allocatedHolidays">*Allocated Holidays:</label>
        <br />
        <input
          class="form-input"
          type="number"
          id="allocated_holidays"
          name="allocatedHolidays"
          value={userData?.allocated_holidays}
        />
        <br />
        <label for="remainingHolidays">*Remaining Holidays:</label>
        <br />
        <input
          class="form-input"
          type="number"
          id="remaining_holidays"
          name="remainingHolidays"
          value={userData?.remaining_holidays}
        />
        <br />
      {/if}
    {/if}
    {#if msg}
      <br />
      <p class="text-red-500 font-bold text-center">{msg}</p>
    {/if}
  </form>
  <br />

  <div class="flex flex-col">
    <button class="submitModalButton" on:click={() => updateUser()}
      >Update User</button
    >
  </div>
</Modal>
