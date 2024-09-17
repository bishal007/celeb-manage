import React, { useState } from 'react';

interface EditUserProps {
    user: {
        id: number;
        first: string;
        last: string;
        dob: string;
        gender: string;
        country: string;
        description: string;
    };
    onEdit: (updatedUser: any) => void;
    onCancel: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onEdit, onCancel }) => {
    const [age] = useState<number>(new Date().getFullYear() - new Date(user.dob).getFullYear());
    const [gender, setGender] = useState<string>(user.gender);
    const [country, setCountry] = useState<string>(user.country);
    const [description, setDescription] = useState<string>(user.description);

    const handleSave = () => {
        onEdit({ ...user, gender, country, description });
    };

    return (
        <div style={containerStyle}>
            <h2>{`${user.first} ${user.last}`}</h2>
            <div style={fieldStyle}>
                <label>Age</label>
                <input type="text" value={`${age} Years`} readOnly style={inputStyle} />
            </div>
            <div style={fieldStyle}>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}>
                    <option value="Rather not say">Rather not say</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div style={fieldStyle}>
                <label>Country</label>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={textareaStyle} />
            </div>
            <div style={buttonContainerStyle}>
                <button onClick={onCancel} style={cancelButtonStyle}>
                    <span style={iconStyle}>❌</span>
                </button>
                <button onClick={handleSave} style={saveButtonStyle}>
                    <span style={iconStyle}>✔️</span>
                </button>
            </div>
        </div>
    );
};

// Styles
const containerStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '400px', // Max width for larger screens
    margin: '0 auto', // Center on the page
};

const fieldStyle: React.CSSProperties = {
    marginBottom: '15px',
};

const inputStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '100%',
};

const textareaStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '100%',
    height: '60px',
};

const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
};

const cancelButtonStyle: React.CSSProperties = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
};

const saveButtonStyle: React.CSSProperties = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
};

const iconStyle: React.CSSProperties = {
    fontSize: '20px',
};

// Media Queries for Responsiveness
const mediaQueries = `
    @media (max-width: 600px) {
        ${containerStyle}
        padding: '15px';
        max-width: '90%'; // Full width on mobile
    }
`;

export default EditUser;