import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const TodosList: React.FC = () => {
  const { todos, loading, error, page, limit} = useTypedSelector(state => state.todosReducer);
  const {fetchTodos, setTodosPage} = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])

  if (loading) {
    return <h2>Loading todos ...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      {todos.map(todo => 
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}

      <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
        {pages.map((p, ind) =>
          <div 
            key={ind}
            onClick={() => setTodosPage(p)}
            style={{
              border: p === page ? '2px solid blue' : '1px dotted blue', 
              padding: '5px 15px',
              cursor: 'pointer',
            }}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  )
}
