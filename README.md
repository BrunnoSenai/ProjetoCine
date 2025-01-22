# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## CAPITULO 1 - Configuração do git no computador
### Instalação do GIT
<p aling="center">
    <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git"target="_blank">Instalar o Git</a>
</P>
´
<p>git --version</p>
´
### Comandos administrativos do GIT
´
<p>git status</p>
<p>git add index.html or git add .</p>
<p>git commit -m "Mensagem do desenvolvedor" ex: "update file README"</p>
<p>git push -u origin master or main</p>
´

## CAPITULO 2 -  Criando repositorio no git
### Criando a chave SSH
´
git config --global user.name "Nome de Usuario"
git config --global user.email "email@usuario.com"
ssh-keygen
git init
git remote add origin https://github.com/SEU-USUARIO/nome-do-repositorio.git
git branch -M main
git push -u origin main
´