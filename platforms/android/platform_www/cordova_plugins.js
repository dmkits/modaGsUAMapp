cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-cipherlab-rs30.CipherlabRS30CordovaPlugin",
      "file": "plugins/cordova-plugin-cipherlab-rs30/www/CipherlabRS30CordovaPlugin.js",
      "pluginId": "cordova-plugin-cipherlab-rs30",
      "clobbers": [
        "cordova.plugins.CipherlabRS30CordovaPlugin"
      ]
    },
    {
      "id": "cordova-plugin-keyboard.keyboard",
      "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
      "pluginId": "cordova-plugin-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-fullscreen.AndroidFullScreen",
      "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
      "pluginId": "cordova-plugin-fullscreen",
      "clobbers": [
        "AndroidFullScreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-cipherlab-rs30": "0.0.3",
    "cordova-plugin-crosswalk-webview": "2.4.0",
    "cordova-plugin-keyboard": "1.2.0",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-fullscreen": "1.1.0"
  };
});