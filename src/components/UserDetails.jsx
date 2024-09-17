const UserDetails = ({ user }) => {
    console.log("User Object:", user); // Log the user object to check its structure

    const calculateAge = (dob) => {
        if (!dob) return 'N/A'; // Return 'N/A' if dob is not provided
        const birthDate = new Date(dob);
        if (isNaN(birthDate.getTime())) return 'N/A'; // Check if the date is valid
        const age = new Date().getFullYear() - birthDate.getFullYear();
        const monthDifference = new Date().getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && new Date().getDate() < birthDate.getDate())) {
            return age - 1; // Adjust age if the birthday hasn't occurred this year
        }
        return age;
    };

    return (
      <div className="user-details">
        {user.picture ? (
          <img src={user.picture} alt={user.name} />
        ) : (
          <p>No image available</p>
        )}
        <h2>{user.name}</h2>
        <p><b>Age:</b> {calculateAge(user.dob)}</p> {/* Calculate age from dob */}
        <p><b>Gender:</b> {user.gender}</p>
        <p><b>Country:</b> {user.country}</p>
        <p>{user.description}</p>
      </div>
    );
};

export default UserDetails;
