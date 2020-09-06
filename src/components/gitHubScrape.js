import token from './config';

const fetch = require("node-fetch");

const repoListUrl = 'https://api.github.com/users/JupitersLB/repos';

const baseUrl = 'https://api.github.com/';

const headers = { 'Authorization' : `Token ${token}` };

const repoCounts = (repoName) => {
  const url = `${baseUrl}repos/JupitersLB/${repoName}/stats/punch_card`;
  console.log(url);
  fetch(url, {
    'headers': headers
  })
    .then(r => r.json())
    .then(d => console.log(d));
};

// const dailyCount = `${baseUrl}repos/JupitersLB/${repoName}/stats/punch_card`;

// const api = () => {
//   fetch('https://api.github.com/users/JupitersLB/repos')
//     .then(r => r.json())
//     .then(repos => repos.map((repoName) => {
//       fetch(`https://api.github.com/repos/JupitersLB/${repoName}/stats/punch_card`)
//         .then(r => r.json())
//         .then(data => console.log(data));
//     }));
// };

const api = () => {
  fetch(repoListUrl, {
    'headers': headers
  })
    .then(r => r.json())
    .then(repos => repos.map((r) => {
      repoCounts(r.name);
    }));
};

api();
