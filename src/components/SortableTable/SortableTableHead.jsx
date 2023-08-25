import { memo } from 'react';
import {
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from '@mui/material';

export const SortableTableHead = memo(({
  order,
  orderBy,
  tableHeadData,
  onRequestSort,
}) => {
  const createSortHandler = (property) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {tableHeadData.map(
          ({ id, label, alignRight, width }) => (
            <TableCell
              key={id}
              align={alignRight ? 'right' : 'left'}
              sortDirection={orderBy === id ? order : false}
              style={{ width: `${width}` }}
            >
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : 'asc'}
                onClick={createSortHandler(id)}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
});
