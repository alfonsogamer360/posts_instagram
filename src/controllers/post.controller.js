import { servicesPosts } from "../services/posts.services.js";

class ControllerPosts {
    async getAll (req,res) {
        try {
        const posts = await servicesPosts.getAll()
        return res.status(200).json(posts)
        } catch (error){
            console.error(error)
            res.status(500).json({error: "Erro ao pegar Post"});
        }
    }

    async getById (req,res) {
        const id = req.params.id
        try {
        const posts = await servicesPosts.getById(id)
        return res.status(200).json(posts)
        } catch (error){
            console.error(error)
            res.status(500).json({error: "Erro ao pegar Post"});
        }
    }

    async create (req,res) {
        try {
        const posts = await servicesPosts.create(req.body)
        return res.status(201).json(posts)
        } catch (error){
            console.error(error)
            res.status(500).json({error: "Erro ao pegar Post"});
        }
    }

    async delete (req,res) {
        const id = req.params.id
        try {
        const posts = await servicesPosts.delete(id)
        return res.status(200).json(posts)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: "Erro ao pegar Post"});
        }
    }

    async updatePut (req,res) {
        const id = req.params.id
        try {
        const posts = await servicesPosts.updatePut(id, req.body)
        return res.status(200).json(posts)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: "Erro ao pegar Post"});
        }
    }
}

export const controllerPosts = new ControllerPosts()