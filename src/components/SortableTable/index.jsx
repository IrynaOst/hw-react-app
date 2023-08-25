import { useMemo, memo } from 'react';
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

export const SortableTable = memo(({
  rowItems,
  page,
  rowsPerPage,
  order,
  orderBy,
  RowComponent,
  tableHeadData,
  handleRequestSort,
}) => {
  const sortedRowItems = useMemo(
    ()=> stableSort(rowItems, getComparator(order, orderBy)),
    [rowItems, order, orderBy]
  );

  const emptyRows = useMemo(() => 
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowItems.length) : 0,
    [page, rowsPerPage]
  );

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
});
