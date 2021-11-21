package todoList.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;
@Entity
@Table(name = "tarea")
public class ModelTodo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	
	private Long id;
	private String todo;
	private Boolean mark;
	


	public Boolean getMark() {
		return mark;
	}

	public void setMark(Boolean mark) {
		this.mark = mark;
	}

	public ModelTodo() {}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTodo() {
		return todo;
	}
	public void setTodo(String todo) {
		this.todo = todo;
	}
	
	
	
}