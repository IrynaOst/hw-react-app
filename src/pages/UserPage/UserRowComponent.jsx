// import { useContext } from 'react';
import { TableRow, TableCell } from '@mui/material';
// import { AdminPanelDialogsContext } from './AdminPanelDialogsContext';

export const UserRowComponent = ({ rowData }) => {
  // const { openDetailsDialog } = useContext(AdminPanelDialogsContext);
  const { id, firstName, age, birthDate } = rowData;

  // const handleOpenDetails = () => {
  //   openDetailsDialog(rowData);
  // };

  return (
    <>
      <TableRow
        hover
        key={id}
        tabIndex={-1}
        // onClick={handleOpenDetails}
        sx={{ cursor: 'pointer' }}
      >
        <TableCell width='30%'>
          {firstName}
        </TableCell>
        <TableCell align='left' width='35%'>
          {age}
        </TableCell>
        <TableCell align='left' width='35%'>
          {birthDate}
        </TableCell>
      </TableRow>
    </>
  );
};