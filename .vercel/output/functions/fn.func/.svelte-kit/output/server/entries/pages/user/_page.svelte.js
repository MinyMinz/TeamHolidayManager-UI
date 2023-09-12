import { c as create_ssr_component, a as subscribe, v as validate_component, f as add_attribute, h as each, e as escape } from "../../../chunks/ssr.js";
import { g as goto, G as GlobalModal, P as PUBLIC_URI, i as invalidateAll } from "../../../chunks/globalModal.js";
import { c as createMode, d as deleteMode, e as editMode, I as Icon } from "../../../chunks/Icon.js";
const CreateModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_createMode;
  $$unsubscribe_createMode = subscribe(createMode, (value) => value);
  const loggedInUser = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }
  let { showModal = false } = $$props;
  let teams = [];
  let roles = [];
  if (!loggedInUser) {
    goto("/");
  } else if (loggedInUser.role_name === "SuperAdmin" || loggedInUser.role_name === "Admin") {
    (async () => {
      await fetchTeams();
      await fetchRoles();
    })();
  }
  async function fetchTeams() {
    let url = `${PUBLIC_URI}/teams`;
    if (loggedInUser?.role_name === "Admin") {
      url += `?team_name=${loggedInUser.team_name}`;
    }
    const teamResponse = await window.fetch(url);
    const teamData = await teamResponse.json();
    teams = teamData;
  }
  async function fetchRoles() {
    let url = `${PUBLIC_URI}/roles`;
    if (loggedInUser?.role_name === "Admin") {
      url += `?role_name=User`;
    }
    const roleResponse = await window.fetch(url);
    const roleData = await roleResponse.json();
    roles = roleData;
  }
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(GlobalModal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h1 class="text-black dark:text-white" slot="header" data-svelte-h="svelte-1gmfiuv">Creating New User</h1>`;
        },
        default: () => {
          return `<form class="text-black dark:text-white"><label for="fullname" data-svelte-h="svelte-1rf5pq8">*Full Name:</label><br> <input class="form-input" type="text" id="full_name" name="fullname"><br> <label for="email" data-svelte-h="svelte-10zdh5m">*Email:</label><br> <input class="form-input" type="email" id="email" name="email"><br> <label for="password" data-svelte-h="svelte-1e6zq3o">*Password:</label><br> <input class="form-input" type="text" id="password" name="password"><br> ${loggedInUser?.role_name === "User" || loggedInUser?.role_name === "Admin" ? `<label for="teamName" data-svelte-h="svelte-1vpznso">*Team Name:</label><br> <input class="form-input" type="text" id="team_name" name="teamName"${add_attribute("value", loggedInUser.team_name, 0)} ${"disabled"}><br> <label for="roleName" data-svelte-h="svelte-aoytbm">*Role Name:</label><br> <input class="form-input" type="text" id="role_name" name="roleName" value="User" ${"disabled"}><br>` : `${loggedInUser?.role_name === "SuperAdmin" ? `<label for="teamName" class="block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-14tmdk9">Team Name:</label> <select class="selectorDropdown"><option selected value data-svelte-h="svelte-10ld94m">*Choose Team</option>${each(teams, (team) => {
            return `${teams.name !== "Super" ? `<option${add_attribute("value", team.name, 0)}>${escape(team.name)}</option>` : ``}`;
          })}</select> <label for="roleName" class="block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1jv6kuz">Role Name:</label> <select class="selectorDropdown"><option selected value data-svelte-h="svelte-ojt9dd">*Choose Role</option>${each(roles, (role) => {
            return `${role.name !== "SuperAdmin" ? `<option${add_attribute("value", role.name, 0)}>${escape(role.name)}</option>` : ``}`;
          })}</select>` : ``}`} ${``}</form> <br> <div class="flex flex-col"><button class="createOrUpdateSubmitButton" data-svelte-h="svelte-ohk5sb">Create</button></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_createMode();
  return $$rendered;
});
const DeleteModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_deleteMode;
  $$unsubscribe_deleteMode = subscribe(deleteMode, (value) => value);
  let { showModal = false } = $$props;
  let { user } = $$props;
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
      }
    }
  }
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(GlobalModal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 class="text-black dark:text-white" slot="header">Please confirm you wish to delete ${escape(user.full_name)}&#39;s account from the system.</h2>`;
        },
        default: () => {
          return `${``} <div class="flex flex-col mt-2"><button class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" data-svelte-h="svelte-1lrqiqm">Delete User</button></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_deleteMode();
  return $$rendered;
});
const EditModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_editMode;
  $$unsubscribe_editMode = subscribe(editMode, (value) => value);
  let { showModal = false } = $$props;
  let { userData } = $$props;
  const loggedInUser = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }
  let teams = [];
  let roles = [];
  userData.team_name;
  userData.role_name;
  if (loggedInUser.role_name === "SuperAdmin" || loggedInUser.role_name === "Admin") {
    (async () => {
      await fetchTeams();
      await fetchRoles();
    })();
  }
  async function fetchTeams() {
    let url = `${PUBLIC_URI}/teams`;
    if (loggedInUser?.role_name === "Admin") {
      url += `?team_name=${loggedInUser.team_name}`;
    }
    const teamResponse = await window.fetch(url);
    const teamData = await teamResponse.json();
    teams = teamData;
  }
  async function fetchRoles() {
    let url = `${PUBLIC_URI}/roles`;
    if (loggedInUser?.role_name === "Admin") {
      url += `?role_name=User`;
    }
    const roleResponse = await window.fetch(url);
    const roleData = await roleResponse.json();
    roles = roleData;
  }
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.userData === void 0 && $$bindings.userData && userData !== void 0)
    $$bindings.userData(userData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(GlobalModal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 class="text-black dark:text-white" slot="header" data-svelte-h="svelte-1gkyhyj">Updating Existing User</h2>`;
        },
        default: () => {
          return `<form class="text-black dark:text-white"><label for="fullname" data-svelte-h="svelte-1rf5pq8">*Full Name:</label><br> <input class="form-input" type="text" id="full_name" name="fullname"${add_attribute("value", userData.full_name, 0)}><br> <label for="email" data-svelte-h="svelte-10zdh5m">*Email:</label><br> <input class="form-input" type="email" id="email" name="email"${add_attribute("value", userData.email, 0)}><br> <label for="password" data-svelte-h="svelte-1e6zq3o">*Password:</label><br> <input class="form-input" type="text" id="password" name="password"${add_attribute("value", userData.password, 0)}><br> ${loggedInUser?.role_name === "User" || loggedInUser?.role_name === "Admin" ? `<label class="text-gray-600" for="teamName" data-svelte-h="svelte-obofin">*Team Name:</label><br> <input class="disabled-form-input" type="text" id="team_name" name="teamName"${add_attribute("value", userData?.team_name, 0)} ${"disabled"}><br> <label class="text-gray-600" for="roleName" data-svelte-h="svelte-29cpyx">*Role Name:</label><br> <input class="disabled-form-input" type="text" id="role_name" name="roleName"${add_attribute("value", userData?.role_name, 0)} ${"disabled"}><br>` : `${loggedInUser?.role_name === "SuperAdmin" ? `<label for="teamName" class="block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-14tmdk9">Team Name:</label> <select class="selectorDropdown"><option selected value data-svelte-h="svelte-10ld94m">*Choose Team</option>${each(teams, (team) => {
            return `${teams.name !== "Super" ? `<option${add_attribute("value", team.name, 0)}>${escape(team.name)}</option>` : ``}`;
          })}</select> <label for="roleName" class="block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1jv6kuz">Role Name:</label> <select class="selectorDropdown"><option selected value data-svelte-h="svelte-ojt9dd">*Choose Role</option>${each(roles, (role) => {
            return `${role.name !== "SuperAdmin" ? `<option${add_attribute("value", role.name, 0)}>${escape(role.name)}</option>` : ``}`;
          })}</select>` : ``}`} ${``}</form> <br> <div class="flex flex-col"><button class="createOrUpdateSubmitButton" data-svelte-h="svelte-usm7gp">Update</button></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_editMode();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteMode, $$unsubscribe_deleteMode;
  let $createMode, $$unsubscribe_createMode;
  let $editMode, $$unsubscribe_editMode;
  $$unsubscribe_deleteMode = subscribe(deleteMode, (value) => $deleteMode = value);
  $$unsubscribe_createMode = subscribe(createMode, (value) => $createMode = value);
  $$unsubscribe_editMode = subscribe(editMode, (value) => $editMode = value);
  const loggedInUser = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }
  let showModal = false;
  let currentUserData;
  let userMap = /* @__PURE__ */ new Map();
  let columnNames = ["Full name", "email", "password", "Team", "Role"];
  async function fetchUsers() {
    try {
      let url = `${PUBLIC_URI}/users`;
      if (loggedInUser?.role_name === "User") {
        url += `?user_id=${loggedInUser.id}`;
      } else if (loggedInUser.role_name === "Admin") {
        url += `?team=${loggedInUser.team_name}`;
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
      if (Array.isArray(data)) {
        data.forEach((value, index) => userMap.set(index, value));
      } else {
        userMap.set(0, data);
      }
      return userMap;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!showModal) {
        createMode.set(false);
        editMode.set(false);
        deleteMode.set(false);
        if (typeof window !== "undefined") {
          invalidateAll().then(() => {
            fetchUsers().then((res) => {
              userMap = res;
            });
          });
        }
      }
    }
    $$rendered = `<main class="page"><div class="tablePage relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><caption class="p-5 font-semibold text-left text-gray-900 dark:text-white relative"><h1 class="text-2xl" data-svelte-h="svelte-lsmgc9">User Management</h1> ${loggedInUser?.role_name !== "User" ? `<p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1sdiany">Here you can create, edit or delete users.</p> <button type="button" class="createButton absolute bottom-2 right-24"><p class="icons">Create User
              ${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:account-plus", inline: true }, {}, {})}</p></button>` : `<p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1enyvg0">Here you can edit your accounts name, email and password.</p>`}</caption> ${userMap.size === 0 ? `<div class="flex flex-col items-center justify-center h-full" data-svelte-h="svelte-1ifnstg"><h1 class="text-3xl font-semibold text-gray-900 dark:text-white">No users found</h1> <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are no users in the database.</p></div>` : `<thead class="text-center text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-white"><tr>${each(columnNames, (column) => {
      return `<th scope="col" class="text-base">${escape(column)} </th>`;
    })} <th class="text-base w-1/6" data-svelte-h="svelte-55cih7">Actions</th></tr></thead> <tbody class="text-center">${each(userMap, (item) => {
      return `<tr class="text-lg text-black dark:text-gray-200"><td>${escape(item[1].full_name)}</td> <td>${escape(item[1].email)}</td> <td>${escape("*".repeat(item[1].password.length))}</td>  <td>${escape(item[1].team_name)}</td> <td>${escape(item[1].role_name)}</td> <td><button type="button" class="editButton"><p class="icons">Edit
                    ${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:account-edit", inline: true }, {}, {})} </p></button> ${loggedInUser?.role_name !== "User" ? `<button type="button" class="deleteButton"><p class="icons">Delete
                      ${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:account-remove", inline: true }, {}, {})}</p> </button>` : ``}</td> </tr>`;
    })}</tbody>`}</table></div></main> ${$createMode ? `${validate_component(CreateModal, "CreateModal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${$editMode ? `${validate_component(EditModal, "EditModal").$$render(
      $$result,
      { userData: currentUserData, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${$deleteMode ? `${validate_component(DeleteModal, "DeleteModal").$$render(
      $$result,
      { user: currentUserData, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_deleteMode();
  $$unsubscribe_createMode();
  $$unsubscribe_editMode();
  return $$rendered;
});
export {
  Page as default
};
