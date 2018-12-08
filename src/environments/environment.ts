export const environment = {
  dadJokesApi: process.env.DAD_JOKES_API || 'https://icanhazdadjoke.com',
  chuckNorrisJokesApi: process.env.CHUCK_JOKES_API || 'https://api.chucknorris.io/jokes/random',
  port:  process.env.hasOwnProperty('HTTP_PORT') ? process.env['HTTP_PORT'] : 3000
};