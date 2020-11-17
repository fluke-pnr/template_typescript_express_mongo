import { Router } from "express"

export default () => {
    const route = Router()
  
    route.get("/", (req, res) => {
        return res.json(" Welcome to example model nodeJs express typescript ")
    })
  
    return route
}