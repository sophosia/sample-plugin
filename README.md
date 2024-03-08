# sample-plugin

This template should help get you started developing Sophosia plugin with Vue 3 in Vite.

## Plugin Class

- Create `index.ts` in `src` directory. In this file, export your own plugin class.
- Add the following build configs to `vite.config.ts`. This will help vite to determine the entry file and the output file name.

```js
build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "SamplePlugin",
      // the name of the output files when the build is run
      fileName: "main"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
}
```

- After running `vite build`, this `dist` folder should have the following `main.js` file. And possibly `style.css` file if any vue components imports css files.

## Release your plugin

- Create a release in your github repo
- Upload the following files to the release
  - `info.json`(required): This file contains the information of your plugin.
  - `main.js`(required): The main js file for your plugin.
  - `style.css`(optional): The css file you plugin needs.

The following entries should be in the `info.json`:

```json
{
  "version": "0.0.1",
  "author": "Hunt",
  "name": "Sample Plugin",
  ""
}
```
