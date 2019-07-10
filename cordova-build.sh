export ANDROID_HOME=/home/dmkits/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools

cordova build
OR
cordova build android --release -- --gradleArg=-PcdvMinSdkVersion=19

cordova emulate android