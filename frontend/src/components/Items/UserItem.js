import {
    CardIconContainer,
    IconButton,
    UserItemContainer,
    UserSpan
} from '../GlobalStyle'
import {Trash2} from "react-feather";

export default function UserItem({ userItem, onDeleteUser }) {
  return (
    <UserItemContainer>
      <UserSpan>{userItem.userName}</UserSpan>
        <CardIconContainer>
            <IconButton onClick={() => onDeleteUser(userItem.userName)}><Trash2 size={20}/></IconButton>
        </CardIconContainer>
    </UserItemContainer>
  )
}
