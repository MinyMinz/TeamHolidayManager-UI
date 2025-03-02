<script lang="ts">
  import { writable } from 'svelte/store';

  // WIP: Sprint Velocity Calculator page

  // Create writable stores for the input values max 5 sprints and the number of weeks can vary
  const sprintVelocities = writable([0, 0, 0, 0, 0]);
  const numberOfWeeks = writable(0);
  const currentVelocity = writable(0);

    // Flag to control page visibility
    const isPageEnabled = false;

  // Function to calculate the current sprint velocity
  function calculateVelocity() {
    let velocities: number[] = [];
    sprintVelocities.subscribe(value => velocities = value)();
    let weeks = 0;
    numberOfWeeks.subscribe(value => weeks = value)();

    const totalVelocity = velocities.reduce((acc, val) => acc + val, 0);
    const averageVelocity = totalVelocity / velocities.length;
    const calculatedVelocity = averageVelocity * weeks;

    currentVelocity.set(calculatedVelocity);
  }
</script>

{#if isPageEnabled}
<main class="defaultPage">
  <h1 class="text-3xl font-bold text-center">Sprint Velocity Calculator</h1>
  <p class="text-center">Calculate the average velocity of your team based on the last 5 sprints.</p>

  <div class="form-container">
    {#each $sprintVelocities as velocity, index}
      <div class="form-group">
        <label for="sprint-{index}">Sprint {index + 1} Velocity:</label>
        <input
          type="number"
          id="sprint-{index}"
          bind:value={$sprintVelocities[index]}
          class="form-input"
        />
      </div>
    {/each}

    <div class="form-group">
      <label for="numberOfWeeks">Number of Weeks:</label>
      <input
        type="number"
        id="numberOfWeeks"
        bind:value={$numberOfWeeks}
        class="form-input"
      />
    </div>

    <button class="calculate-button" on:click={calculateVelocity}>Calculate Velocity</button>

    <div class="result">
      <p>Current Sprint Velocity: {$currentVelocity}</p>
    </div>
  </div>
</main>
{/if}