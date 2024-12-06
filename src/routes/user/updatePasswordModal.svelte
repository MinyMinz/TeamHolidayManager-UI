<script lang="ts">
  import { PUBLIC_URI } from "../../config";
  import Modal from "$lib/modal/globalModal.svelte";
  import { passwordEditMode, requestStatus, tableRefresh } from "$lib/stores/stores";
  import type { UserWithPassword } from "$lib/types/customTypes";
  import { getUserTokenFromSessionStorage } from "$lib/customFunctions";

  const token: any = getUserTokenFromSessionStorage(); //get the jwt token from sessionStorage

  export let showModal = false;
  export let userData: UserWithPassword;
  let msg = "";

  async function updatePassword() {
    const inputList = getInputValues();
    await fetch(`${PUBLIC_URI}/users/password?user_id=`+ inputList["userId"]+ `&password=` +inputList["password"],
     {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + token
      }
      }
    )
    .then((res) => {
      if (!res.ok) {
        if (res.status === 422) {
          msg = "Please fill in all fields correctly!";
        } else {
          msg = "User update failed!";
        }
      } else {
        msg = "User updated successfully!";
        passwordEditMode.set(false);
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

  function getInputValues() {
    let inputs = document.querySelectorAll(
      ".form-input"
    ) as NodeListOf<HTMLInputElement>;
    let inputList: any = {};
    //add the id to the inputList first
    inputList["userId"] = userData.id;
    //add the rest of the inputs to the inputList
    inputList["password"] = inputs[0].value;
    return inputList;
  }
</script>

<Modal bind:showModal>
  <h2 class="text-black dark:text-white" slot="header">
    Updating User Password
  </h2>

  <form class="text-black dark:text-white">
    <label for="password">* New Password:</label><br/>
    <input
      class="form-input"
      type="text"
      id="password"
      name="password"
      value="" /><br />
    {#if msg}
      <br />
      <p class="text-red-500 font-bold text-center">{msg}</p>
    {/if}
  </form>
  <br />

  <div class="flex flex-col">
    <button class="submitModalButton" on:click={() => updatePassword()}>Update Password</button>
  </div>
</Modal>
