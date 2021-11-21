package todoList.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import todoList.models.ModelTodo;
import todoList.services.TodoService;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin
@RequestMapping("/tarea")
public class TodoCrontroller {
	
	@Autowired
	TodoService todoService;
	
	@GetMapping()
	public ArrayList<ModelTodo> obtenerTareas(){
		return todoService.obtenerTareas();
	}
	
	@PostMapping
	public ModelTodo agregarTarea(@RequestBody ModelTodo tarea) {
		return this.todoService.agregarTarea(tarea);
	}
	
	@GetMapping( path = "/{id}")
	public Optional<ModelTodo> obtenerPorId(@PathVariable("id") Long id){
		return this.todoService.obtenerPorId(id);
	}
	
	/*@GetMapping("/query")
	public ArrayList<ModelTodo> obtenerPorGroup(@RequestParam("gruop") Integer group){
		return this.todoService.obtenerPorGroup(group);
	}*/
	
	@DeleteMapping( path = "/{id}")
	public String eliminarPorId(@PathVariable("id") Long id) {
		boolean ok = this.todoService.eliminarTarea(id);
		if(ok) {
			return "se elimino la tarea" + id;
		}else {
			return "no se pudo eliminar la tarea" +id;
		}
	}
	 
}
