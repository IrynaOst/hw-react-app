import { useContext } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../../contexts/UserContext';

export const UserList = () => {
  const { userList, handleRemoveUser } = useContext(UserContext);

  return (
    <Card sx={{ p: 1, width: '25%', height: '80vh', overflowY: 'auto' }}>
      <Typography
        sx={{ m: 2, mb: 0, fontWeight: 'bold' }}
        variant='h6'
        component='div'
      >
        List of users
      </Typography>

      <List>
        {userList.map(user =>
          <ListItem
            key={user.id}
            secondaryAction={
              <IconButton
                data-testid='remove'
                edge='end'
                aria-label='delete'
                onClick={() => handleRemoveUser(user)
                }>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${user.firstName} ${user.lastName}`}
              primaryTypographyProps={{
                style: {
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }
              }}
            />
          </ListItem>
        )}
      </List>
    </Card>
  )
}