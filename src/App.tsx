import React, { useState } from 'react';
import CelebrityAccordion from './components/CelebrityAccordion';
import userData from './data/celebrities.json'; // Ensure this path is correct

const App: React.FC = () => {
    const [users, setUsers] = useState<any[]>(userData); // Initialize with all user data
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search input

    const handleDelete = (id: number) => {
        setUsers(users.filter(user => user.id !== id)); // Remove user from state
    };

    const handleEdit = (updatedUser: any) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user))); // Update user in state
    };

    // Filter users based on search term
    const filteredUsers = searchTerm
        ? users.filter(user =>
            `${user.first} ${user.last}`.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : users; // Show all users if searchTerm is empty

    return (
        <div style={{ padding: '20px' }}>
            <h1>List View</h1>
            <input
                type="text"
                placeholder="Search user"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={searchInputStyle}
            />
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                    <CelebrityAccordion 
                        key={user.id} 
                        user={user} 
                        onDelete={handleDelete} 
                        onEdit={handleEdit} 
                    />
                ))
            ) : (
                <p>No celebrities found.</p>
            )}
        </div>
    );
};

// Styles
const searchInputStyle: React.CSSProperties = {
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

export default App;
