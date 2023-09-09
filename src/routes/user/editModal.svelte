<script lang="ts">
  import { goto } from "$app/navigation";
  import Modal from "$lib/components/modal/GlobalModal.svelte";
  import { editMode } from "$lib/components/stores/stores";
  import type { UserWithPassword } from "$lib/components/types/customTypes";

  export let showModal = false;
  export let userData: UserWithPassword;
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

  let teams: any = [];
  let roles: any = [];
  let selectedTeam = userData.team_name;
  let selectedRole = userData.role_name;

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

  async function fetchTeams() {
    let url = "http://127.0.0.1:8000/teams";
    //if the logged in user is an admin, only get team_name of the admin
    if (loggedInUser?.role_name === "Admin") {
      url += `?team_name=${loggedInUser.team_name}`;
    }
    const teamResponse = await fetch(url);
    const teamData = await teamResponse.json();
    teams = teamData;
    console.log(teams);
  }

  async function fetchRoles() {
    let url = "http://127.0.0.1:8000/roles";
    //if the logged in user is an admin, only get role_name of User
    if (loggedInUser?.role_name === "Admin") {
      url += `?role_name=User`;
    }
    const roleResponse = await fetch(url);
    const roleData = await roleResponse.json();
    roles = roleData;
    console.log(roles);
  }

  async function updateUser() {
    try {
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
      inputList.role_name = selectedRole;
      const response = await fetch(`http://127.0.0.1:8000/users`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputList),
      });
      if (!response.ok) {
        if (response.status === 422) {
          msg = "Please fill in all correctly fields";
        }
        else{
          msg = `Status: ${response.status} `;
        }
        throw new Error(msg);
      } else {
        showModal = false;
        $editMode = false;
        msg = "";
      }
      console.log(msg);
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">Editing user</h2>

  <form class="text-black dark:text-white">
    <label for="fullname">Fullname:</label><br />
    <input
      class="form-input"
      type="text"
      id="full_name"
      name="fullname"
      value={userData.full_name}
    /><br />
    <label for="email">Email:</label><br />
    <input
      class="form-input"
      type="email"
      id="email"
      name="email"
      value={userData.email}
    /><br />
    <label for="password">Password:</label><br />
    <input
      class="form-input"
      type="password"
      id="password"
      name="password"
      value={userData.password}
    /><br />
    {#if loggedInUser?.role_name === "User"}
      <label for="teamName">Team Name:</label><br />
      <input
        class="form-input"
        type="text"
        id="team_name"
        name="teamName"
        value={userData?.team_name}
        disabled={true}
      /><br />
      <label for="roleName">Role Name:</label><br />
      <input
        class="form-input"
        type="text"
        id="role_name"
        name="roleName"
        value={userData?.role_name}
        disabled={true}
      /><br />
    {:else if loggedInUser?.role_name === "Admin"}
      <label for="teamName">Team Name:</label><br />
      <input
        class="form-input"
        type="text"
        id="team_name"
        name="teamName"
        value={userData?.team_name}
        disabled={true}
      /><br />
      <label for="roleName">Role Name:</label><br />
      <input
        class="form-input"
        type="text"
        id="role_name"
        name="roleName"
        value={userData?.role_name}
        disabled={true}
      /><br />
    {:else if loggedInUser?.role_name === "SuperAdmin"}
      <label
        for="teamName"
        class="block text-sm font-medium text-gray-900 dark:text-white"
        >Team Name:</label
      >
      <select class="selectorDropdown" bind:value={selectedTeam}>
        <option selected value>Choose Team</option>
        {#each teams as team}
          <option value={team.name}>{team.name}</option>
        {/each}
      </select>

      <label
        for="roleName"
        class="block text-sm font-medium text-gray-900 dark:text-white"
        >Role Name:</label
      >
      <select class="selectorDropdown" bind:value={selectedRole}>
        <option selected value>Choose Role</option>
        {#each roles as role}
          <option value={role.name}>{role.name}</option>
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
    <button class="createOrUpdateSubmitButton" on:click={() => updateUser()}
      >Update</button
    >
  </div>
</Modal>
