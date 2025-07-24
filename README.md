# Painel Administrativo IBDN (IBDN Admin Dashboard)

Um painel de administração moderno e reativo, construído com React, para gerenciar os dados internos da Igreja Batista do Novo Dia (IBDN). A interface é inspirada em designs profissionais como o Flowbite e oferece uma experiência de usuário limpa e eficiente.

---

## ✨ Funcionalidades Principais

- **Dashboard Dinâmico**: Apresenta cartões de estatísticas (Novos Membros, Eventos, etc.) e gráfico interativo com filtros por período (7 dias, 30 dias, 1 ano)
- **Gerenciamento de Membros (CRUD Completo)**: Sistema completo para Criar, Ler, Atualizar e Excluir membros da igreja com formulários e tabela de visualização
- **Página de Configurações Avançadas**: Layout em grid para alterar informações de perfil, senha e conectar contas de redes sociais
- **Sistema de Temas (Theming)**: Suporte completo a tema Claro e Escuro com transições suaves utilizando Variáveis CSS
- **Componentização Eficiente**: Arquitetura baseada em componentes React reutilizáveis como `StatsCard` e formulários modulares
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela

---

## 🛠️ Tecnologias Utilizadas

- **⚛️ React.js** - Biblioteca principal para construção da interface
- **🛣️ React Router DOM** - Gerenciamento de rotas da aplicação
- **🎨 CSS Puro** - Estilização com CSS Grid, Flexbox e Variáveis CSS
- **📊 Recharts** - Biblioteca para gráficos interativos
- **🎯 React Icons** - Conjunto completo de ícones
- **📦 Mock Data** - Dados simulados prontos para integração com API real

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/kaua-hiro/ibdn-admin-react
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd ibdn-admin-react
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador e acesse: `http://localhost:3000`

---

## 📂 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── StatsCard.js    # Cartão de estatísticas
│   └── ...             # Outros componentes
├── pages/              # Páginas da aplicação
│   ├── Dashboard.js    # Página principal do dashboard
│   ├── Members.js      # Gerenciamento de membros
│   └── Settings.js     # Página de configurações
├── data/               # Dados mockados
│   └── mockData.js     # Arquivo com dados simulados
├── styles/             # Arquivos de estilização
│   └── *.css          # Arquivos CSS organizados por componente
└── App.js             # Componente principal da aplicação
```

---

## 🎯 Próximos Passos

- [ ] Integração com API real
- [ ] Sistema de autenticação
- [ ] Testes unitários
- [ ] Deploy automático
- [ ] Notificações em tempo real

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Reportando Bugs

Encontrou um bug? Abra uma [issue](../../issues) descrevendo:
- Como reproduzir o problema
- Comportamento esperado vs comportamento atual
- Screenshots (se aplicável)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  <p>Feito com ❤️ </p>
  <p>
    <a href="#painel-administrativo-ibdn-ibdn-admin-dashboard">⬆️ Voltar ao topo</a>
  </p>
</div>
