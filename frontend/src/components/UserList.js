export default function UserList({ users, onDeleteUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>
          <span className="user-name">{user.name}</span>
          <button onClick={() => onDeleteUser(user.name)} type="button">
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
