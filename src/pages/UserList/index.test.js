import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { UserList } from './index';
import { UserContext, UserProvider } from '../../contexts/UserContext';

describe('UserList component', () => {
  const mockedValue = {
    userList: [
      {
        id: 1,
        firstName: 'Roman',
        lastName: 'Romanuk',
      },
      {
        id: 2,
        firstName: 'Katrin',
        lastName: 'Katerynuk',
      },
    ],
  };
  xit('renders user list items', () => {
    render(
      <UserProvider>
        <UserList />
      </UserProvider>
    );

    expect(screen.getByText(/Roman Romanuk/i)).toBeInTheDocument();
    expect(screen.getByText(/Katrin Katerynuk/i)).toBeInTheDocument();
  });
  it('calls handleRemoveUser when delete button is clicked', () => {
    const handleRemoveUserMock = jest.fn();
  
    render(
      <UserContext.Provider value={{ userList: mockedValue.userList, handleRemoveUser: handleRemoveUserMock }}>
        <UserList />
      </UserContext.Provider>
    );

    const deleteButton = screen.getAllByTestId('remove')[0];
    fireEvent.click(deleteButton);

    expect(handleRemoveUserMock).toHaveBeenCalledTimes(1);
  });
});