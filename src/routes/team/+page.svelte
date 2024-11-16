<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_URI } from "../../config";
  import {
    createMode,
    deleteMode,
    requestStatus,
    tableRefresh,
    teamManagmentData,
  } from "$lib/stores/stores";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import CreateModal from "./createModal.svelte";
  import DeleteModal from "./deleteModal.svelte";
  import { getUserFromSessionStorage } from "$lib/customFunctions";

  let showModal: boolean = false;
  let teamName: string;
  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage

  // reactive statement to check if the modal is closed and reset the modes and refresh the table upon sucessful creation or deletion
  $: if (!showModal) {
    createMode.set(false);
    deleteMode.set(false);

    if ($tableRefresh) {
      fetchTeams();
    }
  }

  onMount(async () => {
    //check if user is authorised to view this page and redirect to root page if not
    checkIfAuthorized();
    //check if authMessage is set
    if ($requestStatus) {
      //reset the authMessage
      requestStatus.set(null);
    }
    //fetch the users on page load and set the teamMap
    await fetchTeams();
  });

  let columnNames = ["Team Name", "Description"];

  async function fetchTeams() {
    // In the event user has managed to access this page without being logged in as SuperAdmin, redirect to root page
    checkIfAuthorized();
    let teamMap = new Map();
    await fetch(`${PUBLIC_URI}/teams`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) {
            goto("/");
            throw new Error(`Unauthorized access. Status: ${res.status}`);
          } else {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
          }
        }
        return res.json();
      })
      .then((res) => {
        if (Array.isArray(res)) {
          res.forEach((value, index) => teamMap.set(index, value));
        } else {
          teamMap.set(0, res);
        }
        teamMap.delete("Super");
        return teamMap;
      })
      .catch((err) => {
        console.error(err); // log the error
        throw err; // rethrow the error to be caught by the caller
      });
    teamManagmentData.set(teamMap);
    tableRefresh.set(false);
  }

  function checkIfAuthorized() {
    if (loggedInUser.role_name !== "SuperAdmin") {
      goto("/");
      throw new Error(`Unauthorized access. Status: 401`);
    }
  }

  function setCreateMode() {
    showModal = true;
    $createMode = true;
  }

  function setDeleteMode(teamData: any) {
    showModal = true;
    $deleteMode = true;
    teamName = teamData.name;
  }
</script>

<main class="defaultPage flex flex-col">
  <div class="tablePage relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 font-semibold text-left text-gray-900 dark:text-white relative">
        <h1 class="text-2xl underline">Team Management</h1>
        <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
          Here you can only create or delete teams.
        </p>
        <button
          type="button"
          class="createButton absolute bottom-2 right-24"
          on:click={() => setCreateMode()}>
          <p class="icons">
            Create Team
            <Icon icon="fluent:people-team-add-24-regular" inline={true} />
          </p>
        </button>
      </caption>
      <!-- If there are no teams in the database, display a message -->
      {#if $teamManagmentData === null}
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-3xl font-semibold text-gray-900 dark:text-white">
            No Teams found
          </h1>
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            There are no teams in the database.
          </p>
        </div>
      {:else}
        <!-- If there are teams in the database, display them in a table -->
        <thead class="tableHeadings">
          <!-- Loop through the column names and display them in the table -->
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
          {#each $teamManagmentData as item (item[0])}
            <tr class="text-lg text-black dark:text-gray-200">
              <td>{item[1].name}</td>
              <td>{item[1].description}</td>
              <td>
                <button
                  type="button"
                  class="deleteButton"
                  on:click={() => setDeleteMode(item[1])}>
                  <p class="icons">
                    Delete
                    <Icon
                      icon="fluent:people-team-delete-24-regular"
                      inline={true} />
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
  <DeleteModal bind:teamName bind:showModal />
{/if}
