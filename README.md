# EECS441-Mobile-App

## Getting Started

### Frontend

#### Prerequisites

1. macOS >= 10.14
2. Xcode >= 10.1

Search App Store to get these softwares.

#### Download project

Clone the project first:

```
git clone https://github.com/roblkenn/EECS441-Mobile-App.git
```

Go to the directory EECS-441-Mobile-App/441 App
```
cd EECS-441-Mobile-App
cd "441 App"
```

#### Setup Virtual Environment

1. Download Node.js(version 10 or newer)
   https://nodejs.org/en/
2. Install Git
   https://git-scm.com/
3. Install Expo CLI by running:
```
npm install -g expo-cli
```
4. Download Expo Client for IOS or Android on your moblie device
5. Install Homebrew
   https://brew.sh/
6. Install Watchman
```
brew install watchman
```

#### Run project

Double check your current directory:
```
$ pwd
/.../EECS441-Mobile-App/441 App
```

Start app:
```
expo start
```

### The Directory Layout  
<pre>
Mobile App  
.
├── 441\ App
│   ├── 0-base
│   │   └── colors.js
│   ├── 2-modules
│   │   ├── Header.js
│   │   ├── editor
│   │   │   ├── AutoEdit.js
│   │   │   ├── Controls.js
│   │   │   ├── CurrentImage.js
│   │   │   ├── EditSlider.js
│   │   │   ├── Editor.js
│   │   │   └── UndoButton.js
│   │   └── moreImages
│   │       ├── Body.js
│   │       ├── Header.js
│   │       ├── ImagePreview.js
│   │       ├── MoreImages.js
│   │       └── SlidingPanel.js
│   ├── 3-utils
│   │   ├── Buttons.js
│   │   ├── Haptic.js
│   │   ├── Icons.js
│   │   └── Text.js
│   ├── App.js
│   ├── app.json
│   ├── assets
│   │   ├── icon.png
│   │   ├── photos
│   │   │   └── camel.jpg
│   │   └── splash.png
│   ├── babel.config.js
│   ├── env
│   │   ├── bin
│   │   │   ├── activate
│   │   │   ├── activate.csh
│   │   │   ├── activate.fish
│   │   │   ├── easy_install
│   │   │   ├── easy_install-3.7
│   │   │   ├── pip
│   │   │   ├── pip3
│   │   │   ├── pip3.7
│   │   │   ├── python -> python3
│   │   │   └── python3 -> /usr/local/bin/python3
│   │   ├── include
│   │   ├── lib
│   │   │   └── python3.7
│   │   │       └── site-packages
│   │   │           ├── __pycache__
│   │   │           │   └── easy_install.cpython-37.pyc
│   │   │           ├── easy_install.py
│   │   │           ├── pip
│   │   │           │   ├── __init__.py
│   │   │           │   ├── __main__.py
│   │   │           │   ├── __pycache__
│   │   │           │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   └── __main__.cpython-37.pyc
│   │   │           │   ├── _internal
│   │   │           │   │   ├── __init__.py
│   │   │           │   │   ├── __pycache__
│   │   │           │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   ├── build_env.cpython-37.pyc
│   │   │           │   │   │   ├── cache.cpython-37.pyc
│   │   │           │   │   │   ├── configuration.cpython-37.pyc
│   │   │           │   │   │   ├── download.cpython-37.pyc
│   │   │           │   │   │   ├── exceptions.cpython-37.pyc
│   │   │           │   │   │   ├── index.cpython-37.pyc
│   │   │           │   │   │   ├── locations.cpython-37.pyc
│   │   │           │   │   │   ├── pep425tags.cpython-37.pyc
│   │   │           │   │   │   ├── pyproject.cpython-37.pyc
│   │   │           │   │   │   ├── resolve.cpython-37.pyc
│   │   │           │   │   │   └── wheel.cpython-37.pyc
│   │   │           │   │   ├── build_env.py
│   │   │           │   │   ├── cache.py
│   │   │           │   │   ├── cli
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── autocompletion.cpython-37.pyc
│   │   │           │   │   │   │   ├── base_command.cpython-37.pyc
│   │   │           │   │   │   │   ├── cmdoptions.cpython-37.pyc
│   │   │           │   │   │   │   ├── main_parser.cpython-37.pyc
│   │   │           │   │   │   │   ├── parser.cpython-37.pyc
│   │   │           │   │   │   │   └── status_codes.cpython-37.pyc
│   │   │           │   │   │   ├── autocompletion.py
│   │   │           │   │   │   ├── base_command.py
│   │   │           │   │   │   ├── cmdoptions.py
│   │   │           │   │   │   ├── main_parser.py
│   │   │           │   │   │   ├── parser.py
│   │   │           │   │   │   └── status_codes.py
│   │   │           │   │   ├── commands
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── check.cpython-37.pyc
│   │   │           │   │   │   │   ├── completion.cpython-37.pyc
│   │   │           │   │   │   │   ├── configuration.cpython-37.pyc
│   │   │           │   │   │   │   ├── download.cpython-37.pyc
│   │   │           │   │   │   │   ├── freeze.cpython-37.pyc
│   │   │           │   │   │   │   ├── hash.cpython-37.pyc
│   │   │           │   │   │   │   ├── help.cpython-37.pyc
│   │   │           │   │   │   │   ├── install.cpython-37.pyc
│   │   │           │   │   │   │   ├── list.cpython-37.pyc
│   │   │           │   │   │   │   ├── search.cpython-37.pyc
│   │   │           │   │   │   │   ├── show.cpython-37.pyc
│   │   │           │   │   │   │   ├── uninstall.cpython-37.pyc
│   │   │           │   │   │   │   └── wheel.cpython-37.pyc
│   │   │           │   │   │   ├── check.py
│   │   │           │   │   │   ├── completion.py
│   │   │           │   │   │   ├── configuration.py
│   │   │           │   │   │   ├── download.py
│   │   │           │   │   │   ├── freeze.py
│   │   │           │   │   │   ├── hash.py
│   │   │           │   │   │   ├── help.py
│   │   │           │   │   │   ├── install.py
│   │   │           │   │   │   ├── list.py
│   │   │           │   │   │   ├── search.py
│   │   │           │   │   │   ├── show.py
│   │   │           │   │   │   ├── uninstall.py
│   │   │           │   │   │   └── wheel.py
│   │   │           │   │   ├── configuration.py
│   │   │           │   │   ├── download.py
│   │   │           │   │   ├── exceptions.py
│   │   │           │   │   ├── index.py
│   │   │           │   │   ├── locations.py
│   │   │           │   │   ├── models
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── candidate.cpython-37.pyc
│   │   │           │   │   │   │   ├── format_control.cpython-37.pyc
│   │   │           │   │   │   │   ├── index.cpython-37.pyc
│   │   │           │   │   │   │   └── link.cpython-37.pyc
│   │   │           │   │   │   ├── candidate.py
│   │   │           │   │   │   ├── format_control.py
│   │   │           │   │   │   ├── index.py
│   │   │           │   │   │   └── link.py
│   │   │           │   │   ├── operations
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── check.cpython-37.pyc
│   │   │           │   │   │   │   ├── freeze.cpython-37.pyc
│   │   │           │   │   │   │   └── prepare.cpython-37.pyc
│   │   │           │   │   │   ├── check.py
│   │   │           │   │   │   ├── freeze.py
│   │   │           │   │   │   └── prepare.py
│   │   │           │   │   ├── pep425tags.py
│   │   │           │   │   ├── pyproject.py
│   │   │           │   │   ├── req
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── constructors.cpython-37.pyc
│   │   │           │   │   │   │   ├── req_file.cpython-37.pyc
│   │   │           │   │   │   │   ├── req_install.cpython-37.pyc
│   │   │           │   │   │   │   ├── req_set.cpython-37.pyc
│   │   │           │   │   │   │   ├── req_tracker.cpython-37.pyc
│   │   │           │   │   │   │   └── req_uninstall.cpython-37.pyc
│   │   │           │   │   │   ├── constructors.py
│   │   │           │   │   │   ├── req_file.py
│   │   │           │   │   │   ├── req_install.py
│   │   │           │   │   │   ├── req_set.py
│   │   │           │   │   │   ├── req_tracker.py
│   │   │           │   │   │   └── req_uninstall.py
│   │   │           │   │   ├── resolve.py
│   │   │           │   │   ├── utils
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── appdirs.cpython-37.pyc
│   │   │           │   │   │   │   ├── compat.cpython-37.pyc
│   │   │           │   │   │   │   ├── deprecation.cpython-37.pyc
│   │   │           │   │   │   │   ├── encoding.cpython-37.pyc
│   │   │           │   │   │   │   ├── filesystem.cpython-37.pyc
│   │   │           │   │   │   │   ├── glibc.cpython-37.pyc
│   │   │           │   │   │   │   ├── hashes.cpython-37.pyc
│   │   │           │   │   │   │   ├── logging.cpython-37.pyc
│   │   │           │   │   │   │   ├── misc.cpython-37.pyc
│   │   │           │   │   │   │   ├── models.cpython-37.pyc
│   │   │           │   │   │   │   ├── outdated.cpython-37.pyc
│   │   │           │   │   │   │   ├── packaging.cpython-37.pyc
│   │   │           │   │   │   │   ├── setuptools_build.cpython-37.pyc
│   │   │           │   │   │   │   ├── temp_dir.cpython-37.pyc
│   │   │           │   │   │   │   ├── typing.cpython-37.pyc
│   │   │           │   │   │   │   └── ui.cpython-37.pyc
│   │   │           │   │   │   ├── appdirs.py
│   │   │           │   │   │   ├── compat.py
│   │   │           │   │   │   ├── deprecation.py
│   │   │           │   │   │   ├── encoding.py
│   │   │           │   │   │   ├── filesystem.py
│   │   │           │   │   │   ├── glibc.py
│   │   │           │   │   │   ├── hashes.py
│   │   │           │   │   │   ├── logging.py
│   │   │           │   │   │   ├── misc.py
│   │   │           │   │   │   ├── models.py
│   │   │           │   │   │   ├── outdated.py
│   │   │           │   │   │   ├── packaging.py
│   │   │           │   │   │   ├── setuptools_build.py
│   │   │           │   │   │   ├── temp_dir.py
│   │   │           │   │   │   ├── typing.py
│   │   │           │   │   │   └── ui.py
│   │   │           │   │   ├── vcs
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── bazaar.cpython-37.pyc
│   │   │           │   │   │   │   ├── git.cpython-37.pyc
│   │   │           │   │   │   │   ├── mercurial.cpython-37.pyc
│   │   │           │   │   │   │   └── subversion.cpython-37.pyc
│   │   │           │   │   │   ├── bazaar.py
│   │   │           │   │   │   ├── git.py
│   │   │           │   │   │   ├── mercurial.py
│   │   │           │   │   │   └── subversion.py
│   │   │           │   │   └── wheel.py
│   │   │           │   └── _vendor
│   │   │           │       ├── __init__.py
│   │   │           │       ├── __pycache__
│   │   │           │       │   ├── __init__.cpython-37.pyc
│   │   │           │       │   ├── appdirs.cpython-37.pyc
│   │   │           │       │   ├── distro.cpython-37.pyc
│   │   │           │       │   ├── ipaddress.cpython-37.pyc
│   │   │           │       │   ├── pyparsing.cpython-37.pyc
│   │   │           │       │   ├── retrying.cpython-37.pyc
│   │   │           │       │   └── six.cpython-37.pyc
│   │   │           │       ├── appdirs.py
│   │   │           │       ├── cachecontrol
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── _cmd.cpython-37.pyc
│   │   │           │       │   │   ├── adapter.cpython-37.pyc
│   │   │           │       │   │   ├── cache.cpython-37.pyc
│   │   │           │       │   │   ├── compat.cpython-37.pyc
│   │   │           │       │   │   ├── controller.cpython-37.pyc
│   │   │           │       │   │   ├── filewrapper.cpython-37.pyc
│   │   │           │       │   │   ├── heuristics.cpython-37.pyc
│   │   │           │       │   │   ├── serialize.cpython-37.pyc
│   │   │           │       │   │   └── wrapper.cpython-37.pyc
│   │   │           │       │   ├── _cmd.py
│   │   │           │       │   ├── adapter.py
│   │   │           │       │   ├── cache.py
│   │   │           │       │   ├── caches
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── file_cache.cpython-37.pyc
│   │   │           │       │   │   │   └── redis_cache.cpython-37.pyc
│   │   │           │       │   │   ├── file_cache.py
│   │   │           │       │   │   └── redis_cache.py
│   │   │           │       │   ├── compat.py
│   │   │           │       │   ├── controller.py
│   │   │           │       │   ├── filewrapper.py
│   │   │           │       │   ├── heuristics.py
│   │   │           │       │   ├── serialize.py
│   │   │           │       │   └── wrapper.py
│   │   │           │       ├── certifi
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __main__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── __main__.cpython-37.pyc
│   │   │           │       │   │   └── core.cpython-37.pyc
│   │   │           │       │   ├── cacert.pem
│   │   │           │       │   └── core.py
│   │   │           │       ├── chardet
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── big5freq.cpython-37.pyc
│   │   │           │       │   │   ├── big5prober.cpython-37.pyc
│   │   │           │       │   │   ├── chardistribution.cpython-37.pyc
│   │   │           │       │   │   ├── charsetgroupprober.cpython-37.pyc
│   │   │           │       │   │   ├── charsetprober.cpython-37.pyc
│   │   │           │       │   │   ├── codingstatemachine.cpython-37.pyc
│   │   │           │       │   │   ├── compat.cpython-37.pyc
│   │   │           │       │   │   ├── cp949prober.cpython-37.pyc
│   │   │           │       │   │   ├── enums.cpython-37.pyc
│   │   │           │       │   │   ├── escprober.cpython-37.pyc
│   │   │           │       │   │   ├── escsm.cpython-37.pyc
│   │   │           │       │   │   ├── eucjpprober.cpython-37.pyc
│   │   │           │       │   │   ├── euckrfreq.cpython-37.pyc
│   │   │           │       │   │   ├── euckrprober.cpython-37.pyc
│   │   │           │       │   │   ├── euctwfreq.cpython-37.pyc
│   │   │           │       │   │   ├── euctwprober.cpython-37.pyc
│   │   │           │       │   │   ├── gb2312freq.cpython-37.pyc
│   │   │           │       │   │   ├── gb2312prober.cpython-37.pyc
│   │   │           │       │   │   ├── hebrewprober.cpython-37.pyc
│   │   │           │       │   │   ├── jisfreq.cpython-37.pyc
│   │   │           │       │   │   ├── jpcntx.cpython-37.pyc
│   │   │           │       │   │   ├── langbulgarianmodel.cpython-37.pyc
│   │   │           │       │   │   ├── langcyrillicmodel.cpython-37.pyc
│   │   │           │       │   │   ├── langgreekmodel.cpython-37.pyc
│   │   │           │       │   │   ├── langhebrewmodel.cpython-37.pyc
│   │   │           │       │   │   ├── langhungarianmodel.cpython-37.pyc
│   │   │           │       │   │   ├── langthaimodel.cpython-37.pyc
│   │   │           │       │   │   ├── langturkishmodel.cpython-37.pyc
│   │   │           │       │   │   ├── latin1prober.cpython-37.pyc
│   │   │           │       │   │   ├── mbcharsetprober.cpython-37.pyc
│   │   │           │       │   │   ├── mbcsgroupprober.cpython-37.pyc
│   │   │           │       │   │   ├── mbcssm.cpython-37.pyc
│   │   │           │       │   │   ├── sbcharsetprober.cpython-37.pyc
│   │   │           │       │   │   ├── sbcsgroupprober.cpython-37.pyc
│   │   │           │       │   │   ├── sjisprober.cpython-37.pyc
│   │   │           │       │   │   ├── universaldetector.cpython-37.pyc
│   │   │           │       │   │   ├── utf8prober.cpython-37.pyc
│   │   │           │       │   │   └── version.cpython-37.pyc
│   │   │           │       │   ├── big5freq.py
│   │   │           │       │   ├── big5prober.py
│   │   │           │       │   ├── chardistribution.py
│   │   │           │       │   ├── charsetgroupprober.py
│   │   │           │       │   ├── charsetprober.py
│   │   │           │       │   ├── cli
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   └── chardetect.cpython-37.pyc
│   │   │           │       │   │   └── chardetect.py
│   │   │           │       │   ├── codingstatemachine.py
│   │   │           │       │   ├── compat.py
│   │   │           │       │   ├── cp949prober.py
│   │   │           │       │   ├── enums.py
│   │   │           │       │   ├── escprober.py
│   │   │           │       │   ├── escsm.py
│   │   │           │       │   ├── eucjpprober.py
│   │   │           │       │   ├── euckrfreq.py
│   │   │           │       │   ├── euckrprober.py
│   │   │           │       │   ├── euctwfreq.py
│   │   │           │       │   ├── euctwprober.py
│   │   │           │       │   ├── gb2312freq.py
│   │   │           │       │   ├── gb2312prober.py
│   │   │           │       │   ├── hebrewprober.py
│   │   │           │       │   ├── jisfreq.py
│   │   │           │       │   ├── jpcntx.py
│   │   │           │       │   ├── langbulgarianmodel.py
│   │   │           │       │   ├── langcyrillicmodel.py
│   │   │           │       │   ├── langgreekmodel.py
│   │   │           │       │   ├── langhebrewmodel.py
│   │   │           │       │   ├── langhungarianmodel.py
│   │   │           │       │   ├── langthaimodel.py
│   │   │           │       │   ├── langturkishmodel.py
│   │   │           │       │   ├── latin1prober.py
│   │   │           │       │   ├── mbcharsetprober.py
│   │   │           │       │   ├── mbcsgroupprober.py
│   │   │           │       │   ├── mbcssm.py
│   │   │           │       │   ├── sbcharsetprober.py
│   │   │           │       │   ├── sbcsgroupprober.py
│   │   │           │       │   ├── sjisprober.py
│   │   │           │       │   ├── universaldetector.py
│   │   │           │       │   ├── utf8prober.py
│   │   │           │       │   └── version.py
│   │   │           │       ├── colorama
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── ansi.cpython-37.pyc
│   │   │           │       │   │   ├── ansitowin32.cpython-37.pyc
│   │   │           │       │   │   ├── initialise.cpython-37.pyc
│   │   │           │       │   │   ├── win32.cpython-37.pyc
│   │   │           │       │   │   └── winterm.cpython-37.pyc
│   │   │           │       │   ├── ansi.py
│   │   │           │       │   ├── ansitowin32.py
│   │   │           │       │   ├── initialise.py
│   │   │           │       │   ├── win32.py
│   │   │           │       │   └── winterm.py
│   │   │           │       ├── distlib
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── compat.cpython-37.pyc
│   │   │           │       │   │   ├── database.cpython-37.pyc
│   │   │           │       │   │   ├── index.cpython-37.pyc
│   │   │           │       │   │   ├── locators.cpython-37.pyc
│   │   │           │       │   │   ├── manifest.cpython-37.pyc
│   │   │           │       │   │   ├── markers.cpython-37.pyc
│   │   │           │       │   │   ├── metadata.cpython-37.pyc
│   │   │           │       │   │   ├── resources.cpython-37.pyc
│   │   │           │       │   │   ├── scripts.cpython-37.pyc
│   │   │           │       │   │   ├── util.cpython-37.pyc
│   │   │           │       │   │   ├── version.cpython-37.pyc
│   │   │           │       │   │   └── wheel.cpython-37.pyc
│   │   │           │       │   ├── _backport
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── misc.cpython-37.pyc
│   │   │           │       │   │   │   ├── shutil.cpython-37.pyc
│   │   │           │       │   │   │   ├── sysconfig.cpython-37.pyc
│   │   │           │       │   │   │   └── tarfile.cpython-37.pyc
│   │   │           │       │   │   ├── misc.py
│   │   │           │       │   │   ├── shutil.py
│   │   │           │       │   │   ├── sysconfig.cfg
│   │   │           │       │   │   ├── sysconfig.py
│   │   │           │       │   │   └── tarfile.py
│   │   │           │       │   ├── compat.py
│   │   │           │       │   ├── database.py
│   │   │           │       │   ├── index.py
│   │   │           │       │   ├── locators.py
│   │   │           │       │   ├── manifest.py
│   │   │           │       │   ├── markers.py
│   │   │           │       │   ├── metadata.py
│   │   │           │       │   ├── resources.py
│   │   │           │       │   ├── scripts.py
│   │   │           │       │   ├── t32.exe
│   │   │           │       │   ├── t64.exe
│   │   │           │       │   ├── util.py
│   │   │           │       │   ├── version.py
│   │   │           │       │   ├── w32.exe
│   │   │           │       │   ├── w64.exe
│   │   │           │       │   └── wheel.py
│   │   │           │       ├── distro.py
│   │   │           │       ├── html5lib
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── _ihatexml.cpython-37.pyc
│   │   │           │       │   │   ├── _inputstream.cpython-37.pyc
│   │   │           │       │   │   ├── _tokenizer.cpython-37.pyc
│   │   │           │       │   │   ├── _utils.cpython-37.pyc
│   │   │           │       │   │   ├── constants.cpython-37.pyc
│   │   │           │       │   │   ├── html5parser.cpython-37.pyc
│   │   │           │       │   │   └── serializer.cpython-37.pyc
│   │   │           │       │   ├── _ihatexml.py
│   │   │           │       │   ├── _inputstream.py
│   │   │           │       │   ├── _tokenizer.py
│   │   │           │       │   ├── _trie
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── _base.cpython-37.pyc
│   │   │           │       │   │   │   ├── datrie.cpython-37.pyc
│   │   │           │       │   │   │   └── py.cpython-37.pyc
│   │   │           │       │   │   ├── _base.py
│   │   │           │       │   │   ├── datrie.py
│   │   │           │       │   │   └── py.py
│   │   │           │       │   ├── _utils.py
│   │   │           │       │   ├── constants.py
│   │   │           │       │   ├── filters
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── alphabeticalattributes.cpython-37.pyc
│   │   │           │       │   │   │   ├── base.cpython-37.pyc
│   │   │           │       │   │   │   ├── inject_meta_charset.cpython-37.pyc
│   │   │           │       │   │   │   ├── lint.cpython-37.pyc
│   │   │           │       │   │   │   ├── optionaltags.cpython-37.pyc
│   │   │           │       │   │   │   ├── sanitizer.cpython-37.pyc
│   │   │           │       │   │   │   └── whitespace.cpython-37.pyc
│   │   │           │       │   │   ├── alphabeticalattributes.py
│   │   │           │       │   │   ├── base.py
│   │   │           │       │   │   ├── inject_meta_charset.py
│   │   │           │       │   │   ├── lint.py
│   │   │           │       │   │   ├── optionaltags.py
│   │   │           │       │   │   ├── sanitizer.py
│   │   │           │       │   │   └── whitespace.py
│   │   │           │       │   ├── html5parser.py
│   │   │           │       │   ├── serializer.py
│   │   │           │       │   ├── treeadapters
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── genshi.cpython-37.pyc
│   │   │           │       │   │   │   └── sax.cpython-37.pyc
│   │   │           │       │   │   ├── genshi.py
│   │   │           │       │   │   └── sax.py
│   │   │           │       │   ├── treebuilders
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── base.cpython-37.pyc
│   │   │           │       │   │   │   ├── dom.cpython-37.pyc
│   │   │           │       │   │   │   ├── etree.cpython-37.pyc
│   │   │           │       │   │   │   └── etree_lxml.cpython-37.pyc
│   │   │           │       │   │   ├── base.py
│   │   │           │       │   │   ├── dom.py
│   │   │           │       │   │   ├── etree.py
│   │   │           │       │   │   └── etree_lxml.py
│   │   │           │       │   └── treewalkers
│   │   │           │       │       ├── __init__.py
│   │   │           │       │       ├── __pycache__
│   │   │           │       │       │   ├── __init__.cpython-37.pyc
│   │   │           │       │       │   ├── base.cpython-37.pyc
│   │   │           │       │       │   ├── dom.cpython-37.pyc
│   │   │           │       │       │   ├── etree.cpython-37.pyc
│   │   │           │       │       │   ├── etree_lxml.cpython-37.pyc
│   │   │           │       │       │   └── genshi.cpython-37.pyc
│   │   │           │       │       ├── base.py
│   │   │           │       │       ├── dom.py
│   │   │           │       │       ├── etree.py
│   │   │           │       │       ├── etree_lxml.py
│   │   │           │       │       └── genshi.py
│   │   │           │       ├── idna
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── codec.cpython-37.pyc
│   │   │           │       │   │   ├── compat.cpython-37.pyc
│   │   │           │       │   │   ├── core.cpython-37.pyc
│   │   │           │       │   │   ├── idnadata.cpython-37.pyc
│   │   │           │       │   │   ├── intranges.cpython-37.pyc
│   │   │           │       │   │   ├── package_data.cpython-37.pyc
│   │   │           │       │   │   └── uts46data.cpython-37.pyc
│   │   │           │       │   ├── codec.py
│   │   │           │       │   ├── compat.py
│   │   │           │       │   ├── core.py
│   │   │           │       │   ├── idnadata.py
│   │   │           │       │   ├── intranges.py
│   │   │           │       │   ├── package_data.py
│   │   │           │       │   └── uts46data.py
│   │   │           │       ├── ipaddress.py
│   │   │           │       ├── lockfile
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── linklockfile.cpython-37.pyc
│   │   │           │       │   │   ├── mkdirlockfile.cpython-37.pyc
│   │   │           │       │   │   ├── pidlockfile.cpython-37.pyc
│   │   │           │       │   │   ├── sqlitelockfile.cpython-37.pyc
│   │   │           │       │   │   └── symlinklockfile.cpython-37.pyc
│   │   │           │       │   ├── linklockfile.py
│   │   │           │       │   ├── mkdirlockfile.py
│   │   │           │       │   ├── pidlockfile.py
│   │   │           │       │   ├── sqlitelockfile.py
│   │   │           │       │   └── symlinklockfile.py
│   │   │           │       ├── msgpack
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── _version.cpython-37.pyc
│   │   │           │       │   │   ├── exceptions.cpython-37.pyc
│   │   │           │       │   │   └── fallback.cpython-37.pyc
│   │   │           │       │   ├── _version.py
│   │   │           │       │   ├── exceptions.py
│   │   │           │       │   └── fallback.py
│   │   │           │       ├── packaging
│   │   │           │       │   ├── __about__.py
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __about__.cpython-37.pyc
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── _compat.cpython-37.pyc
│   │   │           │       │   │   ├── _structures.cpython-37.pyc
│   │   │           │       │   │   ├── markers.cpython-37.pyc
│   │   │           │       │   │   ├── requirements.cpython-37.pyc
│   │   │           │       │   │   ├── specifiers.cpython-37.pyc
│   │   │           │       │   │   ├── utils.cpython-37.pyc
│   │   │           │       │   │   └── version.cpython-37.pyc
│   │   │           │       │   ├── _compat.py
│   │   │           │       │   ├── _structures.py
│   │   │           │       │   ├── markers.py
│   │   │           │       │   ├── requirements.py
│   │   │           │       │   ├── specifiers.py
│   │   │           │       │   ├── utils.py
│   │   │           │       │   └── version.py
│   │   │           │       ├── pep517
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── _in_process.cpython-37.pyc
│   │   │           │       │   │   ├── check.cpython-37.pyc
│   │   │           │       │   │   ├── colorlog.cpython-37.pyc
│   │   │           │       │   │   ├── compat.cpython-37.pyc
│   │   │           │       │   │   ├── envbuild.cpython-37.pyc
│   │   │           │       │   │   └── wrappers.cpython-37.pyc
│   │   │           │       │   ├── _in_process.py
│   │   │           │       │   ├── check.py
│   │   │           │       │   ├── colorlog.py
│   │   │           │       │   ├── compat.py
│   │   │           │       │   ├── envbuild.py
│   │   │           │       │   └── wrappers.py
│   │   │           │       ├── pkg_resources
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   └── py31compat.cpython-37.pyc
│   │   │           │       │   └── py31compat.py
│   │   │           │       ├── progress
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── bar.cpython-37.pyc
│   │   │           │       │   │   ├── counter.cpython-37.pyc
│   │   │           │       │   │   ├── helpers.cpython-37.pyc
│   │   │           │       │   │   └── spinner.cpython-37.pyc
│   │   │           │       │   ├── bar.py
│   │   │           │       │   ├── counter.py
│   │   │           │       │   ├── helpers.py
│   │   │           │       │   └── spinner.py
│   │   │           │       ├── pyparsing.py
│   │   │           │       ├── pytoml
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── core.cpython-37.pyc
│   │   │           │       │   │   ├── parser.cpython-37.pyc
│   │   │           │       │   │   └── writer.cpython-37.pyc
│   │   │           │       │   ├── core.py
│   │   │           │       │   ├── parser.py
│   │   │           │       │   └── writer.py
│   │   │           │       ├── requests
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── __version__.cpython-37.pyc
│   │   │           │       │   │   ├── _internal_utils.cpython-37.pyc
│   │   │           │       │   │   ├── adapters.cpython-37.pyc
│   │   │           │       │   │   ├── api.cpython-37.pyc
│   │   │           │       │   │   ├── auth.cpython-37.pyc
│   │   │           │       │   │   ├── certs.cpython-37.pyc
│   │   │           │       │   │   ├── compat.cpython-37.pyc
│   │   │           │       │   │   ├── cookies.cpython-37.pyc
│   │   │           │       │   │   ├── exceptions.cpython-37.pyc
│   │   │           │       │   │   ├── help.cpython-37.pyc
│   │   │           │       │   │   ├── hooks.cpython-37.pyc
│   │   │           │       │   │   ├── models.cpython-37.pyc
│   │   │           │       │   │   ├── packages.cpython-37.pyc
│   │   │           │       │   │   ├── sessions.cpython-37.pyc
│   │   │           │       │   │   ├── status_codes.cpython-37.pyc
│   │   │           │       │   │   ├── structures.cpython-37.pyc
│   │   │           │       │   │   └── utils.cpython-37.pyc
│   │   │           │       │   ├── __version__.py
│   │   │           │       │   ├── _internal_utils.py
│   │   │           │       │   ├── adapters.py
│   │   │           │       │   ├── api.py
│   │   │           │       │   ├── auth.py
│   │   │           │       │   ├── certs.py
│   │   │           │       │   ├── compat.py
│   │   │           │       │   ├── cookies.py
│   │   │           │       │   ├── exceptions.py
│   │   │           │       │   ├── help.py
│   │   │           │       │   ├── hooks.py
│   │   │           │       │   ├── models.py
│   │   │           │       │   ├── packages.py
│   │   │           │       │   ├── sessions.py
│   │   │           │       │   ├── status_codes.py
│   │   │           │       │   ├── structures.py
│   │   │           │       │   └── utils.py
│   │   │           │       ├── retrying.py
│   │   │           │       ├── six.py
│   │   │           │       ├── urllib3
│   │   │           │       │   ├── __init__.py
│   │   │           │       │   ├── __pycache__
│   │   │           │       │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   ├── _collections.cpython-37.pyc
│   │   │           │       │   │   ├── connection.cpython-37.pyc
│   │   │           │       │   │   ├── connectionpool.cpython-37.pyc
│   │   │           │       │   │   ├── exceptions.cpython-37.pyc
│   │   │           │       │   │   ├── fields.cpython-37.pyc
│   │   │           │       │   │   ├── filepost.cpython-37.pyc
│   │   │           │       │   │   ├── poolmanager.cpython-37.pyc
│   │   │           │       │   │   ├── request.cpython-37.pyc
│   │   │           │       │   │   └── response.cpython-37.pyc
│   │   │           │       │   ├── _collections.py
│   │   │           │       │   ├── connection.py
│   │   │           │       │   ├── connectionpool.py
│   │   │           │       │   ├── contrib
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── appengine.cpython-37.pyc
│   │   │           │       │   │   │   ├── ntlmpool.cpython-37.pyc
│   │   │           │       │   │   │   ├── pyopenssl.cpython-37.pyc
│   │   │           │       │   │   │   ├── securetransport.cpython-37.pyc
│   │   │           │       │   │   │   └── socks.cpython-37.pyc
│   │   │           │       │   │   ├── _securetransport
│   │   │           │       │   │   │   ├── __init__.py
│   │   │           │       │   │   │   ├── __pycache__
│   │   │           │       │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   │   ├── bindings.cpython-37.pyc
│   │   │           │       │   │   │   │   └── low_level.cpython-37.pyc
│   │   │           │       │   │   │   ├── bindings.py
│   │   │           │       │   │   │   └── low_level.py
│   │   │           │       │   │   ├── appengine.py
│   │   │           │       │   │   ├── ntlmpool.py
│   │   │           │       │   │   ├── pyopenssl.py
│   │   │           │       │   │   ├── securetransport.py
│   │   │           │       │   │   └── socks.py
│   │   │           │       │   ├── exceptions.py
│   │   │           │       │   ├── fields.py
│   │   │           │       │   ├── filepost.py
│   │   │           │       │   ├── packages
│   │   │           │       │   │   ├── __init__.py
│   │   │           │       │   │   ├── __pycache__
│   │   │           │       │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   ├── ordered_dict.cpython-37.pyc
│   │   │           │       │   │   │   └── six.cpython-37.pyc
│   │   │           │       │   │   ├── backports
│   │   │           │       │   │   │   ├── __init__.py
│   │   │           │       │   │   │   ├── __pycache__
│   │   │           │       │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │   │   │   └── makefile.cpython-37.pyc
│   │   │           │       │   │   │   └── makefile.py
│   │   │           │       │   │   ├── ordered_dict.py
│   │   │           │       │   │   ├── six.py
│   │   │           │       │   │   └── ssl_match_hostname
│   │   │           │       │   │       ├── __init__.py
│   │   │           │       │   │       ├── __pycache__
│   │   │           │       │   │       │   ├── __init__.cpython-37.pyc
│   │   │           │       │   │       │   └── _implementation.cpython-37.pyc
│   │   │           │       │   │       └── _implementation.py
│   │   │           │       │   ├── poolmanager.py
│   │   │           │       │   ├── request.py
│   │   │           │       │   ├── response.py
│   │   │           │       │   └── util
│   │   │           │       │       ├── __init__.py
│   │   │           │       │       ├── __pycache__
│   │   │           │       │       │   ├── __init__.cpython-37.pyc
│   │   │           │       │       │   ├── connection.cpython-37.pyc
│   │   │           │       │       │   ├── queue.cpython-37.pyc
│   │   │           │       │       │   ├── request.cpython-37.pyc
│   │   │           │       │       │   ├── response.cpython-37.pyc
│   │   │           │       │       │   ├── retry.cpython-37.pyc
│   │   │           │       │       │   ├── ssl_.cpython-37.pyc
│   │   │           │       │       │   ├── timeout.cpython-37.pyc
│   │   │           │       │       │   ├── url.cpython-37.pyc
│   │   │           │       │       │   └── wait.cpython-37.pyc
│   │   │           │       │       ├── connection.py
│   │   │           │       │       ├── queue.py
│   │   │           │       │       ├── request.py
│   │   │           │       │       ├── response.py
│   │   │           │       │       ├── retry.py
│   │   │           │       │       ├── ssl_.py
│   │   │           │       │       ├── timeout.py
│   │   │           │       │       ├── url.py
│   │   │           │       │       └── wait.py
│   │   │           │       └── webencodings
│   │   │           │           ├── __init__.py
│   │   │           │           ├── __pycache__
│   │   │           │           │   ├── __init__.cpython-37.pyc
│   │   │           │           │   ├── labels.cpython-37.pyc
│   │   │           │           │   ├── mklabels.cpython-37.pyc
│   │   │           │           │   ├── tests.cpython-37.pyc
│   │   │           │           │   └── x_user_defined.cpython-37.pyc
│   │   │           │           ├── labels.py
│   │   │           │           ├── mklabels.py
│   │   │           │           ├── tests.py
│   │   │           │           └── x_user_defined.py
│   │   │           ├── pip-18.1.dist-info
│   │   │           │   ├── INSTALLER
│   │   │           │   ├── LICENSE.txt
│   │   │           │   ├── METADATA
│   │   │           │   ├── RECORD
│   │   │           │   ├── WHEEL
│   │   │           │   ├── entry_points.txt
│   │   │           │   └── top_level.txt
│   │   │           ├── pkg_resources
│   │   │           │   ├── __init__.py
│   │   │           │   ├── __pycache__
│   │   │           │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   └── py31compat.cpython-37.pyc
│   │   │           │   ├── _vendor
│   │   │           │   │   ├── __init__.py
│   │   │           │   │   ├── __pycache__
│   │   │           │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   ├── appdirs.cpython-37.pyc
│   │   │           │   │   │   ├── pyparsing.cpython-37.pyc
│   │   │           │   │   │   └── six.cpython-37.pyc
│   │   │           │   │   ├── appdirs.py
│   │   │           │   │   ├── packaging
│   │   │           │   │   │   ├── __about__.py
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __about__.cpython-37.pyc
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── _compat.cpython-37.pyc
│   │   │           │   │   │   │   ├── _structures.cpython-37.pyc
│   │   │           │   │   │   │   ├── markers.cpython-37.pyc
│   │   │           │   │   │   │   ├── requirements.cpython-37.pyc
│   │   │           │   │   │   │   ├── specifiers.cpython-37.pyc
│   │   │           │   │   │   │   ├── utils.cpython-37.pyc
│   │   │           │   │   │   │   └── version.cpython-37.pyc
│   │   │           │   │   │   ├── _compat.py
│   │   │           │   │   │   ├── _structures.py
│   │   │           │   │   │   ├── markers.py
│   │   │           │   │   │   ├── requirements.py
│   │   │           │   │   │   ├── specifiers.py
│   │   │           │   │   │   ├── utils.py
│   │   │           │   │   │   └── version.py
│   │   │           │   │   ├── pyparsing.py
│   │   │           │   │   └── six.py
│   │   │           │   ├── extern
│   │   │           │   │   ├── __init__.py
│   │   │           │   │   └── __pycache__
│   │   │           │   │       └── __init__.cpython-37.pyc
│   │   │           │   └── py31compat.py
│   │   │           ├── setuptools
│   │   │           │   ├── __init__.py
│   │   │           │   ├── __pycache__
│   │   │           │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   ├── _deprecation_warning.cpython-37.pyc
│   │   │           │   │   ├── archive_util.cpython-37.pyc
│   │   │           │   │   ├── build_meta.cpython-37.pyc
│   │   │           │   │   ├── config.cpython-37.pyc
│   │   │           │   │   ├── dep_util.cpython-37.pyc
│   │   │           │   │   ├── depends.cpython-37.pyc
│   │   │           │   │   ├── dist.cpython-37.pyc
│   │   │           │   │   ├── extension.cpython-37.pyc
│   │   │           │   │   ├── glibc.cpython-37.pyc
│   │   │           │   │   ├── glob.cpython-37.pyc
│   │   │           │   │   ├── launch.cpython-37.pyc
│   │   │           │   │   ├── lib2to3_ex.cpython-37.pyc
│   │   │           │   │   ├── monkey.cpython-37.pyc
│   │   │           │   │   ├── msvc.cpython-37.pyc
│   │   │           │   │   ├── namespaces.cpython-37.pyc
│   │   │           │   │   ├── package_index.cpython-37.pyc
│   │   │           │   │   ├── pep425tags.cpython-37.pyc
│   │   │           │   │   ├── py27compat.cpython-37.pyc
│   │   │           │   │   ├── py31compat.cpython-37.pyc
│   │   │           │   │   ├── py33compat.cpython-37.pyc
│   │   │           │   │   ├── py36compat.cpython-37.pyc
│   │   │           │   │   ├── sandbox.cpython-37.pyc
│   │   │           │   │   ├── site-patch.cpython-37.pyc
│   │   │           │   │   ├── ssl_support.cpython-37.pyc
│   │   │           │   │   ├── unicode_utils.cpython-37.pyc
│   │   │           │   │   ├── version.cpython-37.pyc
│   │   │           │   │   ├── wheel.cpython-37.pyc
│   │   │           │   │   └── windows_support.cpython-37.pyc
│   │   │           │   ├── _deprecation_warning.py
│   │   │           │   ├── _vendor
│   │   │           │   │   ├── __init__.py
│   │   │           │   │   ├── __pycache__
│   │   │           │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   ├── pyparsing.cpython-37.pyc
│   │   │           │   │   │   └── six.cpython-37.pyc
│   │   │           │   │   ├── packaging
│   │   │           │   │   │   ├── __about__.py
│   │   │           │   │   │   ├── __init__.py
│   │   │           │   │   │   ├── __pycache__
│   │   │           │   │   │   │   ├── __about__.cpython-37.pyc
│   │   │           │   │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   │   ├── _compat.cpython-37.pyc
│   │   │           │   │   │   │   ├── _structures.cpython-37.pyc
│   │   │           │   │   │   │   ├── markers.cpython-37.pyc
│   │   │           │   │   │   │   ├── requirements.cpython-37.pyc
│   │   │           │   │   │   │   ├── specifiers.cpython-37.pyc
│   │   │           │   │   │   │   ├── utils.cpython-37.pyc
│   │   │           │   │   │   │   └── version.cpython-37.pyc
│   │   │           │   │   │   ├── _compat.py
│   │   │           │   │   │   ├── _structures.py
│   │   │           │   │   │   ├── markers.py
│   │   │           │   │   │   ├── requirements.py
│   │   │           │   │   │   ├── specifiers.py
│   │   │           │   │   │   ├── utils.py
│   │   │           │   │   │   └── version.py
│   │   │           │   │   ├── pyparsing.py
│   │   │           │   │   └── six.py
│   │   │           │   ├── archive_util.py
│   │   │           │   ├── build_meta.py
│   │   │           │   ├── cli-32.exe
│   │   │           │   ├── cli-64.exe
│   │   │           │   ├── cli.exe
│   │   │           │   ├── command
│   │   │           │   │   ├── __init__.py
│   │   │           │   │   ├── __pycache__
│   │   │           │   │   │   ├── __init__.cpython-37.pyc
│   │   │           │   │   │   ├── alias.cpython-37.pyc
│   │   │           │   │   │   ├── bdist_egg.cpython-37.pyc
│   │   │           │   │   │   ├── bdist_rpm.cpython-37.pyc
│   │   │           │   │   │   ├── bdist_wininst.cpython-37.pyc
│   │   │           │   │   │   ├── build_clib.cpython-37.pyc
│   │   │           │   │   │   ├── build_ext.cpython-37.pyc
│   │   │           │   │   │   ├── build_py.cpython-37.pyc
│   │   │           │   │   │   ├── develop.cpython-37.pyc
│   │   │           │   │   │   ├── dist_info.cpython-37.pyc
│   │   │           │   │   │   ├── easy_install.cpython-37.pyc
│   │   │           │   │   │   ├── egg_info.cpython-37.pyc
│   │   │           │   │   │   ├── install.cpython-37.pyc
│   │   │           │   │   │   ├── install_egg_info.cpython-37.pyc
│   │   │           │   │   │   ├── install_lib.cpython-37.pyc
│   │   │           │   │   │   ├── install_scripts.cpython-37.pyc
│   │   │           │   │   │   ├── py36compat.cpython-37.pyc
│   │   │           │   │   │   ├── register.cpython-37.pyc
│   │   │           │   │   │   ├── rotate.cpython-37.pyc
│   │   │           │   │   │   ├── saveopts.cpython-37.pyc
│   │   │           │   │   │   ├── sdist.cpython-37.pyc
│   │   │           │   │   │   ├── setopt.cpython-37.pyc
│   │   │           │   │   │   ├── test.cpython-37.pyc
│   │   │           │   │   │   ├── upload.cpython-37.pyc
│   │   │           │   │   │   └── upload_docs.cpython-37.pyc
│   │   │           │   │   ├── alias.py
│   │   │           │   │   ├── bdist_egg.py
│   │   │           │   │   ├── bdist_rpm.py
│   │   │           │   │   ├── bdist_wininst.py
│   │   │           │   │   ├── build_clib.py
│   │   │           │   │   ├── build_ext.py
│   │   │           │   │   ├── build_py.py
│   │   │           │   │   ├── develop.py
│   │   │           │   │   ├── dist_info.py
│   │   │           │   │   ├── easy_install.py
│   │   │           │   │   ├── egg_info.py
│   │   │           │   │   ├── install.py
│   │   │           │   │   ├── install_egg_info.py
│   │   │           │   │   ├── install_lib.py
│   │   │           │   │   ├── install_scripts.py
│   │   │           │   │   ├── launcher\ manifest.xml
│   │   │           │   │   ├── py36compat.py
│   │   │           │   │   ├── register.py
│   │   │           │   │   ├── rotate.py
│   │   │           │   │   ├── saveopts.py
│   │   │           │   │   ├── sdist.py
│   │   │           │   │   ├── setopt.py
│   │   │           │   │   ├── test.py
│   │   │           │   │   ├── upload.py
│   │   │           │   │   └── upload_docs.py
│   │   │           │   ├── config.py
│   │   │           │   ├── dep_util.py
│   │   │           │   ├── depends.py
│   │   │           │   ├── dist.py
│   │   │           │   ├── extension.py
│   │   │           │   ├── extern
│   │   │           │   │   ├── __init__.py
│   │   │           │   │   └── __pycache__
│   │   │           │   │       └── __init__.cpython-37.pyc
│   │   │           │   ├── glibc.py
│   │   │           │   ├── glob.py
│   │   │           │   ├── gui-32.exe
│   │   │           │   ├── gui-64.exe
│   │   │           │   ├── gui.exe
│   │   │           │   ├── launch.py
│   │   │           │   ├── lib2to3_ex.py
│   │   │           │   ├── monkey.py
│   │   │           │   ├── msvc.py
│   │   │           │   ├── namespaces.py
│   │   │           │   ├── package_index.py
│   │   │           │   ├── pep425tags.py
│   │   │           │   ├── py27compat.py
│   │   │           │   ├── py31compat.py
│   │   │           │   ├── py33compat.py
│   │   │           │   ├── py36compat.py
│   │   │           │   ├── sandbox.py
│   │   │           │   ├── script\ (dev).tmpl
│   │   │           │   ├── script.tmpl
│   │   │           │   ├── site-patch.py
│   │   │           │   ├── ssl_support.py
│   │   │           │   ├── unicode_utils.py
│   │   │           │   ├── version.py
│   │   │           │   ├── wheel.py
│   │   │           │   └── windows_support.py
│   │   │           └── setuptools-40.6.2.dist-info
│   │   │               ├── INSTALLER
│   │   │               ├── LICENSE
│   │   │               ├── METADATA
│   │   │               ├── RECORD
│   │   │               ├── WHEEL
│   │   │               ├── dependency_links.txt
│   │   │               ├── entry_points.txt
│   │   │               ├── top_level.txt
│   │   │               └── zip-safe
│   │   └── pyvenv.cfg
│   ├── ios
│   ├── node_modules
│   ├── package-lock.json
│   └── package.json
├── MarvelPrototype
│   ├── data.js
│   ├── images
│   │   ├── 1a4a375839fd4eeb9be9cfbcd27de387.png
│   │   ├── 1ef81c5b90264f89b1af5bfabed8714d.png
│   │   ├── 25f4889f2209498a880f653af96860a9.png
│   │   ├── 26cf1b479549c1ba4c9917a1730225.png
│   │   ├── 3c9bc7c94d4c388b8a4fdcc3e72eb3.png
│   │   ├── 4b72bb71707b4a549f1055f534216078.png
│   │   ├── 4f37951214c9442fb94819730377308f.png
│   │   ├── 57751480b67b4de0a64d8a751f2c77f4.png
│   │   ├── 5ab872fdc5d64c5bbd20842a35c17a05.png
│   │   ├── 74b06069efb045879a1da6e4d9c75e41.png
│   │   ├── 87f4ff8a75e4fbc856a0a6a55cff01a.png
│   │   ├── 949a791e9b554f6b903e85c30a005749.png
│   │   ├── b9c6778d2cd94a21a6899eec4f270112.png
│   │   ├── c595affb7ce4959bce849fa1decf478.png
│   │   └── f7df61108d014919a77203872f321e11.png
│   ├── index.html
│   ├── static
│   │   ├── apple-watch-42.20cc984f2826d474da8c839504089bb4.png
│   │   ├── assets
│   │   │   ├── images
│   │   │   │   └── select-property.svg
│   │   │   └── webfonts
│   │   │       ├── fakt-soft
│   │   │       │   ├── FaktSoftPro-Blond.eot
│   │   │       │   ├── FaktSoftPro-Blond.ttf
│   │   │       │   ├── FaktSoftPro-Blond.woff
│   │   │       │   ├── FaktSoftPro-Medium.eot
│   │   │       │   ├── FaktSoftPro-Medium.ttf
│   │   │       │   ├── FaktSoftPro-Medium.woff
│   │   │       │   ├── FaktSoftPro-Normal.eot
│   │   │       │   ├── FaktSoftPro-Normal.ttf
│   │   │       │   └── FaktSoftPro-Normal.woff
│   │   │       └── ventura
│   │   │           ├── VenturaEdding-Bold.eot
│   │   │           ├── VenturaEdding-Bold.ttf
│   │   │           └── VenturaEdding-Bold.woff
│   │   ├── common-bundle.efd439564b8baecda15d.js
│   │   ├── css
│   │   │   └── prototype.1416d8c79d57fd851151.css
│   │   ├── error.f20bed27f2615a4ead0a41381810eb02.png
│   │   ├── error@2x.b0fc8df1b36c80ef7a4ded5f9d4e37e4.png
│   │   ├── handoff-popover-image.cc423bd2930e31ec8a4a03ccc51c0ace.png
│   │   ├── handoff-popover-image@2x.88371f05166ad88f38053a770e502dcc.png
│   │   ├── handoff.a3b0a520569e8ee4219233310b3cc5a0.png
│   │   ├── handoff@2x.bfbd2a193972d7b1436525685563e1be.png
│   │   ├── icon-dropdown--l.4a42c5e307be516447701f199cc7a9b2.svg
│   │   ├── icon-dropdown--m.1b4cec33d9cfaf1cde0a5eaf98fea154.svg
│   │   ├── icon-dropdown--s.4c030a980600f9243472c633d861c5ff.svg
│   │   ├── icon-dropdown--xl.97289491f1e89d6de0a7b7961495c3fa.svg
│   │   ├── icon-dropdown--xs.1c6752077c45913645681a1e603518a3.svg
│   │   ├── icon-sad--l.41dcb95035f30fdb44746f7925d7d6f8.svg
│   │   ├── icon-sad--m.54be2a36991642dbb2c4a9675c3739b1.svg
│   │   ├── icon-sad--s.428c9fb6038db88d67ce8b9a74e5c0e5.svg
│   │   ├── icon-sad--xl.94acb7a0516b311ab065efc4c9b114eb.svg
│   │   ├── icon-sad--xs.2bc6ce0ba4ca4abe2281f34af57088b6.svg
│   │   ├── icon-success--l.939bfc59a4f51f8753cfaaf91def6b5e.svg
│   │   ├── icon-success--m.440f937fa49ccd28ece9a4409feee97a.svg
│   │   ├── icon-success--s.1c856adabfc6db5a6f030ca0b60406ac.svg
│   │   ├── icon-success--xl.70877af52da05cb4bcadc72fb6a2c8a5.svg
│   │   ├── icon-success--xs.fd4bb7c3816bf664d3c9ea60831d976e.svg
│   │   ├── ipad-landscape.64cfb3598930700fdea3d27bb7a6c9be.png
│   │   ├── ipad.8d8dc42f4fdb0cf9c0e7c0eebd6c377d.png
│   │   ├── iphone4s-landscape.9ca313b33fbcb7953423e07f7c945ec0.png
│   │   ├── iphone4s.7d75ae0dc4c66c787d36c1a3bfcb1ae9.png
│   │   ├── iphone5c-landscape.7177ec50e14cb356fff394703941728c.png
│   │   ├── iphone5c.d1324efb921b6767497ff8f137565acc.png
│   │   ├── iphone5s-landscape.9101ad7ebff87532558ef8d659f8d2ec.png
│   │   ├── iphone5s.edb2901f9080704665df579afb674e69.png
│   │   ├── iphone6-landscape.e6e3b7043b64136e8c3c33966ada7ab5.png
│   │   ├── iphone6.ef042ff2251e51229a96bebe3fa8b733.png
│   │   ├── iphone6plus-landscape.e2d5186ab75eaf6b76e95ad9fc527dbe.png
│   │   ├── iphone6plus.338f37ee3c4ee1d818304d17827486f3.png
│   │   ├── iphonex-landscape.1e79e330123a82d07219dfda785282a5.png
│   │   ├── iphonex-notch-landscape.46e4e8902c668b1b838b99ad7070868e.png
│   │   ├── iphonex-notch.3cf3d13550ae1389a3cfb6737bb9f1f5.png
│   │   ├── iphonex.747246e4ed7377a5fde782520116d934.png
│   │   ├── lumia920-landscape.df94a952bcde9fb403a0e2074069c8be.png
│   │   ├── lumia920.73fa599e3605dd76517f2ede9aeb4ed3.png
│   │   ├── nexus5-landscape.256f2e2808a39e8089f5744127c9a0aa.png
│   │   ├── nexus5.83de8163963168c6237cc49a7d64a9f8.png
│   │   ├── no-assets.7fb81e7ad62ab54cc276b93ccba26677.png
│   │   ├── no-assets@2x.7a2d333870547c7da4a997014f7a6cba.png
│   │   ├── powered-by.1b4ea15ebcad3905afc18059969a2788.png
│   │   ├── prototype-bundle.734a294db00c95c533a3.js
│   │   ├── select-property.b3f39f6dd76ceacc66bb3ac6f05879da.svg
│   │   └── upgrade-message.37bae03a2ae40d88c63310f9684005c6.png
│   └── v2
│       └── polyfill.min.js
└── README.md
</pre>
