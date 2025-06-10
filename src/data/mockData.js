// Exporta a lista de membros para a página Membros.jsx
export const initialMembers = [
  { id: 1, name: 'João da Silva', email: 'joao.silva@email.com', status: 'Ativo', joinDate: '2023-01-15' },
  { id: 2, name: 'Maria Oliveira', email: 'maria.o@email.com', status: 'Ativo', joinDate: '2022-11-20' },
  { id: 3, name: 'Pedro Souza', email: 'pedro.souza@email.com', status: 'Inativo', joinDate: '2021-05-10' },
];

// Exporta a função que gera dados para a página Dashboard.jsx
export const generateDashboardData = (period) => {
  const periods = {
    '7d': { factor: 1, labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'] },
    '30d': { factor: 4, labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'] },
    '1y': { factor: 52, labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] }
  };

  const currentPeriod = periods[period];
  const { factor, labels } = currentPeriod;

  const newMembers = Math.floor(Math.random() * 20 * factor);
  const events = Math.floor(Math.random() * 5 * factor);
  const activeCells = 15 + Math.floor(Math.random() * 5);
  const offerings = Math.floor(Math.random() * 1000 * factor);

  const chartData = labels.map(label => ({
    name: label,
    "Novos Membros": Math.floor(Math.random() * (newMembers / labels.length) * 1.5),
    "Visitantes": Math.floor(Math.random() * (newMembers / labels.length) * 2),
  }));

  return {
    stats: {
      newMembers: { value: newMembers, change: Math.random() * 10 - 4 },
      events: { value: events, change: Math.random() * 5 - 2 },
      activeCells: { value: activeCells, change: Math.random() - 0.5 },
      offerings: { value: `R$ ${offerings.toLocaleString('pt-BR')}`, change: Math.random() * 15 - 5 },
    },
    chartData
  };
};