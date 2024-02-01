const {Router} = require('express');
const ControllerGitHub = require('../controllers/gitHub.controller');
const ControllerOddNumber = require('../controllers/oddNumbers.controller');
const route = require('../constants/routes');


const router = Router();

router.get(route.GITHUB, ControllerGitHub.gitHubAPI);
router.get(route.ODD_NUMBER, ControllerOddNumber.oddNumbers);

module.exports = router;