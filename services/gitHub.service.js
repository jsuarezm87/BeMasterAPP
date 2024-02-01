const message = require('../constants/messages');
const { gitHubApi } = require('../api/gitHubApi');
 
const gitHubAPI = async (req) => {  
    try {
        const { user = 'google', limit = 10 } = req?.query; 

        const { data } = await gitHubApi.get(`/${user}/repos?sort=stars&per_page=${limit}`);
        const repoGitHub = data.map(({id, name}) =>({id, name}));

        return {
            status: message.STATUS_200,
            response: {
                data: repoGitHub
            }            
        }
    }catch (error) {
        console.log(error);
        return {
            status: message.STATUS_500,
            response: {
                error
            }            
        }
    }    
}


module.exports = {
    gitHubAPI
}