const BaseService = require('./base.service');
let _ideaRepository = null

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository)
        _ideaRepository = IdeaRepository
    }
    
    async getUserIdeas(author){
        if(!author){
            const error = new Error()
            error.status = 400;
            error.message = "userId must be sent"
            throw error;
        }
        
        return await _ideaRepository.getUserIdeas(author)
    }

    async upvoteIdea(ideaId){
        if(!ideaId){
            const error = new Error()
            error.status = 400;
            error.message = "userId must be sent"
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId)

        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = "idea does not exists"
            throw error
        }

        idea.upvotes.push(true)

        return await _ideaRepository.update(ideaId, {upvotes: idea.upvotes})

    }

    async downvoteIdea(ideaId){
        if(!ideaId){
            const error = new Error()
            error.status = 400;
            error.message = "userId must be sent"
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId)

        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = "idea does not exists"
            throw error
        }

        idea.downVotes.push(true)

        return await _ideaRepository.update(ideaId, {upvotes: idea.upvotes})

    }

}

module.exports = IdeaService