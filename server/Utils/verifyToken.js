import Jwt from "jsonwebtoken"
import { createError } from "./error.js";

export const verifyToken = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    // console.log(authorization, "===> auth")
    if (authorization && authorization.startsWith('Bearer')) {
        try {
            token = authorization.split(" ")[1];
            // console.log(token, "=====>>> token")
            const { user } = Jwt.verify(token, process.env.JWT_SECRET_KEY);
            const { password, ...other } = user
            // console.log(other, "===>>> user")
            req.user = other;
            next()
        } catch (error) {
            next(createError(401, "Unauthorized User"))
        }
    }
    if (!token) {
        next(createError(401, "Unauthorized User, No token"))
    }
}

export const verifyUser = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user._id === req.params.userId || req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}

export const verifyAdmin = async (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user, "====> req.user")
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}