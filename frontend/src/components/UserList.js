import UserItem from "./UserItem";

export default function UserList({ users, onDeleteUser }) {
  return (
    <ul>
      {users.map((user) => (
        <UserItem
            key={user.name}
            user={user}
            onDeleteUser={onDeleteUser}
        />
          ))}
    </ul>
  )
}
