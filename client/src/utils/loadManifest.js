
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
                console.log(`fetched manifest from ${path}`);
                console.log(response);
                return response;
            }
        } catch (error) {
            console.warn(`Failed to load manifest from ${path}`);
        }
    }
    return response.json();
}