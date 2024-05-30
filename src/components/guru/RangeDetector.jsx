import { useState, useEffect } from "react";

const RangeDetector = ({ apiEndpoint, location }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiEndpoint}?location=${location}`);
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const checkUsers = () => {
      setUsers((prevUsers) =>
        prevUsers.filter((user) => {
          const distance = getDistance(location, user.location);
          return distance <= 100;
        })
      );
    };

    fetchUsers();
    const intervalId = setInterval(fetchUsers, 5000); // fetch users every 5 seconds
    const checkIntervalId = setInterval(checkUsers, 10000); // check users every 10 seconds

    return () => {
      clearInterval(intervalId);
      clearInterval(checkIntervalId);
    };
  }, [apiEndpoint, location]);

  const getDistance = (loc1, loc2) => {
    // Implement a function to calculate distance between loc1 and loc2
    // You can use Haversine formula or any other distance calculation formula
  };

  return (
    <div>
      <h2>Users within 100 meters:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RangeDetector;
