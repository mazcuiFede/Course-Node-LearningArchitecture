const { createContainer, asClass, asValue, asFunction}  = require('awilix')

const container = createContainer()

const config = require("../config")
const app = require(".")

// //Services
const { 
    HomeService, 
    UserService, 
    IdeaService, 
    CommentService,
    AuthService
} = require('./../services')

// //Controllers
const { 
    HomeController, 
    UserController,
    IdeaController,
    CommentController ,
    AuthController
} = require('../controllers')

// //Routes
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes')
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
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton()

})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),

})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
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