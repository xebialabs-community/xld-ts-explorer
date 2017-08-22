### How to build the plugin

Actually it is quite easy, you just need to run `./gradlew build`

This repository is just a wrapper to create an XLD plugin from 
[ts-explorer](https://github.com/acierto/ts-explorer), it loads the output and 
create a plugin in `build/libs` folder. 
So you don't need to install OCaml to build the plugin.

When you copy it to `plugins` folder in XLD server instance and restart the server, 
in HTML UI you will see extra tab named 'TS'.

![alt text](https://raw.githubusercontent.com/xebialabs-community/xld-ts-explorer/master/ts-plugin.png "TS Plugin")