package todoList.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import todoList.models.ModelTodo;

@Repository

public interface TodoRepository  extends CrudRepository<ModelTodo, Long>{
	
	
}

