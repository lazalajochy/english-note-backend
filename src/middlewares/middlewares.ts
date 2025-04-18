import express from "express"
import router from "../routes"
import passport from "passport"
import morgan from "morgan"
import helmet from "helmet"

export const middlewares = [
    morgan("dev"),
    express.json(),
    express.urlencoded({ extended: true }),
    router,
    passport.initialize(),
    helmet(),
]