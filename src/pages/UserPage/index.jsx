import { useState, useEffect } from 'react';
import { Container, Card, TablePagination } from '@mui/material';

import { mockUsers } from '../../mock/mockUsers';
import { useTablePaginationControls } from '../../hooks/useTablePaginationControls';
import {
  USER_RAWS_PER_PAGE_OPTIONS,
  USER_DEFAULT_SORT_PROPERTY,
  TABLE_HEAD,
} from './config';

import { SortableTable } from '../../components/SortableTable';
import { UserRowComponent } from './UserRowComponent';

export const UserPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUsers(mockUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTablePaginationControls({
    initialRowsPerPage: USER_RAWS_PER_PAGE_OPTIONS[0],
  });

  return (
    <Container>
      <h1>Users</h1>
      <Card>
        <SortableTable
          rowItems={users}
          page={page}
          rowsPerPage={rowsPerPage}
          RowComponent={UserRowComponent}
          tableHeadData={TABLE_HEAD}
          defaultSortProperty={USER_DEFAULT_SORT_PROPERTY}
        />
        <TablePagination
          rowsPerPageOptions={USER_RAWS_PER_PAGE_OPTIONS}
          component='div'
          count={users.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  )
}