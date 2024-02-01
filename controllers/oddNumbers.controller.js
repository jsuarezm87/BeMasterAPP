const Service = require('../services/oddNumbers.service');
 
const oddNumbers = (req, res) => {
    const { number } = req?.query; 
    const resp = Service.oddNumbers(parseInt(number, 10));
    res.send(resp);  
}

module.exports = {
    oddNumbers
}