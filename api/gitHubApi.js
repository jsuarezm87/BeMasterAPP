const axios = require('axios');

const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/users'
});

module.exports = {
    gitHubApi
}