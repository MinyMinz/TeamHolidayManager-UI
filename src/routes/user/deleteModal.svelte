<script lang="ts">
  import Modal from "$lib/components/modal/GlobalModal.svelte";
  import { deleteMode } from "$lib/components/stores/stores";

  export let showModal = false;
  export let username: any; //= { id: Number, full_name: String };
  let msg = "";

  async function deleteUser() {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/users?user_id=` + username.id,
        { method: "DELETE" }
      );

      if (response.ok) {
        showModal = false;
        $deleteMode = false;
      } else {
        msg = `Status: ${response.status} Detail: ${response.statusText}`;
        throw new Error(`Failed to send data. Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to propagate it to the caller
    }
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Please confirm you wish to delete {username.full_name} from the system.
  </h2>
  {#if msg}
    <p class="font-bold text-red-600 dark:text-red-400 text-center">{msg}</p>
  {/if}
  <div class="flex flex-col mt-2">
    <button
      class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      on:click={() => deleteUser()}>Delete User</button
    >
  </div>
</Modal>
