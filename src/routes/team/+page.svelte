<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { PUBLIC_URI } from "$env/static/public";
  import { createMode, deleteMode, editMode } from "$lib/stores/stores";
  import type { User } from "$lib/types/customTypes";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import CreateModal from "./createModal.svelte";
  import DeleteModal from "./deleteModal.svelte";

  $: if (!showModal) {
    createMode.set(false);
    editMode.set(false);
    deleteMode.set(false);
    //check if the browser is running the code
    if (typeof window !== "undefined") {
      invalidateAll().then(() => {
        // After invalidating, fetch the teams again to get the updated list
        fetchTeams().then((res) => {
          teamMap = res;
        });
      });
    }
  }

  const loggedInUser: any = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }

  onMount(async () => {
    //fetch the users on page load and set the teamMap
    fetchTeams().then((res) => {
      teamMap = res;
    });
  });

  let showModal: boolean = false;
  let teamMap = new Map();
  let teamData = { name: "", description: "" };

  let columnNames = ["Team Name", "Description"];

  async function fetchTeams() {
    try {
      if (loggedInUser.role_name !== "SuperAdmin") {
        goto("/");
        throw new Error(`Unauthorized access. Status: 401`);
      }

      const response = await fetch(`${PUBLIC_URI}/teams`);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();

      // //if the response is an array, map the array to the teamMap
      if (Array.isArray(data)) {
        data.forEach((value, index) => teamMap.set(index, value));
      } else {
        //if there is only one team, the response is not an array
        teamMap.set(0, data);
      }
      return teamMap;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }

  function setCreateMode() {
    showModal = true;
    $createMode = true;
  }

  function setDeleteMode(teamData: any) {
    showModal = true;
    $deleteMode = true;
    teamData = teamData;
  }
</script>

<main class="page">
  <div class="tablePage relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 font-semibold text-left text-gray-900 dark:text-white relative"
      >
        <h1 class="text-2xl">Team Management</h1>
        {#if loggedInUser?.role_name === "SuperAdmin"}
          <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
            Here you can create, delete teams.
          </p>
          <button
            type="button"
            class="createButton absolute bottom-2 right-24"
            on:click={() => setCreateMode()}
          >
            <p class="icons">
              Create Team
              <Icon icon="fluent:people-team-add-24-regular" inline={true} />
            </p>
          </button>
        {:else}
          <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
            Here you can edit your accounts name, email and password.
          </p>
        {/if}
      </caption>
      {#if teamMap.size === 0}
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-3xl font-semibold text-gray-900 dark:text-white">
            No Teams found
          </h1>
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            There are no teams in the database.
          </p>
        </div>
      {:else}
        <thead
          class="text-center text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <tr>
            {#each columnNames as column}
              <th scope="col" class="text-base">
                {column}
              </th>
            {/each}
            <th class="text-base w-1/6"> Actions </th>
          </tr>
        </thead>
        <tbody class="text-center">
          {#each teamMap as item (item[0])}
            <tr class="text-lg text-black dark:text-gray-200">
              <td>{item[1].name}</td>
              <td>{item[1].description}</td>
              <td>
                <button
                  type="button"
                  class="deleteButton"
                  on:click={() => setDeleteMode(item[1])}
                >
                  <p class="icons">
                    Delete Team
                    <Icon
                      icon="fluent:people-team-delete-24-regular"
                      inline={true}
                    />
                  </p>
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      {/if}
    </table>
  </div>
</main>

{#if $createMode}
  <CreateModal bind:showModal />
{/if}

{#if $deleteMode}
  <DeleteModal {teamData} bind:showModal />
{/if}
