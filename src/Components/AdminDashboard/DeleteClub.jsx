import "./deleteClub.css";
const DeleteClub = ({ onClose }) => {
  return (
    <div className="delete-main-container">
      <div className="delete-container">
        <div className="top-section">
          <div className="delete-logo">
            <span className="material-symbols-outlined">delete</span>
          </div>
          <div className="data-section">
            <h1 className="heading">delete club</h1>
            <span>
              Are you sure want to delete this Club? This can not be undone
            </span>
          </div>
          <span
            className="material-symbols-outlined"
            style={{ cursor: "pointer" }}
            onClick={onClose}
          >
            close
          </span>
        </div>
        <div className="bottom-section">
          <button className="cancel" onClick={onClose}>
            cancel
          </button>
          <button className="delete">delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteClub;
