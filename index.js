const builtinModules = require("module").builtinModules.filter(a => !a.startsWith("_") && !a.includes("/"));

for (const mod of builtinModules) exports[mod] = require(mod);
