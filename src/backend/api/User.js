const express = require('express');
const router = express.Router();
const nameCheck= !/^[a-zA-Z ]*$/;
const emailCheck = !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// mongodb user model 
const User = require('../models/User');
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
            if(result.length){
                // a user already exits 
                res.json({
                    status: "FAILED",
                    message: "User with tahe provided email aready exists" 
                })

            }else{
                //try to create new user 

                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashPassword =>{
                    const newUser = new User({
                        name,
                        email, 
                        password: hashPassword,
                        dateOfBirth
                    })

                    newUser.save().then(result =>{
                        res.json({
                            status: "SUCCESS",
                            message: "signup successful",
                            data: result
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "error occured while saving user" 
                        })
                    })

                })
                .catch(
                    err => {
                        console.log(err);
                        res.json({
                            status: "FAILED",
                            message: "error occured while hashing password for user" 
                        })
                    })
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