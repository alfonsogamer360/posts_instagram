import { repositoryPosts } from "../repositories/post.repository.js";

class ServicesPosts {
    async getAll (){
        const posts = await repositoryPosts.getAll()
        return posts
    }

     async getById (id){
        const posts = await repositoryPosts.getById(id)
        return posts
    }

    async create (data){
        const postCriado = await repositoryPosts.create(data)
        return postCriado
    }
    async delete (id){
        const postDeletar = await repositoryPosts.delete(id)
        return postDeletar
    }
    
    async updatePut (id,data){
        const postDeletar = await repositoryPosts.updatePut(id,data)
        return postDeletar
    }

}
export const servicesPosts = new ServicesPosts()