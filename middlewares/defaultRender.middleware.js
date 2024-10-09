module.exports = (req, res, next) => {
  const originalRender = res.render;

  res.render = function (view, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    options = options || {};

    options.APP_NAME = "Garuda International";

    originalRender.call(res, view, options, callback);
  };

  next();
};
