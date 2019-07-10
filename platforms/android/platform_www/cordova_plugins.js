cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-cipherlab-rs30.CipherlabRS30CordovaPlugin",
      "file": "plugins/cordova-plugin-cipherlab-rs30/www/CipherlabRS30CordovaPlugin.js",
      "pluginId": "cordova-plugin-cipherlab-rs30",
      "clobbers": [
        "cordova.plugins.CipherlabRS30CordovaPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-crosswalk-webview": "2.4.0",
    "cordova-plugin-cipherlab-rs30": "0.0.3"
  };
});