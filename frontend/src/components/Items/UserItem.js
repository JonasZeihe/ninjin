import {Button, ListItemContainer, PreviewSpan} from '../GlobalStyle'

export default function UserItem({ userItem, onDeleteUser }) {
  return (
    <ListItemContainer>
      <PreviewSpan>{userItem.userName}</PreviewSpan>
      <Button onClick={() => onDeleteUser(userItem.userName)} type="button">
        delete
      </Button>
    </ListItemContainer>
  )
}
