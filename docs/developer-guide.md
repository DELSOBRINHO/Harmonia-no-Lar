# Guia do Desenvolvedor - Harmonia no Lar

## Requisitos

- Node.js 18+ 
- npm 9+
- Conta no Supabase
- Conta na Vercel (para deploy)

## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:
   ```bash
   git clone https://github.com/DELSOBRINHO/Harmonia-no-Lar.git
   cd Harmonia-no-Lar
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura do Projeto

Consulte o arquivo `docs/architecture.md` para detalhes sobre a estrutura do projeto.

## Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (ex: `RightDutyCard.tsx`)
- **Hooks**: camelCase com prefixo "use" (ex: `useAuth.ts`)
- **Utilitários**: camelCase (ex: `formatDate.ts`)
- **Tipos/Interfaces**: PascalCase (ex: `interface User {}`)

### Estilização

- Utilize Tailwind CSS para estilização
- Para componentes complexos, considere criar classes personalizadas no arquivo `index.css`
- Siga a paleta de cores definida no `tailwind.config.js`

### Commits

Seguimos o padrão Conventional Commits:

- `feat:` para novas funcionalidades
- `fix:` para correções de bugs
- `docs:` para atualizações de documentação
- `style:` para mudanças que não afetam o código (formatação, etc)
- `refactor:` para refatorações de código
- `test:` para adição ou modificação de testes
- `chore:` para tarefas de manutenção

## Fluxo de Trabalho

1. Crie uma branch para sua feature/correção:
   ```bash
   git checkout -b feature/nome-da-feature
   ```

2. Faça suas alterações e commits seguindo as convenções

3. Envie para o repositório remoto:
   ```bash
   git push origin feature/nome-da-feature
   ```

4. Abra um Pull Request para a branch `main`

## Testes

Implementaremos testes usando Vitest e Testing Library:

```bash
# Executar testes
npm test

# Executar testes com cobertura
npm test -- --coverage
```

## Build e Deploy

### Build Local

```bash
npm run build
```

O resultado do build estará disponível na pasta `dist/`.

### Deploy na Vercel

O deploy é automatizado via GitHub Actions. Cada push na branch `main` dispara um novo deploy.

Para fazer deploy manual:

1. Instale a CLI da Vercel:
   ```bash
   npm install -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

## Supabase

### Configuração do Banco de Dados

1. Crie um novo projeto no Supabase
2. Configure as tabelas conforme o modelo de dados em `docs/architecture.md`
3. Configure as políticas de segurança (RLS) para proteger os dados

### Políticas de Segurança Recomendadas

- Usuários só podem ver e modificar seus próprios dados
- Cônjuges podem ver dados compartilhados
- Dados públicos (como meditações e dicas) são acessíveis a todos os usuários autenticados

## Recursos Adicionais

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Supabase](https://supabase.io/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação da Vercel](https://vercel.com/docs)