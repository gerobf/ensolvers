import React, {useEffect, useState} from 'react'
import tareaService from '../services/tareas'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import EditarTarea from './edit';


const CargaDeTarea =()=>{
    const[newTask, setNew]= useState('')
    const [tareas, setTareas]= useState([])
    const [refetchTareas, setRefetchTareas] = useState(true)
    
    const addTask=(event) => {
        switch (newTask)
        {case '':
            window.alert('escribir una nueva tarea para cargar')
            break;
        default:
            event.preventDefault()
            const taskObject={
                todo:newTask,
                mark:false
            }
            
            tareaService
                .create(taskObject)
                .then(
                    (respuesta) => {
                    console.log(respuesta)
                    if(respuesta.status === 200){
                        tareaService
                            .getAll()
                            .then((respuesta)=>{
                                setTareas(respuesta)
                            })
                    }}
                )}
    }


    useEffect(()=>{
        tareaService
            .getAll()
            .then((respuesta)=>{
                setTareas(respuesta)
            })
    },[refetchTareas])


    const manejarTaskChange=(event)=>[
        setNew(event.target.value)
    ]

    const eliminarTarea=(event,tarea)=>{
            if(window.confirm(`¿realmente desea eliminar la tarea '${tarea.todo}'?`)){
                tareaService
                .eliminar(tarea.id)
                .then((respuesta) => {
                    window.alert(`la tarea se elimino con exito`)
                    tareaService
                        .getAll()
                        .then((respuesta)=>{
                            setTareas(respuesta)
                        })
                })
            }else{
                event.preventDefault()
            }
    }

    const botonEliminar=({tarea})=>{
        return(
            <Button type="button" onClick={(event)=>eliminarTarea(event,tarea)}variant="outline-danger" style={{float: 'right'}}>
                delete
            </Button>
        )
    }

    const desmarcarTarea=(event,tarea)=>{

        tarea.tarea.mark = false;
        tareaService
        .edit(tarea.tarea)
        .then((response)=>{
            tareaService
                .getAll()
                .then((respuesta)=>{
                    setTareas(respuesta)
                })
        })
    }

    const marcarTarea=(event, tarea)=>{
        tarea.tarea.mark = true;
        tareaService
        .edit(tarea.tarea)
        .then((response)=>{
            tareaService
                .getAll()
                .then((respuesta)=>{
                    setTareas(respuesta)
                })
        })
    }


    const botonToggle=(tarea)=>{
        return(  
            tarea.tarea.mark === true
            ?
                 <Button type="button" onClick={(event)=>desmarcarTarea(event,tarea)}variant="secondary" style={{float: 'left'}}>
                        unMark
                </Button>
            :
                <Button type="button" onClick={(event)=>marcarTarea(event,tarea)}variant="primary" style={{float: 'left'}}> 
                       Mark
                </Button>
        )
        
    }



    const Tarea=({tarea})=>{
        return(
            <tr>
                <td>
                    <p>{tarea.todo}</p>
                    {botonEliminar({tarea})}
                    {botonToggle({tarea})}
                    <EditarTarea task={tarea} traerTareas={()=>setRefetchTareas((B)=>!B)}/>
                </td>
            </tr>


        )
    }  



    return(
        <div style={style}>
            <h2> To-Do List </h2>
            <form>
            <Table striped bordered hover>
                <tbody>
                    {tareas.map(tarea=>
                        <Tarea key= {tarea.id}tarea={tarea}/>
                    )}
                </tbody>            
            </Table>
            </form>
            <Form onSubmit={addTask} style={{display: "flex"}}>
                <Form.Group style={{width: "80%"}}>
                    <Form.Control value={newTask}  onChange={manejarTaskChange}/>
                </Form.Group>
                <Button type="submit"> New Task </Button>
            </Form>
            
        </div>
    )
}





const style={
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto"
  }



export default CargaDeTarea

