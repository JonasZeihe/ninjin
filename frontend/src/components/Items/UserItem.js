import { AvatarCard, Button } from '../GlobalStyle'

export default function UserItem({ user, onDeleteUser }) {
  return (
    <AvatarCard>
      <div>{user.userName}</div>
      <Button onClick={() => onDeleteUser(user.userName)} type="button">
        delete
      </Button>
    </AvatarCard>
  )
}
