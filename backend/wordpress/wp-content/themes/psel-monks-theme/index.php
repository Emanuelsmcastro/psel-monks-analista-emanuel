<?php
get_header();
?>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<main class="bg-white text-gray-800">
  <div class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-purple-700 mb-6">🎯 Case Técnico Monks</h1>

    <p class="text-lg text-gray-700 mb-8">
      Esta landing page foi desenvolvida como parte de um processo seletivo, utilizando React no frontend e WordPress como backend (CMS headless).
      Todo o conteúdo exibido aqui é carregado dinamicamente via API REST.
    </p>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">🚀 Tecnologias</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li><strong>Frontend:</strong> React + Vite + TailwindCSS + TypeScript</li>
        <li><strong>Backend:</strong> WordPress (tema customizado)</li>
        <li><strong>Infra:</strong> Docker + Docker Compose</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">📦 Funcionalidades</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li>Página 100% responsiva com base em mockup Figma</li>
        <li>Consumo dinâmico de dados via API do WordPress</li>
        <li>Validação de formulário com feedback visual via Toast</li>
        <li>Verificação cruzada frontend/backend com código de soma</li>
        <li>Formulário salvo como Custom Post Type</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">📂 Estrutura do Projeto</h2>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
frontend/
├── src/
│   ├── components/
│   ├── services/wordpress.ts
│   └── types/globalTypes.ts

backend/
└── wordpress/wp-content/themes/psel-monks-theme/
    ├── functions.php
    ├── inc/
    └── template-parts/
      </pre>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">📥 API REST e Integrações</h2>
      <p class="text-gray-700 mb-2">As seções são carregadas via endpoints REST:</p>
      <ul class="list-disc pl-6 text-gray-700">
        <li><code>/wp-json/wp/v2/hero-lp-section</code></li>
        <li><code>/wp-json/wp/v2/products-section</code></li>
        <li><code>/wp-json/wp/v2/simple-gallery</code></li>
        <li><code>/wp-json/wp/v2/categories-section</code></li>
        <li><code>/wp-json/wp/v2/cards-section</code></li>
        <li><code>/wp-json/psel/v1/contact</code> (formulário)</li>
      </ul>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-purple-600 mb-4">📄 Documentações</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li><a href="https://github.com/Emanuelsmcastro/psel-monks-analista-emanuel/blob/main/docs/WP-DOC.md" class="text-purple-700 underline" target="_blank">Documentação do WordPress</a></li>
        <li><a href="https://github.com/Emanuelsmcastro/psel-monks-analista-emanuel/blob/main/docs/FRONT-DOC.md" class="text-purple-700 underline" target="_blank">Documentação do Frontend</a></li>
        <li><a href="https://github.com/Emanuelsmcastro/psel-monks-analista-emanuel/blob/main/docs/WP-SECTIONS.md" class="text-purple-700 underline" target="_blank">Guia de preenchimento das seções</a></li>
        <li><a href="https://github.com/Emanuelsmcastro/psel-monks-analista-emanuel" class="text-purple-700 underline" target="_blank">Repositório do Projeto</a></li>
      </ul>
    </section>

    <footer class="text-center text-sm text-gray-500 pt-8 border-t">
      Desenvolvido por Emanuel Castro para o processo seletivo da Monks.
    </footer>
  </div>
</main>

<?php
// get_footer();
