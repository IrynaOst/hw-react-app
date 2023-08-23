import { TableRow, TableCell, Typography } from '@mui/material';

export const TableNoData = () => (
  <TableRow>
    <TableCell align='center' colSpan={6} sx={{ py: 3 }}>
      <Typography variant='h5'>No data found at the BackEnd...</Typography>
    </TableCell>
  </TableRow>
);

export default TableNoData;
