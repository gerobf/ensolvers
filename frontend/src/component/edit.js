import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import tareaService from '../services/tareas'


const EditarTarea = ({task, traerTareas}) => {
    const [show, setShow] = useState(false);
    const [tarea, setTarea] = useState(null)
    
    

    const manejarClose = () => setShow(false);
    const manejarShow = () => setShow(true);
  

    const editTarea = (e) => {
        setTarea(e.target.value)
    }



    const manejarSubmit = () => {
        let confirmacion = window.confirm("modificar tarea")
        if (confirmacion){
            if(tarea === null){
              window.alert('debes ingresar nueva tarea')
            }else{
            const newObject = {
                id: task.id,
                todo: tarea,
                mark: task.mark
            }
            
            tareaService
                .edit(newObject)
                .then(respuesta => console.log(respuesta))
                .finally(()=>{
                    setShow(false)
                    traerTareas()
                })
                
           }
        }else {
            console.log("se cancelo en envio del formulario")
        }
       
    }


    return (
      <>
        <Button variant="outline-info" onClick={manejarShow}>
          editar tarea
        </Button>
  
        <Modal
          show={show}
          onHide={manejarClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>
                        editind task: {task.todo}
                    </Form.Label>
                    <Form.Control 
                        onChange={editTarea}
                    >

                    </Form.Control>
                    
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={manejarClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={manejarSubmit} >Modificar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default EditarTarea