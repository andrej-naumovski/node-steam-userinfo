#Node Steam User Info
###A simple package to get Steam user information from SteamID.

NodeSteamUserInfo is a package to help you fetch Steam user information from only a SteamID.

It is asynchronous, written in ES6 and works with callbacks, promises and async/await.

##Installation
Run **npm install --save node-steam-userinfo**.

##Functions
###setup(apiKey)
* `apiKey` - Your Steam API key.

###getUserDetails(steamId[, callback])
* `steamId` - The SteamID of the user you want to get.
* `callback` - The callback method to be executed on response. The callback takes 2 arguments: `error` the error (null
if successful), and `user` the user data (null if error).
* If no callback is provided, the method returns a `Promise` and can be used with async/await (see examples).
