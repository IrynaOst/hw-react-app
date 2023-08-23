import { useState } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { UserDetailsDialog } from './UserDetailsDialog';

export const UserRowComponent = ({ rowData: user }) => {
  const { id, firstName, age, birthDate } = user;
  const [open, setOpen] = useState(false);
  
  const handleCloseDetails = () => {
    setOpen(false);
  };

  const handleOpenDetails = () => {
    setOpen(true);
  }

  return (
    <>
      <TableRow
        hover
        key={id}
        tabIndex={-1}
        onClick={handleOpenDetails}
        sx={{ cursor: 'pointer' }}
      >
        <TableCell>
          {firstName}
        </TableCell>
        <TableCell>
          {age}
        </TableCell>
        <TableCell>
          {birthDate}
        </TableCell>
      </TableRow>
      <UserDetailsDialog
        userDetails={user}
        open={open}
        handleClose={handleCloseDetails}
      />
    </>
  );
};