 Crypto Dashboard
Um dashboard interativo desenvolvido com Next.js, TypeScript e Tailwind CSS, que exibe dados atualizados de criptomoedas usando a API do CoinGecko.

Funcionalidades
  Lista de criptomoedas em tempo real
  Preços, variação e gráficos históricos
  Favoritos: salve suas criptomoedas preferidas
  Detalhes individuais de cada moeda
  Design responsivo e moderno com Tailwind CSS

Como Executar
  Clonar o Repositório
    git clone https://github.com/seu-usuario/crypto-dashboard.git
    cd crypto-dashboard

Instalar Dependências
  npm install
  # ou
  yarn install

Rodar o Servidor de Desenvolvimento
  npm run dev
  # ou
  yarn dev
  O projeto estará disponível em http://localhost:3000 🌍

APIs Utilizadas
  Os dados das criptomoedas são obtidos da API gratuita do CoinGecko.

Tecnologias
  Next.js (Framework React)
  TypeScript (Tipagem estática)
  Tailwind CSS (Estilização rápida e responsiva)
  Axios (Requisições HTTP)

📂 Estrutura do Projeto
📦 crypto-dashboard
 ┣ 📂 components         # Componentes reutilizáveis (Tabela, Navbar, etc.)
 ┣ 📂 context            # Context API para estado global de favoritos
 ┣ 📂 pages              # Páginas do projeto (Home, Favoritos, Detalhes)
 ┣ 📂 public             # Imagens e assets públicos
 ┣ 📂 styles             # Arquivos de estilização (Tailwind, CSS Global)
 ┣ 📜 .gitignore         # Arquivos ignorados no Git
 ┣ 📜 package.json       # Dependências do projeto
 ┣ 📜 tailwind.config.js # Configuração do Tailwind CSS
 ┣ 📜 tsconfig.json      # Configuração do TypeScript
 ┗ 📜 README.md          # Documentação do projeto
 
Como Funciona
  A página inicial exibe uma tabela com criptomoedas, mostrando preço e variação.
  O usuário pode clicar no nome da moeda para ver mais detalhes.
  Ao clicar na estrela (⭐), a moeda será adicionada aos favoritos.
  A página Favoritos exibe todas as moedas marcadas pelo usuário.
  O projeto atualiza automaticamente os preços ao recarregar a página.


Contato: joseivanabrantes@gmail.com
