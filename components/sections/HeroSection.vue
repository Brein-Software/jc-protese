<script setup lang="ts">
import { ArrowDown, Check, Star } from '@lucide/vue'
import { business } from '~/data/business'
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-image" />
    <div class="hero-overlay" />
    <div class="container hero-content">
      <div class="hero-copy">
        <h1 class="hero-enter hero-enter-1">Precisão, estética e experiência em cada trabalho.</h1>
        <p class="hero-enter hero-enter-2">Há mais de 20 anos, o JC Protético trabalha ao lado de profissionais da odontologia, unindo técnica cirúrgica, cuidado e atenção aos detalhes em cada caso clínico.</p>
        <div class="hero-actions hero-enter hero-enter-3">
          <a class="button" :href="business.whatsappUrl" target="_blank" rel="noopener noreferrer">
            <svg class="phone-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" /></svg>
            <span>Falar com o laboratório</span>
          </a>
          <a class="button button-ghost" href="#especialidades">
            <span>Conhecer especialidades</span>
            <ArrowDown :size="17" :stroke-width="2" aria-hidden="true" />
          </a>
        </div>
        <div class="hero-meta hero-enter hero-enter-4">
          <div class="trust"><Check :size="18" :stroke-width="2.5" aria-hidden="true" /><span>+20 anos de experiência em prótese odontológica de alta precisão</span></div>
          <div class="hero-rating" aria-label="Avaliação média de 4,9 de 5,0 por profissionais parceiros">
            <span class="rating-stars" aria-hidden="true"><Star v-for="star in 5" :key="star" :size="15" :stroke-width="2.2" fill="currentColor" /></span>
            <strong>4,9/5,0</strong>
            <span>avaliações dos parceiros</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
