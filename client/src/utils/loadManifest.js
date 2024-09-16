export async function loadManifest() {
    const manifestPaths = [
        '/manifest.json',
        '/dist/.vite/manifest.json',
        '/.vite/manifest.json'
    ];

    for (const path of manifestPaths) {
        try {
            const response = await fetch(path);
            if (response.ok) {
                return path;
            }
        } catch (error) {
            console.warn(`Failed to load manifest from ${path}`);
        }
    }

    throw new Error('Failed to load asset manifest from any known location');
}