const message = require('../constants/messages');

const oddNumbers = (number)=> {
    return (Number.isInteger(number) && number > 0) 
    ?  Array.from({ length: (number + 1) / 2 }, (_, index) => index * 2 + 1)   
    :  message.ERROR_ODD_NUMBER; 
}

module.exports = {
    oddNumbers
}