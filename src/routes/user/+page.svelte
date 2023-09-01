<script lang="ts">
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { goto } from "$app/navigation";
  import { userLoggedIn } from "$lib/components/stores/stores";
  import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'

  const loggedInUser = get(userLoggedIn);
  let userMap = new Map();

  onMount(async () => {
    if (!loggedInUser) {
      goto("/");
    }
    //fetch the users on page load and set the userMap
    fetchUsers().then((res) => {
      userMap = res;
    });
  });

  let columnNames = ["id", "Full name", "email", "password", "Team", "Role"];

  async function fetchUsers() {
    try {
      let url = `http://127.0.0.1:8000/users`;
      if (loggedInUser?.role_name === "Standard") {
        url += `?user_id=${loggedInUser.id}`;
      } else if (loggedInUser?.role_name === "Admin") {
        url += `?team=${loggedInUser.team_name}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      const userMap = new Map();

      if (Array.isArray(data)) {
        data.forEach((value, index) => userMap.set(index, value));
      } else {
        userMap.set(0, data);
      }
      return userMap;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }

</script>

<div class="tablePage">
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <caption
        class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        User Management
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Search for a user by email, username, user id or role. Here you can
          also create, edit or delete users.
        </p>
      </caption>
      <thead
        class="text-center text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white"
      >
        <tr>
          {#each columnNames as column}
            <th scope="col" class="text-base px-1 py-2">
              {column}
            </th>
          {/each}
          <th scope="col" class="text-base px-1 py-2">Actions</th>
          
        </tr>
      </thead>
      <tbody class="text-center">
        {#each userMap as item (item[0])}
          <tr class="text-lg dark:text-gray-200">
            <td>{item[1].id}</td>
            <td>{item[1].full_name}</td>
            <td>{item[1].email}</td>
            <td>{item[1].password}</td>
            <td>{item[1].role_name}</td>
            <td>{item[1].team_name}</td>
            <td class="w-8 h-8"><MdModeEdit />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
