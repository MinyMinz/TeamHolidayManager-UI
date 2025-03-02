<script lang="ts">
  import { PUBLIC_URI } from "../../config";
  import {
    createMode,
    deleteMode,
    editMode,
    passwordEditMode,
    requestStatus,
    tableRefresh,
    userManagmentData,
  } from "$lib/stores/stores";
  import type { User } from "$lib/types/customTypes";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import CreateModal from "./createModal.svelte";
  import DeleteModal from "./deleteModal.svelte";
  import EditModal from "./editModal.svelte";
  import UpdatePasswordModal from "./updatePasswordModal.svelte";
  import { getUserFromSessionStorage, getUserTokenFromSessionStorage } from "$lib/customFunctions";

  const loggedInUser: any = getUserFromSessionStorage(); //get the logged in user from sessionStorage
  const token: any = getUserTokenFromSessionStorage(); //get the jwt token from sessionStorage

  let showModal: boolean = false;
  let currentUserData: User;

  // reactive statement to check if the modal is closed and reset the modes and refresh the table upon sucessful creation, edit or deletion
  $: if (!showModal) {
    createMode.set(false);
    editMode.set(false);
    deleteMode.set(false);
    passwordEditMode.set(false);

    if ($tableRefresh) {
      fetchUsers();
    }
  }

  onMount(async () => {
    //check if authMessage is set
    if ($requestStatus) {
      //reset the authMessage
      requestStatus.set(null);
    }
    //fetch the users on page load and set the userMap
    await fetchUsers();
  });

  //TODO: Look to autoset column names
  let columnNames = ["Full Name", "Username", "Team Name", "Role", "Allocated Leave", "Remaning Leave"];

  async function fetchUsers() {
    // Fetch the data from the API based on the logged in user's role
    let userMap = new Map();
    await fetch(`${PUBLIC_URI}/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        }
      })
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
    userManagmentData.set(userMap);
    tableRefresh.set(false);
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

  function setUpdatePasswordMode(userData: any) {
    showModal = true;
    $passwordEditMode = true;
    currentUserData = userData;
  }
</script>

<main class="defaultPage"> 
  <div
    class="tablePage relative overflow-x-auto overflow-hidden shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption class="p-5 font-semibold text-left text-gray-900 dark:text-white relative">
        <h1 class="text-2xl underline">User Management</h1>
        <!-- If the logged in user is not a Standard User, show the create user button -->
        {#if loggedInUser?.role_name !== "User"}
          <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
            Here you can create, edit or delete users.
          </p>
          <button
            type="button"
            class="createButton absolute bottom-2 right-24"
            on:click={() => setCreateMode()}>
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
      <!-- If there are no users in the database, display a message -->
      {#if $userManagmentData === null || $userManagmentData.size === 0}
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-3xl font-semibold text-gray-900 dark:text-white">
            No users found
          </h1>
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            There are no users in the database.
          </p>
        </div>
      {:else}
        <!-- If there are users in the database, display the table -->
        <thead class="tableHeadings">
          <!-- Loop through the column names and display them in the table -->
          <tr>
            {#each columnNames as column}
              <th scope="col" class="text-base">
                {column}
              </th>
            {/each}
            <th class="text-base w-[35%]"> Actions </th>
          </tr>
        </thead>
        <tbody class="text-center">
          <!-- Loop through the user data and display it in the table -->
          {#each $userManagmentData as item (item[0])}
            <tr class="text-lg text-black dark:text-gray-200">
              <td>{item[1].full_name}</td>
              <td>{item[1].email}</td>
              <td>{item[1].team_name}</td>
              <td>{item[1].role_name}</td>
              <td>{item[1].allocated_holidays}</td>
              <td>{item[1].remaining_holidays}</td>
              <td>
                <button
                  type="button"
                  class="editButton"
                  on:click={() => setEditMode(item[1])}>
                  <p class="icons">
                    Edit
                    <Icon icon="mdi:account-edit" inline={true} />
                  </p>
                </button>
                
                <button
                  type="button"
                  class="passwordButton"
                  on:click={() => setUpdatePasswordMode(item[1])}>
                  <p class="icons">
                    Update Password
                    <Icon icon="mdi:account-edit" inline={true} />
                  </p>
              </button>
              {#if loggedInUser?.role_name !== "User" && item[1].role_name !== "SuperAdmin"}
                  <button
                    type="button"
                    class="deleteButton"
                    on:click={() => setDeleteMode(item[1])}>
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

{#if $passwordEditMode}
  <UpdatePasswordModal userData={currentUserData} bind:showModal />
{/if}

{#if $deleteMode}
  <DeleteModal user={currentUserData} bind:showModal />
{/if}
