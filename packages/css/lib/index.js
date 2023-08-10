#!/usr/bin/env node

const {join, sep} = require("path");
const {writeFile, stat} = require("fs").promises;
const {mkdirp, sort_keys} = require('./utils');
const {green} = require('kleur/colors');
const currentPackage = require('../package.json');

let DEFAULT_FILE = join(process.cwd(), "declare.config.js");
let DEFAULT_SCRIPTNAME = "css";
let DEFAULT_FORCE = false;

async function init(
  filename,
  force = DEFAULT_FORCE,
  scriptname = DEFAULT_SCRIPTNAME
) {
  const to = filename != null ? join(process.cwd(), filename) : DEFAULT_FILE;
  try {
    await stat(to);
    if (!force)
      throw new Error(
        "Output file already exists, use -F/--force if you really want to override"
      );
  } catch (error) {
    process.exit(1);
  }

  // copy default theme file, updating reference to JSON schema file
  await mkdirp(to.split(sep).slice(0, -1).join(sep));
  const themeFile = require("../default.config.js");

  // TODO: publish to schema repo
  // themeFile.$schema = join(
  //   process.cwd(),
  //   "node_modules",
  //   "declare.css",
  //   "schema.json"
  // );

  await writeFile(to, themeFile, {encoding: "utf8"});

  console.log(green(`Theme file copied to ${to}`));

  // update package file to include new scripts and dependency
  const packagePath = join(process.cwd(), "package.json");
  try {
    await stat(packagePath);
    const packageFile = require(packagePath);
    packageFile.scripts[scriptname] = `npm run ${scriptname}:build -- --watch`;
    packageFile.scripts[`${scriptname}:build`] = `declare build ${to}`;

    packageFile.devDependencies[currentPackage.name] = currentPackage.version;
    await writeFile(packagePath, JSON.stringify(packageFile, null, 2), {
      encoding: "utf8",
    });
    console.log(
      `Success! \`npm install\` and \`npm run ${scriptname}\` to get started`
    );
  } catch (error) {
    throw new Error("Could not update the package file");
  }
}

(async () => {
  await init();
})();
