import {AvatarCard, Button} from "../GlobalStyle";
import axios from "axios";

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