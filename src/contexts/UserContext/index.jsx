import { createContext, useReducer, useEffect } from 'react';
import { mockUsers } from '../../mock/mockUsers';
import { reducer, actions } from './reducer';

const initialState = {
  users: [],
  userList: [],
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: actions.SET_USERS, users: mockUsers });
    }, 1000);
  }, []);

  const value = {
    users: state.users,
    userList: state.userList,
    handleAddUser: (user) => {
      dispatch({ type: actions.ADD_USER_TO_USER_LIST, user });
    },
    handleRemoveUser: (user) => {
      dispatch({ type: actions.REMOVE_USER_FROM_USER_LIST, user });
    },
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};