import { useState, useEffect } from "react";

const Notification = ({ users }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const waliUsers = users.filter((user) => user.role === "wali");
    waliUsers.forEach((user) => {
      sendNotification(user);
    });
  }, [users]);

  const sendNotification = (user) => {
    setNotifications((prev) => [...prev, `Notification sent to ${user.name}`]);
    // Implement your notification sending logic here, e.g., via API call
  };

  return (
    <div>
      <h2>Notifications:</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
