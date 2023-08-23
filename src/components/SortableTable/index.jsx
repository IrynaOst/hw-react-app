import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
} from '@mui/material';

import { stableSort, getComparator } from '../../utils/tableSorter';

import { SortableTableHead } from './SortableTableHead';
import { TableNoData } from './TableNoData';

export const SortableTable = ({
  rowItems,
  page,
  rowsPerPage,
  order,
  orderBy,
  RowComponent,
  tableHeadData,
  handleRequestSort,
}) => {
  const sortedRowItems = stableSort(rowItems, getComparator(order, orderBy));
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowItems.length) : 0;

  return (
    <TableContainer sx={{ minWidth: 800 }}>
      <Table>
        <SortableTableHead
          order={order}
          orderBy={orderBy}
          tableHeadData={tableHeadData}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {sortedRowItems
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <RowComponent
                key={row.id}
                rowData={row}
              />
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          {!sortedRowItems.length && <TableNoData />}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
