const TodoItem = ({ todo, onDelete, onEdit, onCheck }) => {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onCheck(todo.id)}
      />

      <span className={todo.completed ? "done" : ""}>
        {todo.text}
      </span>

      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  );
};

export default TodoItem;
