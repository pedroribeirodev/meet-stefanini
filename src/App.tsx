import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [listOfTasks, setListOfTasks] = useState<String[]>([]);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value)
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim()) {
      setListOfTasks([...listOfTasks, task]);
      setTask('');
    } 
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          data-testid="task-field" 
          placeholder="Digite uma nova tarefa" 
          value={task}
          onChange={handleInputChange}
        />
        <button type="submit" data-testid="btn-submit">Adicionar nova tarefa</button>
      </form>
      <table data-testid="table">
        <thead>
          <tr>
            <th>Tarefas</th>
          </tr>
        </thead>
        <tbody>
          {listOfTasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
