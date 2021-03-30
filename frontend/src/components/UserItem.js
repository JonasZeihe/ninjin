export default function UserItem({ user, onDeleteUser }) {
  return (
    <li>
      <span>{user.userName}</span>
      <button onClick={() => onDeleteUser(user.userName)} type="button">
        delete
      </button>
    </li>
  )
}
