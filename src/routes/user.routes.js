const { Router } = require("express")
const { AuthMiddleware, PaseIntMiddleware, CacheMiddleware } = require("../middlewares")
const { CacheTime } = require('../helpers')

module.exports = function({UserController}){
    const router = Router()

    router.get("/:userId", UserController.get)
    router.get("/", [PaseIntMiddleware, CacheMiddleware(CacheTime.ONE_HOUR)], UserController.getAll)
    router.patch("/:userId", AuthMiddleware, UserController.update)
    router.delete("/:userId", AuthMiddleware, UserController.delete)

    return router;
}