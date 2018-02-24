### [Demo - Try it on Expo](https://expo.io/@makkhay/crna)

## Assignment #1

### Objectives

- Intro to React Native, Expo and CRNA
- Intro to RN components & styling

### TODO

  - [x] Create a simple React Native app using any two of the following three methods:
  - [x] [Vanilla React Native](https://facebook.github.io/react-native/) **([GET STARTED](https://github.com/mobilespace/exploring-react-native#vanilla-react-native))**
  - [x] [CRNA](https://github.com/react-community/create-react-native-app) **([GET STARTED](https://github.com/mobilespace/exploring-react-native#crna))**
  - [ ] [Expo](https://expo.io) **([GET STARTED](https://github.com/mobilespace/exploring-react-native#expo))**
  - [x] Create a [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html) in your `CRNA` app with the following components:
  - [x] [Image component](https://facebook.github.io/react-native/docs/image.html) - must use 3 different images in various sizes & position them using flexbox
  - [x] [Button component](https://facebook.github.io/react-native/docs/button.html) - must be able to toggle the background color of the container view
  - [x] [FlatList component](https://facebook.github.io/react-native/docs/flatlist.html) - must use the provide mockData [here](https://raw.githubusercontent.com/mobilespace/exploring-react-native/master/CRNA/constants.js) to create a list of all Community Members
  - [x] [TextInput components](https://facebook.github.io/react-native/docs/textinput.html) - must allow the user to type the secret phrase & show an [Alert](https://facebook.github.io/react-native/docs/alert.html) if it's valid or not.
  - [ ] :star: **Bonus:** Use [WebView](https://facebook.github.io/react-native/docs/webview.html) component to open the community members Github profile
  - [ ] :star: **Bonus:** Use [Switch](https://facebook.github.io/react-native/docs/switch.html) component
  - [ ] :star: **Bonus:** Use the [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html) or the [TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html) component in place of the `Button` component above
  - [ ] :star: **Bonus:** Use [Platform](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module) API to display different UI for iOS & Android

### Demo

<img src='https://github.com/makkhay/first-react-nativeApp/blob/master/gif.gif' title='Video Walkthrough.' width='' alt='Video Walkthrough' />

## Vanilla React Native

- Most **control & customization** for a RN app - let's you write native code for iOS (Swift) & Android (Java/Kotlin)
- **Needs XCode & Android Studio** to run the app on your computer on an iOS Simualor or Android Emulator
- **Least beginner friendly but most powerful** way to get started with RN (with respect to setup)

### Setup & Run

```
npm install -g react-native-cli

react-native init VanillaReactNative

cd VanillaReactNative

react-native run-ios
  or
react-native run-android
```

For more details or if you run into trouble, follow [this guide](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies).

<br />

## CRNA

- Most **functional & flexible** of all the options - gives you Expo tooling and also allows your to eject out of the Expo ecosystem and generates iOS & Android code for you
- **Doesn't need XCode & Android Studio** - can scan the QR code on your expo app and run your RN app
- **Most flexible** way to get started with RN

### Setup & Run

```
npm install -g create-react-native-app

create-react-native-app CRNA

cd CRNA

npm start

scan the QR code on the Expo mobile app
  or
npm run ios (needs Xcode)
  or
npm run android (needs Android Studio)
```

For more details or if you run into trouble, follow [this guide](https://github.com/react-community/create-react-native-app#quick-overview).

<br />

## Expo

- Most **feature rich** of all the options - gives you access to Expo tooling & SDK with some really useful feature that work with minimal config
- **Doesn't need XCode & Android Studio** - can scan the QR code on your expo app and run your RN app
- **Easiest & most useful** way to get started with RN

### Setup & Run

```
open up Expo XDE & open your project folder
  or
npm install -g exp
exp start

click share on XDE (top right) & scan QR code on your phone
  or
exp ios (needs Xcode)
  or
exp android (needs Android Studio)
```

For more details or if you run into trouble, follow [this guide](https://docs.expo.io/versions/latest/introduction/installation.html).

<br />

