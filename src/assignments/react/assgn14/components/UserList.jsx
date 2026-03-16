const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.age}
        </p>
      ))}
    </div>
  );
};

export default UserList;
