Package.describe({
  summary: "Javascript next to Javascript of today compiler"
});

Package._transitional_registerBuildPlugin({
  name: "compileTraceur",
  use: [],
  sources: [
    'plugin/compile-traceur.js'
  ],
  npmDependencies: {"traceur": "0.0.32"}
});
