import React from "react";
import "../css/MailPreview.css"; // Asegúrate de crear un archivo CSS

const MailPreview = ({ email, onClose }) => {
  if (!email) return null;

  return (
    <div className="mail-preview">
      <div className="mail-header">
        <h2>{email.subject}</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className="mail-info">
        <p><strong>From:</strong> {email.sender}</p>
        <p><strong>Date:</strong> {email.timestamp}</p>
      </div>
      <div className="mail-body">
        <p>{email.body}</p>
      </div>
    </div>
  );
};

export default MailPreview;
