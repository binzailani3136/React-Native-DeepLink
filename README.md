# React Native Deep Link and Universal Link
Works for both Android and iOS.
In general, you can use https deep link on Android, but iOS, it is only allowed to use URL schemes when we use deep link, not https.
So it need to use Universal Link on iOS.
Implementing deep link and universal link on React Native.
Enable to run the React Native app by tapping the URL links on SMS, Email and WebBrowser.
Used https links for both Android(Deep Link) and iOS(Universal Link)

## Installation

Just clone and run react-native run-ios or run-android

## Usage

---iOS---
First, need to upload apple-app-site-association file on the root of your server url.
For example if you want to run the app by tapping the URL on SMS or Email such as https://example.react.com,
you need to make apple-app-site-association and upload it to root directory of hosting server.
Reference this link about how to make apple-app-site-association file.
https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html
Second, check AppDeligate.m file
---Android---
And need to configure AndroidManifest.xml file.

## License

MIT
