import { writable } from "svelte/store";
import type { user } from "../types/customTypes";

export const userLoggedIn = writable<user | null>(null); // Initialize as null

export const authMessage = writable<string | null>(null); // Initialize as null