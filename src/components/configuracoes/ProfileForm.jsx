import React from 'react';

const ProfileForm = () => {
  return (
    <div className="settings-card profile-form">
      <div className="card-header">
        <h3>Informações do Perfil</h3>
      </div>
      <div className="card-body">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="country">País</label>
            <input type="text" id="country" defaultValue="Brasil" />
          </div>
          <div className="form-group">
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" placeholder="ex: São Paulo" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" placeholder="ex: Av. Paulista, 1000" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" defaultValue="exemplo@nexus.org.br" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="text" id="phone" placeholder="(11) 99999-9999" />
          </div>
          <div className="form-group">
            <label htmlFor="role">Função</label>
            <input type="text" id="role" defaultValue="Admin" />
          </div>
          <div className="form-group">
            <label htmlFor="department">Departamento</label>
            <input type="text" id="department" defaultValue="Administrativo" />
          </div>
        </div>
        <div className="card-footer">
            <button className="btn btn-primary">Salvar tudo</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;