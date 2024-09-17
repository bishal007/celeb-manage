const DeleteDialog = ({ onDelete, onCancel }) => {
    return (
      <div className="delete-dialog">
        <p>Are you sure you want to delete?</p>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    );
  };
  
  export default DeleteDialog;
  