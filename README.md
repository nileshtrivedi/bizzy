## Bizzy

A tool for developing responsive websites crazy-fast, based on old webapp versoin of Sizzy

---

![gif](http://i.imgur.com/BtyqVle.gif)

## Sharing with an url
Add ```?url=http://your-url.com``` at the end of the url to share it with a preloaded url.

Example: <a href="http://bizzy.polyglot.network?url=https://preactjs.com" target="_blank">http://bizzy.polyglot.network?url=https://preactjs.com</a>

## Chrome extension
Adds a Bizzy button in the Chrome toolbar, which on click opens any page directly into Bizzy.

Chrome Store: coming soon, [Source](https://github.com/nileshtrivedi/bizzy/tree/master/chrome-extension)

## Getting Started

1. Install the dependencies:
```
yarn install
```

2. Start the server:

```sh
yarn start
```

3. Open it in your browser http://localhost:3033/

Tip: You can also use ```npm``` instead of ```yarn```, and if you want to use ```yarn``` but you don't have it on your machine, [here's how to install it](https://yarnpkg.com/lang/en/docs/install/).

## Dev issues

### Getting ```module not found``` errors
![error](http://i.imgur.com/45S4JsF.png)

Files are imported from their absolute paths instead of their relative paths to avoid repeating ```../../../../``` when requiring files. Unfortunately on some machines, the ```NODE_PATH=./src``` rule from the [.env](https://github.com/nileshtrivedi/bizzy/blob/master/.env#L4) file doesn't get applied, as mentioned [in this issue](https://github.com/nileshtrivedi/bizzy/issues/31).

Temporary solution is to run ```export NODE_PATH=./src``` in the terminal, before running ```yarn start```.


