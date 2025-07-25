import React, { useState, useEffect } from 'react';
import { FiUsers, FiCalendar, FiHeart, FiDollarSign } from 'react-icons/fi';
import { generateDashboardData } from '../data/mockData';
import StatsCard from '../components/dashboard/StatsCard';
import MemberGrowthChart from '../components/dashboard/MemberGrowthChart';
import '../assets/styles/Dashboard.css';

const Dashboard = () => {
  // Estado para controlar o período selecionado (7 dias, 30 dias, 1 ano)
  const [period, setPeriod] = useState('7d');
  
  // Estado para guardar os dados do dashboard (stats e gráfico)
  const [dashboardData, setDashboardData] = useState({ stats: {}, chartData: [] });

  // useEffect: Roda sempre que a variável 'period' mudar.
  // Ele busca os novos dados e atualiza o estado.
  useEffect(() => {
    const data = generateDashboardData(period);
    setDashboardData(data);
  }, [period]); // A mágica acontece aqui: o array de dependência

  // Extrai os dados para facilitar o uso
  const { stats, chartData } = dashboardData;

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="page-title">Dashboard</h1>
        <div className="period-filter">
          <button onClick={() => setPeriod('7d')} className={period === '7d' ? 'active' : ''}>Últimos 7 dias</button>
          <button onClick={() => setPeriod('30d')} className={period === '30d' ? 'active' : ''}>Últimos 30 dias</button>
          <button onClick={() => setPeriod('1y')} className={period === '1y' ? 'active' : ''}>Último Ano</button>
        </div>
      </div>

      <div className="stats-grid">
        <StatsCard 
          icon={<FiUsers />}
        title="Novos Usuários"
        value={stats.newUsers?.value}
        change={stats.newUsers?.change}
        />
        <StatsCard 
         icon={<FiCalendar />}
         title="Tarefas Concluídas"
        value={stats.tasksCompleted?.value}
        change={stats.tasksCompleted?.change}
        />
        <StatsCard 
          icon={<FiHeart />}
        title="Projetos Ativos"
        value={stats.activeProjects?.value}
        change={stats.activeProjects?.change}
        />
        <StatsCard 
          icon={<FiDollarSign />}
        title="Receita (Período)"
        value={stats.revenue?.value}
        change={stats.revenue?.change}
        />
      </div>

      <div className="chart-container">
        <h3>Crescimento de Membros e Visitantes</h3>
        <MemberGrowthChart data={chartData} />
      </div>

    </div>
  );
};

export default Dashboard;