import React from "react";

const UsersContent = ({ t, darkMode }) => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "User" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t.usersManagement}</h1>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-x-auto`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-700"}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t.name}</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t.email}</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t.role}</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t.actions}</th>
            </tr>
          </thead>
          <tbody className={`${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} divide-y divide-gray-200`}>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">{t.edit}</button>
                  <button className="text-red-500 hover:text-red-700">{t.delete}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersContent;
