import React, { useState, useEffect } from 'react';

const MemberForm = ({ onSave, onCancel, member }) => {
  const [formData, setFormData] = useState({ name: '', email: '', status: 'Ativo' });

  useEffect(() => {
    if (member) {
      setFormData(member);
    } else {
      setFormData({ name: '', email: '', status: 'Ativo' });
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>{member ? 'Editar Membro' : 'Adicionar Novo Membro'}</h3>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome completo" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;