import express from 'express'
import User from '../models/UserModel.js'
import jwt from "jsonwebtoken"

const generateAuthToken = async function (user) {
    console.log("inside auth");
    console.log(user);
    const token = jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token})
     await user.save()

    return token
}
//signup
const UserController = {
    signUp: async (req, res) => {
        console.log("request reached here");
        const user = new User(req.body)
        try {
            await user.save()
            const token = generateAuthToken(user)
            res.status(201).send({ user, token })
            console.log("Welcome to SuperSub");
        } catch (error) {
            res.status(400).send(error)
        }
    },

    //login
    logIn: async (req, res) => {
        console.log("request is coming to this function login")
        try {

            //get data from request body
            const { email, password } = req.body;
            const user = await User.findByCredentials(email,password)
            console.log("User came here");
            console.log(user)
            const token = await generateAuthToken(user)
            console.log("Logged In successfully!");

            res.send({ user, token })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    //logout
    logOut: async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
            })
            await req.user.save()
            console.log("Logged Out successfully!");
            res.send()
            
        } catch (error) {
            res.status(500).send()
        }
    },

    //logoutAll
    logOutAll: async (req, res) => {
        try {
            req.user.tokens = []
            await req.user.save()
            console.log("Logged Out of All devices");
            res.send()
            
        } catch (error) {
            res.status(500).send()
        }
    }
}

export default UserController;
