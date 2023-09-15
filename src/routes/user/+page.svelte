<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { PUBLIC_URI } from "$env/static/public";
  import {
    createMode,
    deleteMode,
    editMode,
    requestStatus,
  } from "$lib/stores/stores";
  import type { User } from "$lib/types/customTypes";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import CreateModal from "./createModal.svelte";
  import DeleteModal from "./deleteModal.svelte";
  import EditModal from "./editModal.svelte";

  let showModal: boolean = false;
  let currentUserData: User;
  let userMap = new Map();
  const loggedInUser: any = {};

  $: if (!showModal) {
    createMode.set(false);
    editMode.set(false);
    deleteMode.set(false);
    //check if the browser is running the code
    if (typeof window !== "undefined") {
      invalidateAll().then(() => {
        // After invalidating, fetch the users again to get the updated list
        fetchUsers().then((res) => {
          userMap = res;
        });
      });
    }
  }

  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }

  onMount(async () => {
    //check if authMessage is set
    if ($requestStatus) {
      //reset the authMessage
      requestStatus.set(null);
    }
    //fetch the users on page load and set the userMap
    fetchUsers().then((res) => {
      userMap = res;
    });
  });

  //TODO: Look to autoset column names
  let columnNames = ["Full name", "email", "password", "Team", "Role"];

  async function fetchUsers() {
    await fetch(generateFetchURL())
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Status: ${res.status} `);
        }
        return res.json();
      })
      .then((res) => {
        if (Array.isArray(res)) {
          res.forEach((value, index) => userMap.set(index, value));
        } else {
          userMap.set(0, res);
        }
      })
      .catch((err) => {
        console.error(err);
        throw err; // Re-throw the error to propagate it to the caller
      });
    return userMap;
  }

  function generateFetchURL() {
    let url = `${PUBLIC_URI}/users`;
    if (loggedInUser?.role_name === "User") {
      return (url += `?user_id=${loggedInUser.id}`);
    } else if (loggedInUser.role_name === "Admin") {
      return (url += `?team=${loggedInUser.team_name}`);
    } else if (loggedInUser.role_name === "SuperAdmin") {
      return url;
    } else {
      goto("/login");
      throw new Error(`Failed to fetch data. User not logged in.`);
    }
  }

  function setEditMode(userData: any) {
    showModal = true;
    $editMode = true;
    currentUserData = userData;
  }

  function setCreateMode() {
    showModal = true;
    $createMode = true;
  }

  function setDeleteMode(userData: any) {
    showModal = true;
    $deleteMode = true;
    currentUserData = userData;
  }
</script>

<main class="page">
  <div class="tablePage relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 font-semibold text-left text-gray-900 dark:text-white relative"
      >
        <h1 class="text-2xl">User Management</h1>
        {#if loggedInUser?.role_name !== "User"}
          <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
            Here you can create, edit or delete users.
          </p>
          <button
            type="button"
            class="createButton absolute bottom-2 right-24"
            on:click={() => setCreateMode()}
          >
            <p class="icons">
              Create User
              <Icon icon="mdi:account-plus" inline={true} />
            </p>
          </button>
        {:else}
          <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
            Here you can edit your accounts name, email and password.
          </p>
        {/if}
      </caption>
      {#if userMap.size === 0}
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-3xl font-semibold text-gray-900 dark:text-white">
            No users found
          </h1>
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            There are no users in the database.
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
          {#each userMap as item (item[0])}
            <tr class="text-lg text-black dark:text-gray-200">
              <td>{item[1].full_name}</td>
              <td>{item[1].email}</td>
              <td>{"*".repeat(item[1].password.length)}</td>
              <!-- This is to replace password with * might get rid of length and just display a fixed number of * (display only)-->
              <td>{item[1].team_name}</td>
              <td>{item[1].role_name}</td>
              <td>
                <button
                  type="button"
                  class="editButton"
                  on:click={() => setEditMode(item[1])}
                >
                  <p class="icons">
                    Edit
                    <Icon icon="mdi:account-edit" inline={true} />
                  </p>
                </button>
                {#if loggedInUser?.role_name !== "User"}
                  <button
                    type="button"
                    class="deleteButton"
                    on:click={() => setDeleteMode(item[1])}
                  >
                    <p class="icons">
                      Delete
                      <Icon icon="mdi:account-remove" inline={true} />
                    </p>
                  </button>
                {/if}
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
  <EditModal userData={currentUserData} bind:showModal />
{/if}

{#if $deleteMode}
  <DeleteModal user={currentUserData} bind:showModal />
{/if}
