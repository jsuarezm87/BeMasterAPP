const Service = require('../services/gitHub.service');
 
const gitHubAPI = async (req, res) => {
    const resp = await Service.gitHubAPI(req);
    res.status(resp.status).send(resp.response);  
}

module.exports = {
    gitHubAPI
}