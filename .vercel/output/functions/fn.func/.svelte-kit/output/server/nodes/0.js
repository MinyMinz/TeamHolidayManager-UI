

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b7ff215a.js","_app/immutable/chunks/scheduler.fd84be43.js","_app/immutable/chunks/index.681d7507.js","_app/immutable/chunks/navigation.bb76d6ea.js","_app/immutable/chunks/singletons.d695487f.js"];
export const stylesheets = ["_app/immutable/assets/0.084d405a.css"];
export const fonts = [];
