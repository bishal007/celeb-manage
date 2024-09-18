import React, { useState } from 'react';
import CelebrityAccordion from './components/CelebrityAccordion';
import Modal from './components/Modal'; // Import the Modal component
import userData from './data/celebrities.json'; // Ensure this path is correct

const App: React.FC = () => {
    const [users, setUsers] = useState<any[]>(userData); // Initialize with all user data
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search input
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility
    const [userIdToDelete, setUserIdToDelete] = useState<number | null>(null); // State to hold the user ID to delete

    const handleDelete = (id: number) => {
        setUsers(users.filter(user => user.id !== id)); // Remove user from state
        setIsModalOpen(false); // Close the modal after deletion
        setUserIdToDelete(null); // Reset the user ID to delete
    };

    const handleEdit = (updatedUser: any) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user))); // Update user in state
    };

    const openDeleteModal = (id: number) => {
        setUserIdToDelete(id); // Set the user ID to delete
        setIsModalOpen(true); // Open the modal
    };

    const confirmDelete = () => {
        if (userIdToDelete !== null) {
            handleDelete(userIdToDelete); // Call delete function with the selected user ID
        }
    };

    // Filter users based on search term
    const filteredUsers = searchTerm
        ? users.filter(user =>
            `${user.first} ${user.last}`.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : users; // Show all users if searchTerm is empty

    // Add a new style for the cards container
    const cardsContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // This adds space between cards
        width: '100%',
    };

    // Add these new styles
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        width: '100%',
        maxWidth: '600px', // Adjust this value to match your card width
        margin: '0 auto',
    };

    const headerStyle: React.CSSProperties = {
        width: '100%',
        marginBottom: '20px',
    };

    const searchInputStyle: React.CSSProperties = {
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1>List View</h1>
                <input
                    type="text"
                    placeholder="Search user"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={searchInputStyle}
                />
            </div>
            <div style={cardsContainerStyle}> {/* New wrapper for cards */}
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <CelebrityAccordion 
                            key={user.id} 
                            user={user} 
                            onDelete={openDeleteModal} // Pass openDeleteModal to handle delete
                            onEdit={handleEdit} 
                        />
                    ))
                ) : (
                    <p>No celebrities found.</p>
                )}
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onConfirm={confirmDelete} 
            />
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
