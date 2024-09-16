
export async function loadManifest() {
<<<<<<< HEAD
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
=======
    const response = await fetch('/dist/.vite/manifest.json');
    if (!response.ok) {
        throw new Error('Failed to load asset manifest');
>>>>>>> parent of 78ee51e (changed how the loadManifest.js fetches the css files. Made changes in ThemeManager.jsx to handle loadManifest.js file changes. Added imports for css in main.jsx. Added server property to vite.config.js so I can see changes locally.)
    }
    return response.json();
}