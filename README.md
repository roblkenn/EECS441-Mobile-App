# EECS441-Mobile-App

## Getting Started

### Frontend

#### Prerequisites

1. macOS >= 10.14
2. Xcode >= 10.1
3. Node JS >= 9.10.0

Search App Store to get these softwares.

#### Download project

Clone the project first:

```
git clone https://github.com/roblkenn/EECS441-Mobile-App.git
```

Go to the directory EECS-441-Mobile-App/FrontEnd
```
cd EECS441-Mobile-App/FrontEnd
```

#### Setup Virtual Environment

1. Download Node.js(version 10 or newer)
   https://nodejs.org/en/
2. Install Git
   https://git-scm.com/
3. Install npm by running:
```
npm install
```
4. Install Homebrew
   https://brew.sh/
5. Install Watchman
```
brew install watchman
```
6. Install Redux
```
npm install --save redux
```
7. Install Stripe
```
npm install --save tipsi-stripe
```
8. Install Axios
```
yarn add axios
```
or
```
npm install axios
```
9. Install Cocoapods
```
sudo gem install cocoapods --source http://rubygems.org
```
10. Navigate to Frontend/ios and run 
```
pod install
```
#### Run project

Double check your current directory:
```
$ pwd
/.../EECS441-Mobile-App/FrontEnd
```

Run npm on the terminal window:
```
npm start
```

Open a second terminal and navigate to the same directory:
```
$ cd /.../EECS441-Mobile-App/FrontEnd
```
Run react-native and start the application:
```
react-native run-ios
```


### The Directory Layout  
<pre>
FrontEnd
├── 0-base
│   └── colors.js
├── 2-modules
│   ├── Header.js
│   ├── Help.js
│   ├── Main.js
│   ├── Router.js
│   ├── editor
│   │   ├── AutoEdit.js
│   │   ├── CurrentImage.js
│   │   ├── EditSlider.js
│   │   ├── Editor.js
│   │   ├── SaveableImage.js
│   │   ├── UndoButton.js
│   │   ├── UndoRedoButtons.js
│   │   ├── controls
│   │   │   ├── MainMenu.js
│   │   │   ├── SaveCancelMenu.js
│   │   │   └── index.js
│   │   ├── ducks
│   │   │   ├── actions.js
│   │   │   ├── index.js
│   │   │   ├── reducers.js
│   │   │   └── types.js
│   │   └── index.js
│   ├── market
│   │   ├── Market.js
│   │   ├── ducks
│   │   │   ├── actions.js
│   │   │   ├── index.js
│   │   │   ├── reducers.js
│   │   │   └── types.js
│   │   └── index.js
│   ├── moreImages
│   │   ├── Header.js
│   │   ├── ImagePreview.js
│   │   ├── MoreImages.js
│   │   ├── SlidingPanel.js
│   │   ├── ducks
│   │   │   ├── actions.js
│   │   │   ├── index.js
│   │   │   ├── reducers.js
│   │   │   └── types.js
│   │   └── index.js
│   └── settings
│       └── Settings.js
├── 3-utils
│   ├── Buttons.js
│   ├── Icons.js
│   ├── Text.js
│   └── react-native-swiper
│       ├── CHANGELOG.md
│       ├── LICENSE
│       ├── README.md
│       ├── ROADMAP.md
│       ├── index.d.ts
│       ├── index.js
│       ├── index.js.flow
│       ├── package.json
│       ├── src
│       │   └── index.js
│       └── yarn.lock
├── App.js
├── __tests__
│   └── App-test.js
├── android
│   ├── app
│   │   ├── BUCK
│   │   ├── build.gradle
│   │   ├── build_defs.bzl
│   │   ├── proguard-rules.pro
│   │   └── src
│   │       ├── debug
│   │       │   ├── AndroidManifest.xml
│   │       │   └── res
│   │       │       └── xml
│   │       │           └── react_native_config.xml
│   │       └── main
│   │           ├── AndroidManifest.xml
│   │           ├── assets
│   │           │   └── fonts
│   │           │       ├── AntDesign.ttf
│   │           │       ├── Entypo.ttf
│   │           │       ├── EvilIcons.ttf
│   │           │       ├── Feather.ttf
│   │           │       ├── FontAwesome.ttf
│   │           │       ├── FontAwesome5_Brands.ttf
│   │           │       ├── FontAwesome5_Regular.ttf
│   │           │       ├── FontAwesome5_Solid.ttf
│   │           │       ├── Foundation.ttf
│   │           │       ├── Ionicons.ttf
│   │           │       ├── MaterialCommunityIcons.ttf
│   │           │       ├── MaterialIcons.ttf
│   │           │       ├── Octicons.ttf
│   │           │       ├── SimpleLineIcons.ttf
│   │           │       └── Zocial.ttf
│   │           ├── java
│   │           │   └── com
│   │           │       └── four
│   │           │           ├── MainActivity.java
│   │           │           └── MainApplication.java
│   │           └── res
│   │               ├── mipmap-hdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-mdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-xhdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-xxhdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               ├── mipmap-xxxhdpi
│   │               │   ├── ic_launcher.png
│   │               │   └── ic_launcher_round.png
│   │               └── values
│   │                   ├── strings.xml
│   │                   └── styles.xml
│   ├── build.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   │   ├── BUCK
│   │   └── debug.keystore.properties
│   └── settings.gradle
├── app.json
├── assets
│   ├── icon.png
│   ├── photos
│   │   └── camel.jpg
│   └── splash.png
├── babel.config.js
├── index.js
├── metro.config.js
├── package-lock.json
├── package.json
└── reducers.js
</pre>
