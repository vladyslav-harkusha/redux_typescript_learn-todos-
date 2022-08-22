import React, { useEffect } from 'react';
import { useTypedDispatch } from '../hooks/useTypedDispatch';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/users';

export const UsersList: React.FC = () => {
  const { error, loading, users } = useTypedSelector(state => state.usersReducer);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

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
