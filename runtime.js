const DEFAULT_CONFIG = require("./config");
const generate = require("./lib/generate");
const assembleCss = require("./lib/assemble-css");

const generator = config => {
  const _config = Object.assign({}, DEFAULT_CONFIG, config);
  const mediaQueries = _config.customMedia;

  generator.generate = () =>
    generate(_config, mediaQueries).then(modules => {
      return assembleCss(modules, _config);
    });

  function generator() {}
  return generator;
};

export default generator;
