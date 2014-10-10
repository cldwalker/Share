## Description

This LT plugin allows two or more LightTable users to share the same CodeMirror
editor. Each user can their own keybindings - yes emacs users can pair with vim
users (cats and dogs living together!). LightTable users can also pair with
users using a browser-based CodeMirror editor. Shared connections are pesisted
through a _public_ [firebase](https://www.firebase.com/) connection. If you're
concerned about privacy, consider getting a free private ccount.

## Install

Install this plugin with LT's plugin manager or clone this project to your LT
plugins directory.

## Usage

### Two LT users

* First user shares their current tab with command `Share: Share current tab`. ID of created session is copied to clipboard.
* Second user opens a new tab, executes command `Share: Attach current tab` and inputs first user's ID.

Two LT editors are in sync!

### LT user and browser user

* First user shares their current tab with command `Share: Share current tab`. ID of created session is copied to clipboard.
* Second user, goes to `http://demo.firepad.io/#ID` where ID is first user's ID.

LT user and browser user are in sync!

## Limitations

* Shared connections are per tab/file.
* Only editing experience is shared e.g. text manipulation and highlighting. All LightTable behaviors
  e.g. evaluation, autocompletion and syntax highlighting are _not_ shared. This means only the original editor
  can evaluate, etc.

## Tips

* In pairing scenarios where eval and other LT features matter, consider screensharing.
* When pairing on anything that's not a plain text file, sharees should set their file syntax with the command `Editor: Set current editor syntax`.
* Given the ease of sharing, even between browser and editor, this plugin is a good fit for [swarm coding](http://technomancy.us/162) a.k.a. pairing as a group.

## TODO
* Detach/dispose from current firebase session
* Allow firebase url to be configured
* Consider a workflow where multiple files are shared through one connection.
  This could be possible by switching files in one tab [with this command](https://github.com/cldwalker/ltfiles/blob/bf5ce36188219622796b794f7dcf7be4d255dd36/src/lt/plugins/ltfiles/document.cljs#L32-L42).

## Credits

* Thanks to @jamii for the proof of concept!

## Bugs/Issues

Please report them [on github](http://github.com/cldwalker/Share/issues).

## Contributions

[See here](http://tagaholic.me/contributing.html) for contributing guidelines.

## Links

* [firepad atom plugin](https://github.com/firebase/atom-firepad/)
* [sharejs-codemirror](https://github.com/share/share-codemirror) - Open source alternative to firebase/firepad which requires running your own server(s) but gives you complete control of shared data.

## License
See LICENSE.txt
