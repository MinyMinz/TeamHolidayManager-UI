

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.422315fc.js","_app/immutable/chunks/scheduler.fd84be43.js","_app/immutable/chunks/index.681d7507.js","_app/immutable/chunks/navigation.7f03ff5f.js","_app/immutable/chunks/singletons.31831151.js"];
export const stylesheets = ["_app/immutable/assets/0.084d405a.css"];
export const fonts = [];
