const generator = require("./index");
const fs = require("fs");

const config = require("./config.js");

const generate = async () => {
  const tachy = generator(config);

  const out = await tachy.generate();

  fs.writeFileSync("dist/index.html", out.docs);
  fs.writeFileSync("dist/tachyons.css", out.css);
  fs.writeFileSync("dist/tachyons.min.css", out.min);
};

generate();
