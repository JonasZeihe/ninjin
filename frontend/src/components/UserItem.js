export default function UserItem({ user, onDeleteUser }) {
  return (
    <li>
      <span>{user.name}</span>
      <button onClick={() => onDeleteUser(user.name)} type="button">
        delete
      </button>
    </li>
  )
}
