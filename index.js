const { builtinModules } = require("module");

for (const mod of builtinModules) exports[mod] = require(mod);
