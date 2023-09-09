<script lang="ts">
  import { goto } from "$app/navigation";
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

  async function createUser() {
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
      inputList.team_name = selectedTeam;
      inputList.role_name = selectedRole;
      const response = await fetch(`http://127.0.0.1:8000/users`, {
        method: "POST",
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
  <h1 class="text-black dark:text-white" slot="header">Creating user</h1>
  <form class="text-black dark:text-white">
    <label for="fullname">Fullname:</label><br />
    <input class="form-input" type="text" id="full_name" name="fullname" /><br
    />
    <label for="email">Email:</label><br />
    <input class="form-input" type="email" id="email" name="email" /><br />
    <label for="password">Password:</label><br />
    <input
      class="form-input"
      type="password"
      id="password"
      name="password"
    /><br />
    {#if loggedInUser?.role_name === "User" || loggedInUser?.role_name === "Admin"}
      <label for="teamName">Team Name:</label><br />
      <input
        class="form-input"
        type="text"
        id="team_name"
        name="teamName"
        value={loggedInUser.team_name}
        disabled={true}
      /><br />
      <label for="roleName">Role Name:</label><br />
      <input
        class="form-input"
        type="text"
        id="role_name"
        name="roleName"
        value="User"
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
    <button class="createOrUpdateSubmitButton" on:click={() => createUser()}
      >Create</button
    >
  </div>
</Modal>