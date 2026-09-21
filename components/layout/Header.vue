<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <header class="site-header" role="banner">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Voltar ao início">
        <img :src="business.logo" :alt="`${business.name} logo`" />
        <span><strong>{{ business.name }}</strong><small>{{ business.descriptor }}</small></span>
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#laboratorio">O Laboratório</a><a href="#especialidades">Especialidades</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a>
      </nav>
      <div class="header-actions">
        <a class="button button-small header-whatsapp" :href="business.whatsappUrl" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        <span class="user-mark" aria-hidden="true">⌾</span>
      </div>
    </div>
  </header>
</template>
