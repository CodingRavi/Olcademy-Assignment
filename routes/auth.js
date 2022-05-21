const router = require('express').Router();

const {
getHomepage,
Register
} = require('../controllers/UserController');

/**
 * @desc Opens the user homepage
 * @route GET /api/user
 * @access Public
 */
 router
 .route("/").get(getHomepage);

    /**
     * @desc Register a new user
     * @route POST /api/user/ register
     * @access Public
     *  */
    router.route("/register").post(Register);

module.exports = router;

