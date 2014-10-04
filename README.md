## Description

This LT plugin allows two or more LightTable/browser users to share the same CodeMirror editor.
Shared connections are pesisted through a _public_ [firebase](https://www.firebase.com/) connection.
Consider a free private ccount.


## Install

Git clone this project to your LT plugins directory.

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
  e.g. evaluation, autocompletion and syntax highlighting are _not_ shared.

## TODO
* Detach/dispose from current firebase session
* Allow firebase url to be configured
* Consider a workflow where multiple files are shared through one connection.
  This could be possible by switching files in one tab [with this command](https://github.com/cldwalker/ltfiles/blob/bf5ce36188219622796b794f7dcf7be4d255dd36/src/lt/plugins/ltfiles/document.cljs#L32-L42).
