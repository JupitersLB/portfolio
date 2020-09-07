import { createRequire } from 'module';

import { config } from './apiToken.js';

const require = createRequire(import.meta.url);


const fetch = require("node-fetch");

const repoListUrl = 'https://api.github.com/users/JupitersLB/repos';

const baseUrl = 'https://api.github.com/';

const headers = { 'Authorization' : `Token ${config.token}` };

const repoCounts = (repoName) => {
  const url = `${baseUrl}repos/JupitersLB/${repoName}/stats/punch_card`;
  fetch(url, {
    'headers': headers
  })
    .then(r => r.json())
    .then((data) => {
      data.reverse().map((d) => {
        if (d[0] === 6) {
          console.log(d[2]);
        }
      });
    });
};

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