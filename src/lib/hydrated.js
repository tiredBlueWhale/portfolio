// https://github.com/sveltejs/kit/pull/6555#issuecomment-1236230223
export let hydrated = false

export function update() {
    hydrated = true;
}