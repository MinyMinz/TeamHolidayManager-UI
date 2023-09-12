import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const invalidateAll = /* @__PURE__ */ client_method("invalidate_all");
const PUBLIC_URI = "http://127.0.0.1:8000";
const globalModal_svelte_svelte_type_style_lang = "";
const css = {
  code: "dialog.svelte-k4v4ud.svelte-k4v4ud{max-width:32em;border-radius:0.2em;border:none;padding:0;background-color:black}dialog.svelte-k4v4ud.svelte-k4v4ud::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-k4v4ud>div.svelte-k4v4ud{padding:1em}dialog[open].svelte-k4v4ud.svelte-k4v4ud{animation:svelte-k4v4ud-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-k4v4ud-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-k4v4ud.svelte-k4v4ud::backdrop{animation:svelte-k4v4ud-fade 0.2s ease-out}@keyframes svelte-k4v4ud-fade{from{opacity:0}to{opacity:1}}button.svelte-k4v4ud.svelte-k4v4ud{display:block}",
  map: null
};
const GlobalModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal = false } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css);
  return ` <dialog class="svelte-k4v4ud"${add_attribute("this", dialog, 0)}> <div class="bg-white dark:bg-gray-900 p-4 svelte-k4v4ud">${slots.header ? slots.header({}) : ``} <hr> ${slots.default ? slots.default({}) : ``} <hr>   <div class="flex flex-col"><button class="focus:outline-none text-white bg-gray-500 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2 svelte-k4v4ud" autofocus data-svelte-h="svelte-1bkmiuq">Close</button></div></div> </dialog>`;
});
export {
  GlobalModal as G,
  PUBLIC_URI as P,
  goto as g,
  invalidateAll as i
};
