import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit, onCheck }) => {
  return (
    <div className="list">
      {todos.length === 0 && <p>No tasks found</p>}

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onCheck={onCheck}
        />
      ))}
    </div>
  );
};

export default TodoList;
