import { knex } from "../database/knex.js"

class RepositoryPosts {
    async getAll (){
        const postsPegar = await knex('posts').select("*").returning('*')
        return postsPegar
    }

    async getById(id) {
        const postsPegarId = await knex('posts').select("*").where({id}).returning('*')
        return postsPegarId
    }

    async create(data) {
        const [postCriado] = await knex('posts').insert(data).returning('*')
        return postCriado
    }

    async delete(id) {
        const [postDeletar] = await knex('posts').where({id}).del().returning("*")
        return postDeletar
    }

    async updatePut(id,data) {
        const [postAtualizado] = await knex('posts').where({id: id}).update(data).returning("*")
        return postAtualizado
    }
}
export const repositoryPosts = new RepositoryPosts()