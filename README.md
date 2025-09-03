# Testing With Expo

This branch is setup with Jest and Testing-Library frameworks

## Setup and Run Project

- ensure you have your android or ios simulator setup correctly
- in this project root directory...
  - create a .env file.
    - _see ".env file contents" below_
    - _be sure to replace "yourvalue" with what is related to your dependancy environment_
  - execute the command `npm install`
  - for android, execute command `npm run dev-android`
  - for ios, execute command `npm run dev-ios`

### .env file contents

```
MOBILE_ENV="dev"
APP_ANDROID_ICON="adaptive-icon.png"
APP_ANDROID_ICON_BACKGROUNDCOLOR="#ffffff"
APP_ANDROID_SPLASH_BACKGROUNDCOLOR="#ffffff"
APP_ANDROID_SPLASH_IMAGE_WIDTH="200"
APP_ANDROID_VERSION_CODE="1"
APP_API="https://yourvalue.yourvalue.com/"
APP_BUNDLE_IDENTIFIER="com.yourvalue.yourvalue"
APP_DEFAULT_BACKGROUNDCOLOR="#ffffff"
APP_IOS_BUILD_NUMBER="1.0.0"
APP_IOS_ICON="icon.png"
APP_IOS_ICON_BACKGROUNDCOLOR="#ffffff"
APP_IOS_SPLASH_BACKGROUNDCOLOR="#ffffff"
APP_IOS_SPLASH_IMAGE_WIDTH="200"
APP_NAME="Expo Testing"
APP_SCANDIT_LICENSE_KEY="yourvalue"
APP_SLUG="expo-testing"
APP_SPLASH_IMAGE="splash-icon.png"
APP_VERSION="1.0.0"
APP_WEB_FAVICON="favicon.png"
EXPO_AUTH_SESSION_ANDROID_PATH="com.yourvalue.yourvalue/yourvalue"
EXPO_AUTH_SESSION_CLIENT_ID="yourvalue"
EXPO_AUTH_SESSION_IOS_NATIVE="msauth.com.yourvalue.yourvalue://auth"
EXPO_AUTH_SESSION_SCOPE_URL="https://yourvalue.yourvalue.com/API.All"
EXPO_AUTH_SESSION_TENANT_ID="yourvalue"
```
