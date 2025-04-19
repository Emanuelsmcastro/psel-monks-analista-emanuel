# 💻 Documentação do Frontend

Este documento detalha a estrutura, lógica e consumo de dados do frontend da landing page, desenvolvido com **React + Vite + TailwindCSS + TypeScript**.

---

## 🚀 Estrutura Geral

O frontend está localizado na pasta:

```
/frontend
```

Principais arquivos e pastas:

```
├── public/            # Arquivos estáticos (imagens, fontes)
├── src/               # Código-fonte principal
│   ├── components/    # Componentes modulares da landing page
│   ├── services/      # Serviços de integração com a API WordPress
│   ├── types/         # Tipagens globais TypeScript
│   └── App.tsx        # Composição das seções da página
```

---

## 🧩 Composição da Página

A renderização da página principal acontece no `App.tsx`, onde os componentes são organizados em ordem:

```tsx
<HeroLPSection />
<Products />
<SimpleGallery />
<AppSection />
<CategoriesSection />
<CardsSection />
<ContactSection />
<FooterSection />
```

Cada componente consome um Custom Post Type específico da API REST do WordPress, através de `fetch*` services.

---

## 🌐 Consumo de API

Os dados são carregados dinamicamente via `fetch` com `credentials: 'include'` para manter a sessão (importante para o formulário). Os serviços estão definidos em:

```ts
/src/services/wordpress.ts;
```

Endpoints consumidos:

| Componente        | Endpoint                                          |
| ----------------- | ------------------------------------------------- |
| HeroLPSection     | `/hero-lp-section?_embed`                         |
| Products          | `/products-section?_embed`                        |
| SimpleGallery     | `/simple-gallery?_embed`                          |
| CategoriesSection | `/categories-section?_embed`                      |
| CardsSection      | `/cards-section?_embed`                           |
| ContactSection    | `/psel/v1/contact`, `/psel/v1/security-challenge` |

---

## ✉️ Validação de Formulário (ContactSection)

A seção de contato possui validação completa com feedback visual via **React Toastify**. O desafio de segurança é validado tanto no frontend quanto no backend:

- Campos obrigatórios: nome, email, mensagem, resultado da soma
- Validações específicas:
  - Email válido (regex)
  - Resultado da soma correto (a + b do backend)
- Toast de erro por campo ao perder o foco com debounce de 1s

---

## 📦 Tipagens Globais

Local: `/src/types/globalTypes.ts`

```ts
export interface GenericSectionType {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded: {
    "wp:featuredmedia"?: [{ source_url: string; alt_text: string }];
  };
}

export interface ContactSecurityChallenge {
  a: number;
  b: number;
}
```

---

## 🎨 Estilo e UI

- TailwindCSS é usado para toda a estilização
- Cores principais definidas como CSS variables (`--color-secundary`, `--bg-primary`)
- Design responsivo com `flex`, `grid`, breakpoints e `gap`
- Skeletons com `animate-pulse` para UX fluido em carregamentos

---

## ✅ Checklist de Funcionamento

- [x] Todas as seções renderizam dinamicamente os dados do backend
- [x] Skeletons e estados de loading estão implementados
- [x] Validações do formulário funcionam corretamente
- [x] Toasts exibem mensagens amigáveis em caso de erro ou sucesso
- [x] Código da soma validado com sessão entre chamadas

---

## 📎 Considerações Finais

- A comunicação com o backend é segura, respeitando a origem definida via CORS
- A interface se adapta bem a diferentes tamanhos de tela
- O sistema de feedback e verificação fortalece a experiência do usuário

> Para dúvidas técnicas ou contribuições, consulte o repositório principal ou entre em contato.
