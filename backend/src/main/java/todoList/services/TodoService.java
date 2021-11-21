package todoList.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import todoList.models.ModelTodo;
import todoList.repo.TodoRepository;

@Service
public class TodoService {
	@Autowired
	TodoRepository todoRepository; 
	
	public ArrayList<ModelTodo> obtenerTareas(){
		return (ArrayList<ModelTodo>) todoRepository.findAll();
	}
	
	public ModelTodo agregarTarea(ModelTodo tarea) {
		return todoRepository.save(tarea);
	}
	
	public Optional<ModelTodo> obtenerPorId(Long id){
		return todoRepository.findById(id);
	}
	
	
	public boolean eliminarTarea(Long id) {
		try {
			todoRepository.deleteById(id);
			return true;
		}catch(Exception err) {
			return false;
		}
	}
}