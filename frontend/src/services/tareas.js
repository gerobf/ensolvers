import axios from 'axios'
const baseURL = 'http://localhost:8080/tarea'

const getAll = () =>{
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newObject => {
    console.log("este es el nuevo objeto", newObject)
    return axios.post(baseURL, newObject)
}

const eliminar = (id) => {
    const nuevoURL = baseURL.concat("/",id)
    const request = axios.delete(nuevoURL)
    return request.then(response => response.data)
}

const getById = (id) => {
    const nuevoURL = baseURL.concat("/",id)
    const request = axios.get(nuevoURL)
    return request.then(response => response.data)
}

const edit = newObject => {
    console.log("este es el objeto aca adentro", newObject)
    return axios.post(baseURL, newObject)
    
}

const tareas = {
    getAll, 
    create,
    eliminar,
    edit,
    getById
}


export default tareas