# Arquitetura do Aplicativo - Harmonia no Lar

## Visão Geral

O Harmonia no Lar é uma aplicação web baseada em React que utiliza o Supabase como backend. A aplicação segue uma arquitetura de componentes com gerenciamento de estado local e global.

## Stack Tecnológica

- **Frontend**: React + TypeScript + Vite
- **Estilização**: Tailwind CSS
- **Backend/BaaS**: Supabase
- **Hospedagem**: Vercel
- **Ícones**: Lucide React
- **Roteamento**: React Router
- **Datas**: date-fns

## Estrutura de Diretórios

```
harmonia-no-lar/
├── docs/                  # Documentação
├── public/                # Arquivos estáticos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── layout/        # Componentes de layout
│   │   ├── ui/            # Componentes de UI
│   │   └── features/      # Componentes específicos de funcionalidades
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Páginas da aplicação
│   ├── services/          # Serviços (API, Supabase)
│   ├── types/             # Definições de tipos TypeScript
│   ├── utils/             # Funções utilitárias
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   └── supabaseClient.ts  # Cliente Supabase
├── .env.example           # Exemplo de variáveis de ambiente
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do Tailwind
├── tsconfig.json          # Configuração do TypeScript
└── vite.config.ts         # Configuração do Vite
```

## Modelo de Dados

### Usuários
- id: string
- email: string
- role: 'husband' | 'wife'
- profile_id: string (referência ao perfil)

### Perfis
- id: string
- user_id: string (referência ao usuário)
- name: string
- spouse_id: string (referência ao cônjuge)
- created_at: timestamp

### Direitos e Deveres
- id: string
- title: string
- description: string
- category: 'husband' | 'wife' | 'both'
- type: 'right' | 'duty'
- weight: number
- biblical_reference: string
- ellen_white_reference: string
- point_value: number

### Checklist
- id: string
- right_duty_id: string (referência ao direito/dever)
- user_id: string (referência ao usuário)
- date: date
- completed: boolean
- notes: string

### Avaliações
- id: string
- couple_id: string (referência ao casal)
- date: date
- husband_score: number
- wife_score: number
- husband_amount: number
- wife_amount: number
- notes: string

### Danos Morais
- id: string
- evaluation_id: string (referência à avaliação)
- right_duty_id: string (referência ao direito/dever)
- description: string
- compensation_action: string
- completed: boolean
- weight: number

### Orçamento
- id: string
- couple_id: string (referência ao casal)
- description: string
- amount: number
- type: 'income' | 'expense'
- category: string
- date: date
- recurring: boolean

### Meditações
- id: string
- title: string
- content: string
- biblical_reference: string
- ellen_white_reference: string
- date: date
- category: string

### Dicas
- id: string
- title: string
- description: string
- biblical_reference: string
- ellen_white_reference: string
- category: string

### Surpresas para o Cônjuge
- id: string
- title: string
- description: string
- category: 'special_date' | 'intimacy' | 'general'
- difficulty: 'easy' | 'medium' | 'hard'
- cost: 'free' | 'low' | 'medium' | 'high'
- biblical_reference: string
- ellen_white_reference: string

### Datas Especiais
- id: string
- couple_id: string (referência ao casal)
- title: string
- date: date
- recurring: boolean
- notification_days_before: number[]
- description: string

## Fluxo de Autenticação

1. Usuário acessa a aplicação
2. Se não autenticado, é redirecionado para a página de login
3. Após login bem-sucedido, o token é armazenado
4. Requisições subsequentes incluem o token de autenticação
5. Rotas protegidas verificam a autenticação antes de renderizar

## Integração com Supabase

- Autenticação: Supabase Auth
- Banco de Dados: Supabase PostgreSQL
- Armazenamento: Supabase Storage (para imagens e arquivos)
- Funções Edge: Para lógica de negócios complexa

## Estratégia de Deploy

- CI/CD via GitHub Actions
- Deploy automático na Vercel a cada push na branch main
- Variáveis de ambiente configuradas no painel da Vercel