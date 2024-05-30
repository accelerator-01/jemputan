import { useState } from "react";

const TableQueue = ({ users }) => {
  const [tableQueue, setTableQueue] = useState(users);

  const handleMarkAsDone = (userId) => {
    setTableQueue((prevQueue) =>
      prevQueue.filter((user) => user.id !== userId)
    );
  };

  return (
    <div>
      <h2>User Queue:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableQueue.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleMarkAsDone(user.id)}>
                  Mark as Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableQueue;
