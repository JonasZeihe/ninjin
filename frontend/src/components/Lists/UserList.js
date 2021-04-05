import UserItem from '../Items/UserItem'
import styled from 'styled-components/macro'

export default function UserList({ users, onDeleteUser }) {
  return (
    <Wrapper>
      {users.map((user) => (
        <UserItem key={user.userName} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  list-style-type: none;
`