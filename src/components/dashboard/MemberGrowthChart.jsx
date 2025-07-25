import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MemberGrowthChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorMembros" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--primary-accent)" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="var(--primary-accent)" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorVisitantes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--secondary-accent)" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="var(--secondary-accent)" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="var(--secondary-text)" />
        <YAxis stroke="var(--secondary-text)" />
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
        <Tooltip contentStyle={{ backgroundColor: 'var(--secondary-bg)', border: '1px solid var(--border-color)', color: 'var(--primary-text)' }} />
        <Legend />
        {/* AQUI ESTÁ A CORREÇÃO: Usando as novas chaves de dados */}
        <Area type="monotone" dataKey="Novos Usuários" stroke="var(--primary-accent)" fillOpacity={1} fill="url(#colorMembros)" />
        <Area type="monotone" dataKey="Tarefas Concluídas" stroke="var(--secondary-accent)" fillOpacity={1} fill="url(#colorVisitantes)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MemberGrowthChart;