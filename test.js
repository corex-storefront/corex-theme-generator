const runtime = require('./runtime');

runtime()
  .generate()
  .then((css) => console.log(css));
