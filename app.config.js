module.exports = {
  name: process.env.APP_NAME,
  slug: process.env.APP_SLUG,
  version: process.env.APP_VERSION,
  scheme: 'msauth',
  newArchEnabled: false,
  orientation: 'portrait',
  icon: `./assets/images/${process.env.APP_IOS_ICON}`,
  userInterfaceStyle: 'light',
  backgroundColor: process.env.APP_DEFAULT_BACKGROUNDCOLOR,
  assetBundlePatterns: ['**/*'],
  ios: {
    icon: {
      backgroundColor: process.env.APP_IOS_ICON_BACKGROUNDCOLOR
    },
    infoPlist: {
      NSCameraUsageDescription: `Your camera will be used to scan barcodes or take pictures for ${process.env.APP_NAME}.`,
      NSLocationWhenInUseUsageDescription: 'Your locations information will be used whenever you access the inventory.'
    },
    supportsTablet: true,
    bundleIdentifier: process.env.APP_BUNDLE_IDENTIFIER,
    buildNumber: process.env.APP_IOS_BUILD_NUMBER
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `./assets/images/${process.env.APP_ANDROID_ICON}`,
      backgroundColor: process.env.APP_ANDROID_ICON_BACKGROUNDCOLOR
    },
    package: process.env.APP_BUNDLE_IDENTIFIER,
    versionCode: Number(process.env.APP_ANDROID_VERSION_CODE)
  },
  web: {
    favicon: `./assets/images/${process.env.APP_WEB_FAVICON}`
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          minSdkVersion: 26,
          compileSdkVersion: 35,
          targetSdkVersion: 35
        },
        ios: {
          useFrameworks: 'static'
        }
      }
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow $(PRODUCT_NAME) to access your photos',
        cameraPermissions: 'Allow $(PRODUCT_NAME) to access your camera'
      }
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: 'Allow $(PRODUCT_NAME) to use your location.'
      }
    ],
    [
      'expo-splash-screen',
      {
        ios: {
          backgroundColor: process.env.APP_IOS_SPLASH_BACKGROUNDCOLOR,
          image: `./assets/images/${process.env.APP_SPLASH_IMAGE}`,
          imageWidth: Number(process.env.APP_IOS_SPLASH_IMAGE_WIDTH)
        },
        android: {
          backgroundColor: process.env.APP_ANDROID_SPLASH_BACKGROUNDCOLOR,
          image: `./assets/images/${process.env.APP_SPLASH_IMAGE}`,
          imageWidth: Number(process.env.APP_ANDROID_SPLASH_IMAGE_WIDTH)
        }
      }
    ]
  ]
};
