import React from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';

export const UsersList: React.FC = () => {
  const { error, loading, users } = useTypedSelector(state => state.usersReducer);

  return (
    <div>UsersList</div>
  )
}
