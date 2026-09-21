<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <section id="top" class="hero"><div class="hero-image" /><div class="hero-overlay" /><div class="container hero-content"><div class="hero-copy"><span class="eyebrow chip"><i />Laboratório de Prótese Dentária</span><h1>Precisão, estética e experiência em cada trabalho.</h1><p>Há mais de 20 anos, o JC Protético trabalha ao lado de profissionais da odontologia, unindo técnica cirúrgica, cuidado e atenção aos detalhes em cada caso clínico.</p><div class="hero-actions"><a class="button" :href="business.whatsappUrl" target="_blank" rel="noopener noreferrer">◉ &nbsp;Falar com o laboratório</a><a class="button button-ghost" href="#especialidades">Conhecer especialidades &nbsp;↓</a></div><div class="trust">✓ <span>+20 anos de experiência em prótese odontológica de alta precisão</span></div></div></div></section>
</template>
