import { useMemo, memo, useState } from 'react';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
} from '@mui/material';

import { stableSort, getComparator } from '../../utils/tableSorter/tableSorter';

import { SortableTableHead } from './SortableTableHead';
import { TableNoData } from './TableNoData';

export const SortableTable = memo(({
  rowItems,
  page,
  rowsPerPage,
  RowComponent,
  tableHeadData,
  defaultSortProperty,
}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(defaultSortProperty || 'id');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRowItems = useMemo(
    ()=> stableSort(rowItems, getComparator(order, orderBy)),
    [rowItems, order, orderBy]
  );

  const emptyRowsCount = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowItems.length) : 0;

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
          {emptyRowsCount > 0 && (
            <TableRow style={{ height: 53 * emptyRowsCount }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          {!sortedRowItems.length && <TableNoData />}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
