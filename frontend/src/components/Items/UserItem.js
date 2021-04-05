import styled from 'styled-components/macro'

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

const AvatarCard = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: inherit;
  img {
    box-shadow: 0 0 10px 2px hotpink;
    width: 3.3em;
    height: 3.3em;
    border-radius: 50%;
    position: absolute;
    left: 1.75em;
  }
  div {
    height: 1.5em;
    width: 18em;
    padding: 0.5em 2em 1.75em 4em;
    background: #f6f3e7;
    text-align: center;
  }
`
const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #bf7279;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ca9499;
  }
`
