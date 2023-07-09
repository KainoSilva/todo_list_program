// import '../App.css'

export default function TodoItem({ todo, toggleTodo }) {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <li
      onClick={handleToggle}
      className={`todo-item ${completed ? 'completed' : ''}`}
    >
      {text}
    </li>
  );
}