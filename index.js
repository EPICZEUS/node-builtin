const { builtinModules } = require("module");

for (const module of builtinModules) exports[module] = require(module);
