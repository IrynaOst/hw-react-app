export const actions = {
  ADD_USER_TO_USER_LIST: 'ADD_USER_TO_USER_LIST',
  REMOVE_USER_FROM_USER_LIST: 'REMOVE_USER_FROM_USER_LIST',
  SET_USERS: 'SET_USERS',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actions.ADD_USER_TO_USER_LIST:
      return {
        ...state,
        userList: [...state.userList, action.user],
        users: state.users.filter((user) => user.id !== action.user.id),
      };
    case actions.REMOVE_USER_FROM_USER_LIST:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.user.id),
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
};
