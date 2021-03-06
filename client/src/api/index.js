import axios from 'axios';

const api = axios.create({
    baseURL: '/'                    //to run on localhost make it 'http://localhost:3000/'
})

export const insertPlayer = (payload) => api.post(`/createplayer`, payload)
export const getAllPlayers = () => api.get(`/players`)
export const updatePlayerById = (id, payload) => api.put(`/player/${id}`, payload)
export const deletePlayerById = (id) => api.delete(`/player/${id}`)
export const getPlayerById = (id) => api.get(`/player/${id}`)


const apis = {
    insertPlayer,
    getAllPlayers,
    updatePlayerById,
    deletePlayerById,
    getPlayerById
}

export default apis