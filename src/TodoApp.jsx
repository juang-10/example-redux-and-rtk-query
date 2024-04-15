import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)
  // const { data: todos = [], isLoading, isFetching } = useGetTodosQuery();
  const {data: todo, isLoading} = useGetTodoQuery(todoId);

  const onPrevTodo = () => {
    if(todoId === 1) return
    setTodoId(todoId - 1)
  }

  const onNextTodo = () => {
    setTodoId(todoId + 1)
  }
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={onPrevTodo}>
        Prev Todo
      </button>

      <button onClick={onNextTodo}>
        Next Todo
      </button>

      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong> {todo.completed ? 'DONE' : 'PENDING'} </strong> 
              {todo.title}
            </li>
          ))
        }
      </ul> */}

    </>
  )
}
