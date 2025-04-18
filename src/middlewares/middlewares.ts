import express from "express"
import router from "../routes"
import passport from "passport"
import morgan from "morgan"


export const middlewares = [
    morgan("dev"),
    express.json(),
    express.urlencoded({ extended: true }),
    router,
    passport.initialize(),

]