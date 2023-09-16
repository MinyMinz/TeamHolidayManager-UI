<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_URI } from "$env/static/public";
  import Modal from "$lib/modal/globalModal.svelte";
  import { createMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  export let showModal = false;
  let msg = "";

  let teams: any = [];
  let roles: any = [];
  let selectedTeam = "";
  let selectedRole = "";

  if (!loggedInUser) {
    goto("/");
  } else if (
    loggedInUser.role_name === "SuperAdmin" ||
    loggedInUser.role_name === "Admin"
  ) {
    (async () => {
      await fetchTeams();
      await fetchRoles();
    })();
  }

  async function createUser() {
    const inputList = getInputValues();
    await fetch(`${PUBLIC_URI}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputList),
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 422) {
            msg = "Please fill in all fields correctly!";
          } else {
            msg = "User Creation failed!";
          }
        } else {
          msg = "User created successfully!";
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

  async function fetchTeams() {
    let url = `${PUBLIC_URI}/teams`;
    //if the logged in user is an admin, only get team_name of the admin
    if (loggedInUser?.role_name === "Admin") {
      url += `?team_name=${loggedInUser.team_name}`;
    }
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        teams = data;
      });
  }

  async function fetchRoles() {
    let url = `${PUBLIC_URI}/roles`;
    //if the logged in user is an admin, only get role_name of User
    if (loggedInUser?.role_name === "Admin") {
      url += `?role_name=User`;
    }
    await fetch(url)
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
    //add the id to the inputList first as Null for new user
    inputList["id"] = null;
    inputs.forEach((input) => {
      inputList[input.id] = input.value;
    });
    if (loggedInUser?.role_name === "SuperAdmin") {
      if (selectedTeam === "" || selectedRole === "") {
        msg = "Please select a team and role!";
        return;
      } else {
        // when team and role are selected, set the inputList to the selected values
        inputList.team_name = selectedTeam;
        inputList.role_name = selectedRole;
      }
    } else {
      // Admins and Users should not be able to set a team or role they should be set
      inputList.team_name = loggedInUser?.team_name;
      inputList.role_name = "User";
    }
    validatePermissions(inputList.role_name, inputList.team_name);
    return inputList;
  }

  function validatePermissions(role: string, team: string) {
    if (loggedInUser?.role_name == "User") {
      msg = "You do not have permission to create users.";
      throw new Error(msg);
    } else if (loggedInUser?.role_name == "Admin") {
      console.log(role, team);
      if (role !== "User") {
        msg = "You do not have permission to create Admins or SuperAdmins.";
        throw new Error(msg);
      } else if (team !== loggedInUser?.team_name) {
        msg = "You do not have permission to create users in other teams.";
        throw new Error(msg);
      }
    } else if (loggedInUser?.role_name == "SuperAdmin") {
      if (role === "SuperAdmin") {
        msg = "You cannot create more superAdmins";
        throw new Error(msg);
      }
    }
  }
</script>

<Modal bind:showModal>
  <h1 class="text-black dark:text-white" slot="header">Creating New User</h1>
  <form class="text-black dark:text-white">
    <label for="fullname">*Full Name:</label><br />
    <input class="form-input" type="text" id="full_name" name="fullname" /><br
    />
    <label for="email">*Username:</label><br />
    <input class="form-input" type="email" id="email" name="email" /><br />
    <label for="password">*Password:</label><br />
    <input class="form-input" type="text" id="password" name="password" /><br />
    {#if loggedInUser?.role_name === "User" || loggedInUser?.role_name === "Admin"}
      <label class="text-gray-600" for="teamName">*Team Name:</label><br />
      <input
        class="disabled-form-input"
        type="text"
        id="team_name"
        name="teamName"
        value={loggedInUser.team_name}
        readonly={true}
      /><br />
      <label class="text-gray-600" for="roleName">*Role Name:</label><br />
      <input
        class="disabled-form-input"
        type="text"
        id="role_name"
        name="roleName"
        value="User"
        readonly={true}
      /><br />
    {:else if loggedInUser?.role_name === "SuperAdmin"}
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
    {/if}
    {#if msg}
      <br />
      <p class="text-red-500 font-bold text-center">{msg}</p>
    {/if}
  </form>
  <br />
  <div class="flex flex-col">
    <button class="submitModalButton" on:click={() => createUser()}
      >Create User</button
    >
  </div>
</Modal>
