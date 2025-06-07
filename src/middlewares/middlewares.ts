import express from "express"
import router from "../routes"
import passport from "passport"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

export const middlewares = [
    cors(),
    morgan("dev"),
    express.json(),
    express.urlencoded({ extended: true }),
    router,
    passport.initialize(),
    helmet(),
]