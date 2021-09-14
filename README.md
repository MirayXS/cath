<!-- header -->
<img src = "https://media.discordapp.net/attachments/789642309632786434/867156734795055173/Cath-banner.png?width=480&height=120">

# Cath

[![NPM](https://nodei.co/npm/cath.png)](https://npmjs.org/package/cath)

[![Package](https://img.shields.io/github/package-json/v/night0721/cath?color=02023a&style=for-the-badge)](https://npmjs.org/package/cath)
[![License](https://img.shields.io/npm/l/cath?color=02023a&style=for-the-badge)](https://npmjs.org/package/cath)
[![Downloads](https://img.shields.io/npm/dw/cath?color=02023a&style=for-the-badge)](https://npmjs.org/package/cath)
[![Support Server](https://img.shields.io/discord/718762019586572341?label=Support%20Server&logo=Discord&colorB=5865F2&style=for-the-badge&logoColor=white) ](https://discord.gg/SR7TeNJG67)
![Repo Stars](https://img.shields.io/github/stars/night0721/cath?logo=github&color=5865F2&style=for-the-badge)

**cath** is a powerful [Node.js](https://nodejs.org) module that can easily interact and get data from the Cath API
If you like this package, feel free to <img src = "https://discord.com/assets/141d49436743034a59dec6bd5618675d.svg" width = "16"> **Star** and **fork** this repository.<br><br>

# Install the package ✔

Download from npm

```cli
npm install cath
```

Download from yarn

```cli
yarn add cath
```

## Examples

### Launch of the module

```js
const cath = require("cath");

const reddit_data = await cath.getreddit("meme");
console.log(reddit_data); // returns an object

const answer = await cath.random8ball();
console.log(answer); // a random answer from 8ball
```

# Support, Feature Request & Bug Reports

## <img src = "https://cdn.discordapp.com/emojis/867093614403256350.png?v=1" width = 18> Support & Feature Request

Join the official [Support Server](https://discord.gg/SbQHChmGcp) on Discord & we will be happy to assist you. <br>
To Request new features contact us on Discord using the support server.

## <img src = "https://cdn.discordapp.com/emojis/867093601962950666.png?v=1" width = "18"> Report Bugs

You can report bugs or issues by opening a issue in this repository. Alternatevely you can also contact us on Discord using the support server.

[![Support Server](https://img.shields.io/discord/718762019586572341?label=Support%20Server&logo=Discord&colorB=5865F2&style=for-the-badge&logoColor=white) ](https://discord.gg/SR7TeNJG67)
