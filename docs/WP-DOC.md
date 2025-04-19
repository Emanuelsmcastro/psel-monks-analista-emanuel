# 📚 Documentação do Projeto

Este documento complementa o README principal, detalhando as configurações e o funcionamento do backend WordPress utilizado como CMS headless.

---

## ⚙️ WordPress como Backend

### 🧱 Tema Customizado

O projeto utiliza um tema customizado chamado `psel-monks-theme`, localizado em:

```
/backend/wordpress/wp-content/themes/psel-monks-theme
```

Esse tema é responsável por registrar os Custom Post Types, os endpoints personalizados da API e configurações auxiliares como CORS.

### 🔧 Funcionalidades do Tema

- Registro de menus, suporte a thumbnails e título automático
- Configuração de CORS via página no admin (`Configurações > CORS Settings`)
- Registro de múltiplos Custom Post Types para renderização dinâmica no frontend
- Criação de um endpoint `POST /psel/v1/contact` para submissão de formulários
- Endpoint `GET /psel/v1/security-challenge` para gerar o desafio de verificação com soma
- Endpoint customizado `GET /wp/v2/media/{id}` para obter metadados públicos de imagens

---

## 🗂️ Custom Post Types

O tema define os seguintes CPTs (todos com `show_in_rest` habilitado):

| Post Type ID         | Descrição                       |
| -------------------- | ------------------------------- |
| `hero-lp-section`    | Seção Hero da landing page      |
| `products-section`   | Blocos de produtos e vantagens  |
| `simple-gallery`     | Galeria de imagens simples      |
| `categories-section` | Lista de categorias             |
| `cards-section`      | Cards com ícones e títulos      |
| `contact_submission` | Armazena os dados do formulário |

Esses dados são utilizados para compor as seções do frontend e são consumidos diretamente da API REST do WordPress (`/wp-json/wp/v2/{post_type}`).

---

## 📨 Formulário de Contato

### Endpoint

`POST /wp-json/psel/v1/contact`

### Campos esperados

- `name` (string)
- `email` (string)
- `message` (string)
- `security_result` (número inteiro, resultado do desafio de soma)

### Validações

- Todos os campos são obrigatórios
- A soma deve bater com o valor gerado e salvo na sessão (`security_sum`)

### Segurança

- O desafio de verificação é obtido via:
  - `GET /wp-json/psel/v1/security-challenge`
- O backend inicia sessão e armazena o valor correto da soma para comparação posterior

---

## 🌐 CORS Dinâmico

O projeto implementa uma configuração de origem dinâmica para o CORS:

- Adiciona uma página em `Configurações > CORS Settings`
- O valor salvo é utilizado para definir o cabeçalho `Access-Control-Allow-Origin`

Essa abordagem permite configurar facilmente o domínio de origem permitido no painel do WordPress sem alterar o código fonte.

---

## 🧪 Teste dos Endpoints

Você pode testar os endpoints com ferramentas como Postman, Insomnia ou via `curl`:

### Obter desafio de verificação

```bash
curl -c cookie.txt http://localhost:8000/wp-json/psel/v1/security-challenge
```

### Enviar formulário de contato

```bash
curl -b cookie.txt -X POST http://localhost:8000/wp-json/psel/v1/contact \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Emanuel",
    "email": "emanuel@exemplo.com",
    "message": "Olá!",
    "security_result": 1234
  }'
```

> ⚠️ Atenção: o uso de `-c` e `-b` garante a persistência da sessão entre os requests.

---

## 📎 Anexos / Referências

- `/functions.php` → Registro de menus, suporte, filtros e endpoints
- `/inc/form-endpoint.php` → Endpoint de envio de formulário
- `/inc/custom-post-type.php` → Registro do formulário + desafio de soma
- `/inc/homepage-section-cpt.php` → Registro dos CPTs visuais da landing page

---

## ✅ Checklist de Verificação (Admin WordPress)

- [x] Tema `psel-monks-theme` está ativado em **Aparência > Temas**
- [x] Links permanentes configurados como "Nome do post" em **Configurações > Links Permanentes**
- [x] Página **CORS Settings** acessível em **Configurações** com a origem correta (`http://localhost:4173`)
- [x] CPTs aparecem no painel lateral do admin (`Hero-LP`, `Cards Section`, `Products`, etc.)
- [x] Dados das seções da landing page criados com conteúdo
- [x] Teste de envio de formulário retorna status `200 OK`
- [x] Submissões do formulário aparecem no CPT `Contact Submissions`

## 📄 Documentação Extra

Para instruções mais detalhadas sobre o preenchimento das seções:

## 👉 [WORDPRESS SEÇÕES](./WP-SECTIONS.md)
