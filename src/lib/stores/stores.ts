import { writable } from "svelte/store";

export const isLoggedIn = writable<boolean>(false); // Initialize as false

export const requestStatus = writable<string | null>(null); // Initialize as null

export const createMode = writable<boolean>(false); // Initialize as false

export const editMode = writable<boolean>(false); // Initialize as false

export const deleteMode = writable<boolean>(false); // Initialize as false
