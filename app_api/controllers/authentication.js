const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

const register = async (req, res) => {
    // Validate message to insure that all parameters are present
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields are required" });
    }

    const user = new User(
        {
            name: req.body.name,        // Set username
            email: req.body.email,      // Set email address
            password: ''                // Start with empty password
        });
    user.setPassword(req.body.password) // Set user password
    const q = await user.save();

    if (!q) 
    {
        //  Database returned no data
        return res
            .status(400)
            .json(err);
    } else {
        // Return new user token
        const token = user.generateJWT();
        return res
            .status(200)
            .json(token);
    }
};

const login = (req, res) => {
    // Validate message to ensure that email and password are present.
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }

    // Delegate authentication to passport module
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            // Error in Authentication Process
            return res
                .status(404)
                .json(err);
        }
        if (user) { // Auth succeeded - generate JWT and return to caller
            const token = user.generateJWT();
            res
                .status(200)
                .json({ token });
        } else { // Auth failed return error
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};

// Export methods that drive the endpoints
module.exports = {
    register,
    login
};
