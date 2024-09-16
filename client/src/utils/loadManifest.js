
export async function loadManifest() {
    const response = await fetch('/dist/.vite/manifest.json');
    if (!response.ok) {
        throw new Error('Failed to load asset manifest');
    }
    return response.json();
}