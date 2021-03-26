import UserItem from './UserItem'
import styled from 'styled-components/macro'

export default function UserList({ users, onDeleteUser }) {
  return (
    <Wrapper>
      {users.map((user) => (
        <UserItem key={user.name} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  list-style-type: none;
`
