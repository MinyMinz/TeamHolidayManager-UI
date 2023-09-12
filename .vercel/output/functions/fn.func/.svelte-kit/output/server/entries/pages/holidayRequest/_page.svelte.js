import { c as create_ssr_component, a as subscribe, v as validate_component, f as add_attribute, h as each, e as escape } from "../../../chunks/ssr.js";
import { G as GlobalModal, i as invalidateAll, P as PUBLIC_URI, g as goto } from "../../../chunks/globalModal.js";
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
          return `<h1 class="text-black dark:text-white" slot="header" data-svelte-h="svelte-o5b83">Creating Holiday Request</h1>`;
        },
        default: () => {
          return `<form class="text-black dark:text-white"><label for="Description" data-svelte-h="svelte-10pq9m4">Description:</label><br> <input class="form-input" type="text" id="description" name="Description"><br> <label for="start_date" data-svelte-h="svelte-1f2kpm3">*Start Date:</label><br> <input class="form-input" type="date" id="start_date" name="start_date" min="2000-01-02"><br> <label for="end_date" data-svelte-h="svelte-urgbfl">*End Date:</label><br> <input class="form-input" type="date" id="end_date" name="end_date" min="2000-01-02"><br> <label for="timeOfDay" class="block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-hfsuet">TimeOfDay:</label> <select class="selectorDropdown"><option${add_attribute("value", null, 0)} data-svelte-h="svelte-1vm96zp">N/A</option><option value="AM" data-svelte-h="svelte-o243pu">Morning</option><option value="PM" data-svelte-h="svelte-1mey1rx">Afternoon</option></select> <label for="fullname" data-svelte-h="svelte-v5eqky">*Fullname:</label><br> ${loggedInUser?.role_name === "User" ? `<input class="form-input" type="text" id="full_name" name="fullname"${add_attribute("value", loggedInUser?.full_name, 0)} ${"disabled"}><br>` : `<input class="form-input" type="text" id="full_name" name="fullname"${add_attribute("value", loggedInUser?.full_name, 0)} ${""}><br>`} ${``}</form> <br> <div class="flex flex-col"><button class="createOrUpdateSubmitButton" data-svelte-h="svelte-kms3zp">Create</button></div>`;
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
  let { holidayData } = $$props;
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
      }
    }
  }
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.holidayData === void 0 && $$bindings.holidayData && holidayData !== void 0)
    $$bindings.holidayData(holidayData);
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
          return `<h2 class="text-black dark:text-white" slot="header" data-svelte-h="svelte-67zrq3">Please confirm you wish to delete this Holiday from the system.</h2>`;
        },
        default: () => {
          return `${``} <div class="flex flex-col mt-2"><button class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" data-svelte-h="svelte-s4kb8e">Delete User</button></div>`;
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
  let { holidayData } = $$props;
  holidayData.time_of_day;
  holidayData.approved;
  const loggedInUser = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.holidayData === void 0 && $$bindings.holidayData && holidayData !== void 0)
    $$bindings.holidayData(holidayData);
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
          return `<h2 class="text-black dark:text-white" slot="header" data-svelte-h="svelte-wn9que">Editing Holiday Request</h2>`;
        },
        default: () => {
          return `<form class="text-black dark:text-white"><form class="text-black dark:text-white"><label for="Description" data-svelte-h="svelte-10pq9m4">Description:</label><br> <input class="form-input" type="text" id="description" name="Description"${add_attribute("value", holidayData.description, 0)}><br> <label for="start_date" data-svelte-h="svelte-1f2kpm3">*Start Date:</label><br> <input class="form-input" type="date" id="start_date" name="start_date" min="2000-01-02"${add_attribute("value", holidayData.start_date, 0)}><br> <label for="end_date" data-svelte-h="svelte-urgbfl">*End Date:</label><br> <input class="form-input" type="date" id="end_date" name="end_date" min="2000-01-02"${add_attribute("value", holidayData.end_date, 0)}><br> <label for="timeOfDay" class="block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1j9gh9x">TimeOfDay:</label> <select class="selectorDropdown"><option${add_attribute("value", null, 0)} data-svelte-h="svelte-1vm96zp">N/A</option><option value="AM" data-svelte-h="svelte-lr5jey">AM</option><option value="PM" data-svelte-h="svelte-1mp3qoy">PM</option></select> <label for="fullname" data-svelte-h="svelte-v5eqky">*Fullname:</label><br> ${loggedInUser?.role_name === "User" ? `<input class="form-input" type="text" id="full_name" name="fullname"${add_attribute("value", holidayData.full_name, 0)} ${"disabled"}><br>` : `<input class="form-input" type="text" id="full_name" name="fullname"${add_attribute("value", holidayData.full_name, 0)} ${""}><br> <label for="approved" data-svelte-h="svelte-1br9qbl">Status:</label><br> <select class="selectorDropdown"><option${add_attribute("value", null, 0)} data-svelte-h="svelte-1vm96zp">N/A</option><option${add_attribute("value", true, 0)} data-svelte-h="svelte-zlcfgp">Approve</option><option${add_attribute("value", false, 0)} data-svelte-h="svelte-3opq0a">Reject</option></select>`} ${``}</form> <br> <div class="flex flex-col"><button class="createOrUpdateSubmitButton" data-svelte-h="svelte-18b0vqe">Update</button></div></form>`;
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
  let showModal = false;
  let holidayData;
  let holidayMap = /* @__PURE__ */ new Map();
  const loggedInUser = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
    }
  }
  let columnNames = [
    "Description",
    "Start Date",
    "End Date",
    "Time Of Day",
    "Team",
    "Name",
    "Status"
  ];
  async function fetchHolidayRequests() {
    try {
      let url = `${PUBLIC_URI}/holiday-request`;
      if (loggedInUser?.role_name === "User") {
        url += `?user_id=${loggedInUser.id}`;
      } else if (loggedInUser.role_name === "Admin") {
        url += `?team_name=${loggedInUser.team_name}`;
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
        data.forEach((value, index) => holidayMap.set(index, value));
      } else {
        holidayMap.set(0, data);
      }
      return holidayMap;
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
            fetchHolidayRequests().then((res) => {
              holidayMap = res;
            });
          });
        }
      }
    }
    $$rendered = `<main class="page"><div class="tablePage relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><caption class="p-5 font-semibold text-left text-gray-900 dark:text-white relative"><h1 class="text-2xl" data-svelte-h="svelte-12ynv2n">Holiday Requests</h1> <p class="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1bcdb64">Here you can create, edit or delete holdiay requests (Only admins can
          approve).</p> <button type="button" class="createButton absolute bottom-2 right-20"><p class="icons">Create Request
            ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mdi:calendar-plus-outline",
        inline: true
      },
      {},
      {}
    )}</p></button></caption> ${holidayMap.size === 0 ? `<div class="flex flex-col items-center justify-center h-full" data-svelte-h="svelte-1wtpzku"><h1 class="text-3xl font-semibold text-gray-900 dark:text-white">No Holiday Requests found</h1> <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are no Holiday Requests in the database.</p></div>` : `<thead class="text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white"><tr>${each(columnNames, (column) => {
      return `<th scope="col" class="text-base">${escape(column)} </th>`;
    })} <th class="text-base w-1/6" data-svelte-h="svelte-55cih7">Actions</th></tr></thead> <tbody class="text-center">${each(holidayMap, (item) => {
      return `<tr class="text-lg text-black dark:text-gray-200"><td>${escape(item[1].description)}</td> <td>${escape(item[1].start_date)}</td> <td>${escape(item[1].end_date)}</td> ${item[1].time_of_day === null ? `<td data-svelte-h="svelte-qmff1s">N/A</td>` : `<td>${escape(item[1].time_of_day)}</td>`} <td>${escape(item[1].team_name)}</td> <td>${escape(item[1].full_name)}</td> ${item[1].approved === false ? `<td data-svelte-h="svelte-1bsqnwc">Rejected</td>` : `${item[1].approved === true ? `<td data-svelte-h="svelte-53e471">Approved</td>` : `<td data-svelte-h="svelte-zwpb3a">Not Reviewed Yet</td>`}`} <td><button type="button" class="editButton"><p class="icons">Edit
                    ${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "mdi:calendar-edit-outline",
          inline: true
        },
        {},
        {}
      )} </p></button> <button type="button" class="deleteButton"><p class="icons">Delete
                    ${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "mdi:calendar-remove-outline",
          inline: true
        },
        {},
        {}
      )}</p> </button></td> </tr>`;
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
      { holidayData, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${$deleteMode ? `${validate_component(DeleteModal, "DeleteModal").$$render(
      $$result,
      { holidayData, showModal },
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
