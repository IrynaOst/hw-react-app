import { useState, memo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { UserDetailsDialog } from './UserDetailsDialog';

export const UserRowComponent = memo(({ rowData: user }) => {
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
        <TableCell 
          width={'30%'}
          style={{
            maxWidth: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
          {firstName}
        </TableCell>
        <TableCell width={'35%'}>
          {age}
        </TableCell>
        <TableCell width={'35%'}>
          {birthDate}
        </TableCell>
      </TableRow>
      <UserDetailsDialog
        user={user}
        open={open}
        handleClose={handleCloseDetails}
      />
    </>
  );
});