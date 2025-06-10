import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import MemberTable from '../components/crud/MemberTable';
import MemberForm from '../components/crud/MemberForm';
import { initialMembers } from '../data/mockData';
import '../assets/styles/Membros.css';

const Membros = () => {
  const [members, setMembers] = useState(initialMembers);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const handleSave = (member) => {
    if (member.id) {
      // Editar
      setMembers(members.map(m => m.id === member.id ? member : m));
    } else {
      // Adicionar
      const newMember = { ...member, id: Date.now() };
      setMembers([...members, newMember]);
    }
    setIsFormVisible(false);
    setEditingMember(null);
  };
  
  const handleEdit = (member) => {
    setEditingMember(member);
    setIsFormVisible(true);
  };
  
  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este membro?")) {
      setMembers(members.filter(m => m.id !== id));
    }
  };
  
  const showForm = () => {
      setEditingMember(null);
      setIsFormVisible(true);
  }

  return (
    <div className="membros-page">
      <div className="page-header">
        <h1>Gestão de Membros</h1>
        <button className="btn btn-primary" onClick={showForm}>
          <FiPlusCircle /> Adicionar Membro
        </button>
      </div>

      {isFormVisible && (
        <MemberForm
          onSave={handleSave}
          onCancel={() => setIsFormVisible(false)}
          member={editingMember}
        />
      )}

      <MemberTable
        members={members}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Membros;