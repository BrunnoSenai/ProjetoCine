# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## CAPITULO 0 - INSTALAÇÃO DO GIT NO COMPUTADOR
### verificar se o Git Esta Instalado

```
git --version // Verificar se o GIT esta instalado
```

### Instalação o Git

<p align="justify">
    Instalar GIT(https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
</p>

<p align="center">
    <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git" target="_blank">
        <img src="content/images/Git.png" width="400">
    </a>
</p>

## CAPITULO 1 - CRIAÇÃO DE DIRETORIOS DE PASTAS

<p align="justify">
    Entre na pasta Documentos e crie uma pasta chamada Workspace.
    Dentro da pasta Workspace crie uma pasta para por todos os seus projetos.
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

cd Documents - Serve para entrar na pasta Documentos

mkdir Workspace - Criar Pasta

cd Workspace - Serve para entrar na pasta Workspace
```
<p align="center">
    <a>
    <img src="content/images/Pastas.png" width="400">
    </a>
</p>

## CAPITULO 2 - ENTRANDO NO GITHUB

<p align="justify">
    No navegador, entre na sua conta do GitHub ou, se não tiver, crie uma.
    Crie um repositorio ou, se já tiver um, clone o seu projeto.
    No repositório, vá na opção '< > Code' e copie o link HTTPS.
</p>

<p align="center">
    <a>
    <img src="content/images/Print 1.png" width="800">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

git clone link do projeto - Serve para trazer seu projeto do GitHub.
```

## CAPITULO 3 - CONFIGURANDO SUA CONTA

<p align="justify">
    Volte para o diretorio original, usando o comando 'cd ..'.
    Configure sua conta usando os seguintes comandos abaixo.
    ```
    git config --global user.name "Seu Nome de Usuário"
    git config --global user.email Seu email do GitHub
    ```
    Se não acontecer nada, significa que deu tudo certo
</p>

<p align="center">
    <a>
    <img src="content/images/Print 3.png" width="800">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

cd .. Serve para voltar um diretório
git config --global user.name "Seu Nome de Usuário" - Conecta o seu nome de usuário do GitHub.
git config --global user.email Seu email do GitHub - Conecta o seu email do GitHub.
```

## CAPITULO 4 - CRIANDO A CHAVE E COLOCANDO NO GITHUB

<p align="justify">
    Após configurar sua conta no terminal, crie sua chave SSH com o comando 'ssh-keygen'.
    Logo em seguida, ira pedir uma senha, crie uma e depois repita a senha criada.
</p>

<p align="center">
    <a>
    <img src="content/images/Print 4.png" width="800">
    </a>
</p>

<p align="justify">
    Com a chave SSH criada, navegue até a pasta ssh utilizando o comando 'cd .ssh'.
    Utilize o comando 'ls' para verificar se a chave esta na pasta ssh.
    Use o comando 'cat .\id_ed25519.pub' para ler a chave.
</p>

<p align="center">
    <a>
    <img src="content/images/Chave SSH.png" width="800">
    </a>
</p>

<p align="justify">
    Copie a chave SSH e entre na sua conta do GitHub, clique no icone do seu perfil e vá para settings.
</p>

<p align="center">
    <a>
    <img src="/content/images/Print 8.png" width="800">
    </a>
</p>

<p align="justify">
    Acesse a parte SSH and GPC keys.
</p>

<p align="center">
    <a>
    <img src="/content/images/Print 9.png" width="800">
    </a>
</p>

<p align="justify">
    Vá em New SSH key.
</p>

<p align="center">
    <a>
    <img src="/content/images/Print 10.png" width="800">
    </a>
</p>

<p align="justify">
    Cole sua chave, adicione um titulo e salve.
</p>

<p align="center">
    <a>
    <img src="/content/images/Print 11.png" width="800">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

ssh-keygen - Cria uma chave ssh
cd .ssh - Acessa a pasta ssh
ls - para ver se a chave esta no diretório
cat .\id_ed25519.pub - Serve para ler a chave
```

## CAPITULO 5 - VERIFICAÇÃO DO PROJETO E VSCODE

<p align="justify">
    Após criar sua chave ssh e coloca-lá no GitHub, acesse seu projeto no terminal usando o comando 'cd', e use o 'ls' para verificar se esta tudo lá.
    utilize o comando 'cat .\config' para ler a pasta config para verificar.
    Acesse o Visual Code Studio (Caso não tenha instalado, acesse o site oficial do VSCode e instale. link: https://code.visualstudio.com/) no terminal utilizando o comando 'code .'.
</p>

<p align="center">
    <a>
    <img src="/content/images/VSCode.png" width="800">
    </a>
</p>

<p align="justify">
    Dentro do VSCode, baixe as extensões GitHub Copilot e GitHub Pull Request
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

cd - Navegar entre pastas.
ls - Lista todos os arquivos que estão na pasta.
cat .\config - Lê as configurações.
code . - Acessa o seu projeto no VSCode direto do terminal.
```

## CAPITULO 6 - ENVIANDO SEUS ARQUIVOS PARA O GITHUB

<p align="justify">
    No VSCode, abra o terminal.
</p>

<p align="center">
    <a>
    <img src="/content/images/Terminal VSCode.png" width="800">
    </a>
</p>

<p align="justify">
    No terminal, utilize o comando 'git status' para verificar as alterações feitas.
    Depois, utilize o comando 'git add .' para adicionar os arquivos para o GitHub. Caso tenha cometido algum erro, utilize o comando 'git reset'.
</p>

<p align="center">
    <a>
    <img src="/content/images/VSCode Terminal 01.png" width="800">
    </a>
</p>

<p align="justify">
    Utilize o comando 'git commit -m "mensagem do desenvolvedor"' para adicionar uma mensagem ao envio.
    Para finalizar, utilize o comando 'git push -u origin sua branch atual' para enviar seus arquivos pro GitHub, vai pedir para autenticar a sua conta.
    Vai para o GitHub e verifica se seus codigos foram enviados.
</p>

<p align="center">
    <a>
    <img src="/content/images/VSCode Terminal 02.png" width="800">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

git status - Verifica as alterações 
git add . - Adiciona os arquivos no GitHub
git reset - Caso tenha cometido algum erro
git commit -m "mensagem do desenvolvedor" - Adiciona uma mensagem
git push -u origin master - Envia os arquivos pro GitHub
```