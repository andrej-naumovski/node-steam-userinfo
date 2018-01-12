import fetch from 'node-fetch';

const steamApiUrl = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';

let steamApiKey = '';

export function setup(apiKey) {
  steamApiKey = apiKey;
}

export function getUserDetails(steamId, callback) {
  const requestUrl = `${steamApiUrl}?key=${steamApiKey}&steamids=${steamId}&format=json`;
  const promise = fetch(requestUrl);
  if (typeof callback === 'function') {
    promise
      .then(response => response.json())
      .then(response => callback(null, response['response']['players'][0]))
      .catch(error => callback(error));
  } else {
    return promise
      .then(response => response.json())
      .then(response => response['response']['players'][0])
      .catch(error => {
        throw new Error(error);
      });
  }
}