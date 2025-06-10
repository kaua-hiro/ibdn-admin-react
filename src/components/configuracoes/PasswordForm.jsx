import React from 'react';

const PasswordForm = () => {
  return (
    <div className="settings-card password-form">
      <div className="card-header">
        <h3>Alterar Senha</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="current-password">Senha Atual</label>
          <input type="password" id="current-password" />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Nova Senha</label>
          <input type="password" id="new-password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar Nova Senha</label>
          <input type="password" id="confirm-password" />
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Salvar senha</button>
      </div>
    </div>
  );
};

export default PasswordForm;