import { useContext } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
} from '@mui/material';
import { UserContext } from '../../contexts/UserContext';

export const UserDetailsDialog = ({ user, handleClose, open }) => {
  const { firstName, lastName, email, hobby, profession } = user || {};
  const { handleAddUser } = useContext(UserContext);
  
  return (
    <Dialog
      open={open}
    >
      <DialogTitle component='h5'>{`${firstName} ${lastName}`}</DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell variant='head'>Email</TableCell>
                <TableCell>{email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>Profession</TableCell>
                <TableCell>{profession}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>Hobby</TableCell>
                <TableCell>{hobby}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={() => handleAddUser(user)}>
          Add
        </Button>
        <Button variant='outlined' onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
