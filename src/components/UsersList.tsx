import React, { useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UsersList: React.FC = () => {
  const { error, loading, users } = useTypedSelector(state => state.usersReducer);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers()
  }, []);

  if (loading) {
    return <h1>Loading users ...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>  
      )}
    </div>
  )
}
