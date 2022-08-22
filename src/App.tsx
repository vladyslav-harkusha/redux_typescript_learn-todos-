import React from 'react';
import './App.scss';
import { TodosList } from './components/TodosList';

import { UsersList } from './components/UsersList';

function App() {
  return (
    <div className="app">
      <UsersList />
      <hr />
      <TodosList />
    </div>
  );
}

export default App;
