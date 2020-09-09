// import { createRequire } from 'module';

import { config } from './apiToken';

// const require = createRequire(import.meta.url);


// const fetch = require("node-fetch");

// const repoListUrl = 'https://api.github.com/users/JupitersLB/repos';

const baseUrl = 'https://api.github.com/';

const mediSafeUrl = `${baseUrl}repos/JupitersLB/medi-safe/stats/participation`;
const portfolioUrl = `${baseUrl}repos/JupitersLB/portfolio/stats/participation`;
const yoursUrl = `${baseUrl}repos/JupitersLB/rails-journal/stats/participation`;
const cocktailUrl = `${baseUrl}repos/JupitersLB/rails-mister-cocktail/stats/participation`;
// const urls = [mediSafeUrl, portfolioUrl, yoursUrl, cocktailUrl];

const headers = { 'Authorization' : `Token ${config.token}` };

// const repoCounts = (repoName) => {
//   const url = `${baseUrl}repos/JupitersLB/${repoName}/stats/participation`;
//   let count = 0;
//   fetch(url, {
//     'headers': headers
//   })
//     .then(r => r.json())
//     .then((data) => {
//       // const n = data[0][0];
//       count += parseInt(data.owner.reverse()[0], 10);
//       console.log(count);
//     });
// };

const api = (url) => {
  const promise = fetch(url, { 'headers': headers }).then(r => r.json());
  return { promise };
};


const mediSafeCount = api(mediSafeUrl);
const portfolioCount = api(portfolioUrl);
const yoursCount = api(yoursUrl);
const cocktailCount = api(cocktailUrl);

const counts = {
  mediSafe: mediSafeCount,
  portfolio: portfolioCount,
  yours: yoursCount,
  cocktail: cocktailCount
};

export default counts;
