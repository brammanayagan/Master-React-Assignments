import UserList from "./UserList";

const UserListContainer = () => {
  const users = [
    { id: 1, name: "Bramma", age: 23 },
    { id: 2, name: "Barath", age: 25 },
    { id: 3, name: "Vishwa", age: 22 },
  ];

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-3">User List</h2>

      <UserList users={users} />
    </div>
  );
};

export default UserListContainer;
