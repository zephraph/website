import { writable } from 'svelte/store';

/**
 * Tracks whether the Banner component is currently visible in the viewport.
 * Used to conditionally hide the Name component when Banner is in view.
 */
export const bannerVisible = writable(false);
