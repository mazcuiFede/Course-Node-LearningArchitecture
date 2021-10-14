const BaseService = require('./base.service');
let _userRepository = null

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository)
        _userRepository = UserRepository
    }
    
    async getUserByUsername(username){
        return await _userRepository.getUserByUsername(username)
    }

    index()
    {
        return {
            message: "Hello world"
        }
    }
}

module.exports = UserService