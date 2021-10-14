const { createContainer, asClass, asValue, asFunction}  = require('awilix')

const container = createContainer()

const config = require("../config")
const app = require(".")

// //Services
const { HomeService, UserService, IdeaServices, CommentService } = require('./../services')

// //Controllers
const { HomeController } = require('../controllers')

// //Routes
const { HomeRoutes } = require('../routes/index.routes')
const Routes = require('../routes')

//models
const {Comment, User, Idea} = require('../models')

//Repositories
const {UserRepository, IdeaRepository, CommentRepository} = require('../repositories')

container
.register({
     app: asClass(app).singleton(),
     router: asFunction(Routes).singleton(),
     config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    IdeaServices: asClass(IdeaServices).singleton(),
    CommentService: asClass(CommentService).singleton(),
    UserService: asClass(UserService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})
.register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
})
.register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
})

module.exports = container