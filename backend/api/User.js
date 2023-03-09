const express = require('express');
const router = express.Router();
const nameCheck= !/^[a-zA-Z ]*$/;
const emailCheck = !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// mongodb user model 
const User = require('./../models/User');
//password handler
const bcrypt= require('bcrypt');
//sign up
router.post('/signup', (req, res)=> {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if(name == "" || email =="" || password == "" || dateOfBirth == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        });
    } else if (nameCheck.test(name)){
        res.json({
            status: "FAILED",
            message: "invalid name entered" 
        })
    } else if (emailCheck.test(email)){
        res.json({
            status: "FAILED",
            message: "invalid name entered" 
        })
    } else if (!new Date(dateOfBirth).getTime()){
        res.json({
            status: "FAILED",
            message: "invalid date" 
        })
    } else if (password.length < 8){
        res.json({
            status: "FAILED",
            message: "password is too short" 
        })
    }
    else {
        User.find({email}).then(result => {
            if(){

            }else{
                //try to create new user 
                //password handling
            }

        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "error occured while checking for user" 
            })
        })
    }
})


// sign in 
router.post('/signin', (req, res)=> {
    
})