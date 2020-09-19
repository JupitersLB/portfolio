import { config } from './apiToken';

const baseUrl = 'https://api.github.com/';

const mediSafeUrl = `${baseUrl}repos/JupitersLB/medi-safe/stats/participation`;
const portfolioUrl = `${baseUrl}repos/JupitersLB/portfolio/stats/participation`;
const yoursUrl = `${baseUrl}repos/JupitersLB/rails-journal/stats/participation`;
const cocktailUrl = `${baseUrl}repos/JupitersLB/rails-mister-cocktail/stats/participation`;

const headers = { 'Authorization' : `Token ${config.token}` };

const api = (url) => {
  const promise = fetch(url, { 'headers': headers }).then((r) => r.json());
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
