var traceur = Npm.require("traceur");

var handler = function (compileStep) {
  var source = compileStep.read().toString("utf8");
  var outputFile = compileStep.inputPath + ".js";

  var options = {
    filename: compileStep.inputPath,
    sourceMap: true
  };

  var result = traceur.compile(source, options);

  if (result.errors.length > 0) {
    throw new Error(result.errors);
  }

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: result.js,
    soureMap: result.sourceMap
  });
};

Plugin.registerSourceHandler("traceur", handler);
