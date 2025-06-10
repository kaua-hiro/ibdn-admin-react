import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const MemberTable = ({ members, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Inscrição</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{new Date(member.joinDate).toLocaleDateString()}</td>
              <td>
                <span className={`status status-${member.status.toLowerCase()}`}>
                  {member.status}
                </span>
              </td>
              <td className="actions">
                <button onClick={() => onEdit(member)} className="icon-btn">
                  <FiEdit />
                </button>
                <button onClick={() => onDelete(member.id)} className="icon-btn icon-btn-danger">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;