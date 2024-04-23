const express = require('express');
const path = require('path');

const userCtrl = {};

const User = require('../models/Usuario')

userCtrl.renderSignUpForm = (req, res) => {
    res.render('registro');
};

userCtrl.signup = async (req, res) => {
    errors = [];
    const {name, email, password, confirm_password} = req.body;
    if (password != confirm_password) {
        errors.push ({text: 'Password do not match'});
    }
    if (password.lenght < 4) {
        errors.push({text: 'Password must be at least 4 caracters'});
    }
    if (errors.lenght > 0) {
        res.render('signup', {
            errors,
            name, 
            email,
            user
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            
        }
    }

};

userCtrl.renderSigninForm = (req, res) => {
    res.render('prueba/src/login')
};

userCtrl.signin = (req, res) => {
    res.send('signin');
};

userCtrl.logOut = (req, res) => {
    res.send('logout');
};

module.exports = userCtrl;