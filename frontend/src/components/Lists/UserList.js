import UserItem from '../Items/UserItem'
import { ListWrapper } from '../GlobalStyle'

export default function UserList({ usersList, onDeleteUser }) {
  return (
    <ListWrapper>
      {usersList.map((user, index) => (
        <UserItem key={`${user.userName}_${index}`} userItem={user} onDeleteUser={onDeleteUser} />
      ))}
    </ListWrapper>
  )
}
