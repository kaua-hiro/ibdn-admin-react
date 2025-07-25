// src/data/mockData.js

// Dados para a Tabela de Usuários (usado pela página Membros.jsx)
export const initialMembers = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@example.com', status: 'Ativo', joinDate: '2024-01-15', role: 'Desenvolvedora Front-end' },
  { id: 2, name: 'Bruno Costa', email: 'bruno.costa@example.com', status: 'Ativo', joinDate: '2023-11-20', role: 'Designer UX/UI' },
  { id: 3, name: 'Carlos Lima', email: 'carlos.lima@example.com', status: 'Inativo', joinDate: '2022-05-10', role: 'Gerente de Projetos' },
  { id: 4, name: 'Daniela Souza', email: 'daniela.souza@example.com', status: 'Ativo', joinDate: '2024-03-01', role: 'Engenheira de Dados' },
];

// Função para gerar dados dinâmicos para o dashboard (usado pela página Dashboard.jsx)
export const generateDashboardData = (period) => {
  const periods = {
    '7d': { factor: 1, labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'] },
    '30d': { factor: 4, labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'] },
    '1y': { factor: 52, labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] }
  };

  const currentPeriod = periods[period];
  if (!currentPeriod) return { stats: {}, chartData: [] }; // Segurança extra

  const { factor, labels } = currentPeriod;

  const newUsers = Math.floor(Math.random() * 20 * factor);
  const tasksCompleted = Math.floor(Math.random() * 50 * factor);
  const activeProjects = 15 + Math.floor(Math.random() * 5);
  const revenue = Math.floor(Math.random() * 5000 * factor);

  const chartData = labels.map(label => ({
    name: label,
    "Novos Usuários": Math.floor(Math.random() * (newUsers / labels.length) * 1.5),
    "Tarefas Concluídas": Math.floor(Math.random() * (tasksCompleted / labels.length) * 2),
  }));

  return {
    stats: {
      newUsers: { value: newUsers, change: Math.random() * 10 - 4 },
      tasksCompleted: { value: tasksCompleted, change: Math.random() * 15 - 2 },
      activeProjects: { value: activeProjects, change: Math.random() - 0.5 },
      revenue: { value: `R$ ${revenue.toLocaleString('pt-BR')}`, change: Math.random() * 20 - 5 },
    },
    chartData
  };
};