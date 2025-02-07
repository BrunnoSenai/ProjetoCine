# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## CAPITULO 0 - INSTALAÇÃO DO GIT NO COMPUTADOR
### Verificar se o Git Esta Instalado

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

<p align="justify">
    Acesse Git Downloads.
    Baixe o instalador para Windows.
    Execute o instalador e siga as instruções de instalação. Importante: Durante a instalação, marque a opção para adicionar o Git ao PATH.
    Depois de finalizar a instalação, reinicie o terminal e execute o comando 'git --version' novamente para verificar se o Git foi instalado corretamente.
</p>

## CAPITULO 1 - CRIAÇÃO DE DIRETORIOS DE PASTAS

<p align="justify">
    No terminal do computador, entre na pasta Documentos utilizando o comando 'cd Documents'.
    Crie uma pasta chamada Workspace usando o comando 'mkdir Workspace'.
    Dentro da pasta Workspace crie uma pasta para por todos os seus projetos usando o comando 'mkdir'.
</p>

<p align="center">
    <a>
    <img src="/content/images/Navegação e criação de pastas.png" width="400">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

cd Documents
mkdir Workspace
cd Workspace
```

## CAPITULO 2 - ENTRANDO NO GITHUB

<p align="justify">
    No navegador, acesse o site do GitHub e entre na sua conta, se não tiver, crie uma.
    Link do GitHub (https://github.com/).
</p>

<p align="center">
    <a>
    <img src="/content/images/GitHub.png" width="800">
    </a>
</p>

<p align="justify">
    Clique em Sign up no canto superior direito.
</p>

<p align="justify">
    Preencha as informações solicitadas:
    Username: Escolha um nome de usuário único.
    Email: Insira seu e-mail (pode ser o mesmo que você usa para configurar o Git).
    Password: Crie uma senha forte.
</p>

<p align="justify">
    Depois, confirme o e-mail no link que será enviado para sua caixa de entrada.
</p>

<p align="justify">
    Complete a configuração básica, incluindo algumas verificações de segurança.
</p>

<p align="justify">
    Agora, você tem uma conta no GitHub! Vamos para a próxima etapa.
</p>

<p align="justify">
    Crie um repositorio.
</p>

<p align="center">
    <a>
    <img src="/content/images/Repositorio 1.png" width="800">
    </a>
</p>

<p align="justify">
    Escolha um nome, marque se quer que ele fique privado ou não, depois salve o repositorio.
</p>

<p align="center">
    <a>
    <img src="/content/images/Repositorio 2.png" width="800">
    </a>
</p>

<p align="justify">
    Se já tiver um repositorio, clone o seu projeto usando o comando 'git clone link do projeto' no terminal. Para pegar o link, vá no repositório, acesse a opção '< > Code' e copie o link HTTPS.
</p>

<p align="center">
    <a>
    <img src="/content/images/Print 1.png" width="800">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL
git clone link do projeto
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

cd ..
git config --global user.name "Seu Nome de Usuário"
git config --global user.email Seu email do GitHub
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

ssh-keygen
cd .ssh
ls
cat .\id_ed25519.pub
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

cd
ls
cat .\config
code .
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

git status
git add .
git reset
git commit -m "mensagem do desenvolvedor"
git push -u origin "Escolha sua branch"
git pull origin "Escolha sua branch"
```

## CAPITULO 7 - CRIANDO UMA BRANCH

<p align="justify">
    Após enviar ou puxar todos os arquivos pro GitHub, o proximo passo e criar uma branch para poder trabalhar os seus projetos.
    Para iniciar, use o comando 'git branch' para listar todas as branchs.
</p>

<p align="center">
    <a>
    <img src="/content/images/Branch 1.png" width="800">
    </a>
</p>

<p align="justify">
    Depois use o comando 'git branch develop' para criar uma branch develop. 
</p>

<p align="center">
    <a>
    <img src="/content/images/Branch 2.png" width="800">
    </a>
</p>

<p align="justify">
    Após criar a branch develop, utilize o comando 'git checkout develop' para trocar para a branch criada. Utilize o comando 'git branch' para verificar se trocou a branch.
</p>

<p align="center">
    <a>
    <img src="/content/images/Branch 3.png" width="800">
    </a>
</p>

<p align="justify">
    Depois de criar uma branch, utilize o comando 'git merge "escolha a branch" 'para trazer todo o conteudo de uma branch escolhida para a branch criada.
</p>

<p align="center">
    <a>
    <img src="/content/images/Branch 4.png" width="800">
    </a>
</p>

<p align="justify">
    Caso tenha criado uma branch errada, utilize o comando 'git branch -d "escolha a branch" ' para deletar a branch escolhida.
</p>

<p align="center">
    <a>
    <img src="/content/images/Branch 5.png" width="800">
    </a>
</p>

### Comandos passo a passo desse capitulo

```
NO TERMINAL

git branch
git branch develop
git checkout develop
git merge escolha a branch
git branch -d escolha a branch
```

## RESUMO DOS COMANDOS UTILIZADOS NO MANUAL PASSO A PASSO.

```
git --version - Verifica se o GIT esta instalado.

cd Documents - Serve para entrar na pasta Documentos.

mkdir Workspace - Criar Pasta.

cd Workspace - Serve para entrar na pasta Workspace.

git clone link do projeto - Serve para trazer seu projeto do GitHub.

cd .. Serve para voltar um diretório.

git config --global user.name "Seu Nome de Usuário" - Conecta o seu nome de usuário do GitHub.

git config --global user.email Seu email do GitHub - Conecta o seu email do GitHub.

ssh-keygen - Cria uma chave ssh.

cd .ssh - Acessa a pasta ssh.

ls - Para ver se a chave esta no diretório.

cat .\id_ed25519.pub - Serve para ler a chave.

cd - Navegar entre pastas.

ls - Lista todos os arquivos que estão na pasta.

cat .\config - Lê as configurações.

code . - Acessa o seu projeto no VSCode direto do terminal.

git status - Verifica as alterações. 

git add . - Adiciona os arquivos no GitHub.

git reset - Caso tenha cometido algum erro.

git commit -m "mensagem do desenvolvedor" - Adiciona uma mensagem.

git push -u origin "Escolha sua branch" - Empurra os arquivos pro GitHub.

git pull origin "Escolha sua branch" - Puxa todos os arquivos do GitHub para a branch escolhida.

git branch - Listar todas as branchs.

git branch develop - Cria uma nova branch develop.

git checkout develop - Troca para a branch criada.

git merge escolha a branch - Transferir todos os arquivos de uma branch para outra.

git branch -d - Deleta a branch.
```