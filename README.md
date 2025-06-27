# Estudos-Angular

Este repositório contém um projeto de estudo em Angular que fiz durante o programa Start by Capgemini Trilha Java - Fullstack, abordando fundamentos e boas práticas.

## Estrutura

Estudos-Angular/
├── fundamentos-angular/ ← projeto Angular (código-fonte)
├── .gitignore ← regras de exclusão do Git
└── README.md ← este arquivo de explicação

## Explicação

- **`fundamentos-angular/`** contém o projeto Angular completo.
- **`node_modules/`** não está incluído no repositório, pois será instalado localmente.
- **`.gitignore`** garante que arquivos temporários e dependências não sejam enviados ao GitHub.

## Sobre o node_modules

A pasta `node_modules` não está incluída no repositório, pois deve ser gerada localmente ao instalar as dependências.

## 🚀 Executando o projeto localmente

Siga este passo a passo **para evitar erros**:

1. **Clone o repositório:**

```bash
git clone https://github.com/seuusuario/Estudos-Angular.git

```

2. **Acesse a pasta do projeto Angular:**

```bash
cd Estudos-Angular/fundamentos-angular

```

3. **Instale Dependências:**

É fundamental rodar este comando para gerar a pasta node_modules a partir do package.json:

```bash
npm install

```
Se der erro de permissão ou rede, tente novamente com:

```bash
npm cache clean --force
npm install

```

4. **Suba o servidor de desenvolvimento:**

```bash
ng serve

```
Por padrão, a aplicação ficará disponível em http://localhost:4200.

5. **OBSERVAÇÕES:**

🛠️ Requisitos
* Node.js versão 16 ou superior

* Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli

```

✅ Testando se tudo funciona:

* Após executar ng serve, abra o navegador e verifique se a aplicação inicial do Angular carrega sem erros.

* Caso apareça mensagem de dependências faltando, confirme se rodou npm install dentro da pasta fundamentos-angular.

📚 Objetivo do projeto:

* Este projeto serve como base de estudos de Angular para desenvolvedores que desejam aprender a estruturar um projeto real, usando versionamento correto no Git e evitando envio desnecessário de dependências (node_modules) ao repositório.

📄 Licença:

* Uso livre para fins educacionais. Fique à vontade para contribuir ou propor melhorias!