

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holidayRequest/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8c929958.js","_app/immutable/chunks/scheduler.fd84be43.js","_app/immutable/chunks/index.681d7507.js","_app/immutable/chunks/globalModal.36f546f4.js","_app/immutable/chunks/navigation.bb76d6ea.js","_app/immutable/chunks/singletons.d695487f.js","_app/immutable/chunks/public.7ee89064.js"];
export const stylesheets = ["_app/immutable/assets/globalModal.d1da76e8.css"];
export const fonts = [];
