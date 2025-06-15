#  Script PowerShell de Setup do GitHub - Harmonia no Lar
Write-Host " ===== SETUP GITHUB - HARMONIA NO LAR =====" -ForegroundColor Green
Write-Host ""

# Verificar se estamos no diretório correto
if (!(Test-Path "package.json")) {
    Write-Host " Erro: Execute este script no diretório do projeto" -ForegroundColor Red
    exit 1
}

Write-Host " Diretório do projeto encontrado" -ForegroundColor Green

# Verificar se Git está instalado
try {
    $gitVersion = git --version
    Write-Host " Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host " Git não está instalado. Instale o Git primeiro:" -ForegroundColor Red
    Write-Host "   Download: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Configurar Git
Write-Host ""
Write-Host " Configurando Git..." -ForegroundColor Cyan

git config --global user.name "DELSOBRINHO"
git config --global user.email "delsobrinho@harmonia.com"

$userName = git config --global user.name
$userEmail = git config --global user.email
Write-Host " Git configurado:" -ForegroundColor Green
Write-Host "   Nome: $userName" -ForegroundColor White
Write-Host "   Email: $userEmail" -ForegroundColor White

# Inicializar repositório se necessário
if (!(Test-Path ".git")) {
    Write-Host ""
    Write-Host " Inicializando repositório Git..." -ForegroundColor Cyan
    git init
    Write-Host " Repositório Git inicializado" -ForegroundColor Green
} else {
    Write-Host " Repositório Git já existe" -ForegroundColor Green
}

# Configurar remote origin
Write-Host ""
Write-Host " Configurando repositório remoto..." -ForegroundColor Cyan

try { git remote remove origin 2>$null } catch { }
git remote add origin https://github.com/DELSOBRINHO/Harmonia-no-Lar.git

$originUrl = git remote get-url origin
Write-Host " Remote origin configurado: $originUrl" -ForegroundColor Green

# Adicionar e fazer commit
Write-Host ""
Write-Host " Adicionando arquivos..." -ForegroundColor Cyan
git add .

Write-Host " Fazendo commit..." -ForegroundColor Yellow
git commit -m "feat: Setup inicial do projeto Harmonia no Lar - Aplicativo baseado em princípios bíblicos"

# Configurar branch principal
Write-Host ""
Write-Host " Configurando branch principal..." -ForegroundColor Cyan
git branch -M main

# Fazer push
Write-Host ""
Write-Host " Enviando código para GitHub..." -ForegroundColor Cyan

try {
    git push -u origin main
    Write-Host " Código enviado com sucesso para GitHub!" -ForegroundColor Green
} catch {
    Write-Host "  Tentando push forçado..." -ForegroundColor Yellow
    try {
        git push -u origin main --force
        Write-Host " Push forçado realizado com sucesso!" -ForegroundColor Green
    } catch {
        Write-Host " Erro no push. Verifique suas credenciais do GitHub." -ForegroundColor Red
        Write-Host " Configure um Personal Access Token em:" -ForegroundColor Yellow
        Write-Host "   GitHub > Settings > Developer settings > Personal access tokens" -ForegroundColor White
        exit 1
    }
}

Write-Host ""
Write-Host " ===== SETUP GITHUB CONCLUÍDO COM SUCESSO! =====" -ForegroundColor Green
Write-Host ""
Write-Host " Repositório: https://github.com/DELSOBRINHO/Harmonia-no-Lar" -ForegroundColor Green
Write-Host " Código enviado para GitHub" -ForegroundColor Green
Write-Host " Pronto para próximo passo: Supabase" -ForegroundColor Green
