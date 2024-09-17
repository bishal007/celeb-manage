import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <h2>Delete dialog box</h2>
                <p>Are you sure you want to delete?</p>
                <div style={buttonContainerStyle}>
                    <button onClick={onClose} style={cancelButtonStyle}>Cancel</button>
                    <button onClick={onConfirm} style={deleteButtonStyle}>Delete</button>
                </div>
            </div>
        </div>
    );
};

// Styles
const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
};

const cancelButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
};

const deleteButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default Modal;