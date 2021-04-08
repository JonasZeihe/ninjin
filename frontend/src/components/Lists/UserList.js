import UserItem from '../Items/UserItem'
import { ListWrapper } from '../GlobalStyle'

export default function UserList({ users, onDeleteUser }) {
  return (
    <ListWrapper>
      {users.map((user) => (
        <UserItem key={user.userName} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </ListWrapper>
  )
}
