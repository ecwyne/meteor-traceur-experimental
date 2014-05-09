Package.describe({
  summary: "Javascript next to Javascript of today compiler"
});

Package.on_use(function (api) {
  api.add_files(".npm/plugin/compileTraceur/node_modules/traceur/bin/traceur-runtime.js");
});

Package._transitional_registerBuildPlugin({
  name: "compileTraceur",
  use: [],
  sources: [
    "plugin/compile-traceur.js"
  ],
  npmDependencies: {"traceur": "0.0.41"}
});
