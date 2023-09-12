<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { PUBLIC_URI } from '$env/static/public';
  import {
    createMode,
    deleteMode,
    editMode,
  } from "$lib/stores/stores";
  import type { Holiday } from "$lib/types/customTypes";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import CreateModal from "./createModal.svelte";
  import DeleteModal from "./deleteModal.svelte";
  import EditModal from "./editModal.svelte";

  $: if (!showModal) {
    createMode.set(false);
    editMode.set(false);
    deleteMode.set(false);
    // Check if the browser is running the code
    if (typeof window !== "undefined") {
      invalidateAll().then(() => {
        // After invalidating, fetch the users again to get the updated list
        fetchHolidayRequests().then((res) => {
          holidayMap = res;
        });
      });
    }
  }

  onMount(async () => {
    //fetch the holidayRequests on page load and set the holidayMap
    fetchHolidayRequests().then((res) => {
      holidayMap = res;
    });
  });

  let showModal: boolean = false;
  let holidayData: Holiday;
  let holidayMap = new Map();

  const loggedInUser: any = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }

  let columnNames = [
    "Description",
    "Start Date",
    "End Date",
    "Time Of Day",
    "Team",
    "Name",
    "Status",
  ];

  async function fetchHolidayRequests() {
    try {
      let url = `${PUBLIC_URI}/holiday-request`;
      if (loggedInUser?.role_name === "User") {
        url += `?user_id=${loggedInUser.id}`;
      } else if (loggedInUser.role_name === "Admin") {
        url += `?team_name=${loggedInUser.team_name}`;
      } else if (loggedInUser.role_name === "SuperAdmin") {
        url;
      } else {
        goto("/login");
        throw new Error(`Failed to fetch data. User not logged in.`);
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();

      // //if the response is an array, map the array to the holidayMap
      if (Array.isArray(data)) {
        data.forEach((value, index) => holidayMap.set(index, value));
      } else {
        //if there is only one holidayRequest, the response is not an array
        holidayMap.set(0, data);
      }
      return holidayMap;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }

  function setEditMode(data: any) {
    showModal = true;
    $editMode = true;
    holidayData = data;
  }

  function setCreateMode() {
    showModal = true;
    $createMode = true;
  }

  function setDeleteMode(data: any) {
    showModal = true;
    $deleteMode = true;
    holidayData = data;
  }
</script>

<main class="page">
  <div class="tablePage relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 font-semibold text-left text-gray-900 dark:text-white relative"
      >
        <h1 class="text-2xl">Holiday Requests</h1>
        <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
          Here you can create, edit or delete holdiay requests (Only admins can
          approve).
        </p>
        <button
          type="button"
          class="createButton absolute bottom-2 right-20"
          on:click={() => setCreateMode()}
        >
          <p class="icons">
            Create Request
            <Icon icon="mdi:calendar-plus-outline" inline={true} />
          </p>
        </button>
      </caption>
      {#if holidayMap.size === 0}
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-3xl font-semibold text-gray-900 dark:text-white">
            No Holiday Requests found
          </h1>
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            There are no Holiday Requests in the database.
          </p>
        </div>
      {:else}
        <thead
          class="text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white"
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
          {#each holidayMap as item (item[0])}
            <tr class="text-lg text-black dark:text-gray-200">
              <td>{item[1].description}</td>
              <td>{item[1].start_date}</td>
              <td>{item[1].end_date}</td>
              {#if item[1].time_of_day === null}
                <td>N/A</td>
              {:else}
                <td>{item[1].time_of_day}</td>
              {/if}
              <td>{item[1].team_name}</td>
              <td>{item[1].full_name}</td>
              {#if item[1].approved === false}
                <td>Rejected</td>
              {:else if item[1].approved === true}
                <td>Approved</td>
              {:else}
                <td>Not Reviewed Yet</td>
              {/if}
              <td>
                <button
                  type="button"
                  class="editButton"
                  on:click={() => setEditMode(item[1])}
                >
                  <p class="icons">
                    Edit
                    <Icon icon="mdi:calendar-edit-outline" inline={true} />
                  </p>
                </button>
                <button
                  type="button"
                  class="deleteButton"
                  on:click={() => setDeleteMode(item[1])}
                >
                  <p class="icons">
                    Delete
                    <Icon icon="mdi:calendar-remove-outline" inline={true} />
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

{#if $editMode}
  <EditModal {holidayData} bind:showModal />
{/if}

{#if $deleteMode}
  <DeleteModal {holidayData} bind:showModal />
{/if}
