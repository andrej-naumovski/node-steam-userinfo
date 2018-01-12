import * as SteamUserInfo from './index';

SteamUserInfo.setup('apikey');

// Example 1: Using a callback
SteamUserInfo.getUserDetails('76561198056233432', (error, user) => {
  if (error) {
    return console.log(error);
  }
  console.log('User details using callback', user);
});

// Example 2: Using Promises

SteamUserInfo
  .getUserDetails('76561198056233432')
  .then(user => {
    console.log('User details using promises', user);
  })
  .catch(error => {
    console.log(error);
  });

// Example 3: Using async/await
(async () => {
  try {
    const user = await SteamUserInfo.getUserDetails('76561198056233432');
    console.log('User details using async/await', user);
  } catch (error) {
    console.log(error);
  }
})();