import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [listOfUsers, setListOfUsers] = useState([]); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setListOfUsers(response.data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); 

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-6">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
        User Directory
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listOfUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="text-gray-700">
              <p className="text-sm">
                <span className="font-semibold">Company:</span> {user.company.name}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Website:</span> {user.website}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
