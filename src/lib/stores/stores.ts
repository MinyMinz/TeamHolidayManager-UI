import { writable } from "svelte/store";


// store for checking if user is logged in
export const isLoggedIn = writable<boolean>(false); // Initialize as false

// store for request message when doing an api call
export const requestStatus = writable<string | null>(null); // Initialize as null

// store for each modal state & table refresh check
export const createMode = writable<boolean>(false); // Initialize as false

export const editMode = writable<boolean>(false); // Initialize as false

export const deleteMode = writable<boolean>(false); // Initialize as false

export const tableRefresh = writable<boolean>(false); // Initialize as false

// store for fetched data 
export const userManagmentData = writable<any | null>(null); // Initialize as null

export const teamManagmentData = writable<any | null>(null); // Initialize as null

export const holidayManagmentData = writable<any | null>(null); // Initialize as null

