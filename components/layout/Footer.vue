<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-grid">
      <div class="footer-info">
        <a class="brand" href="#top"><img :src="business.logo" :alt="`${business.name} logo`" /><span><strong>{{ business.name }}</strong><small>{{ business.descriptor }}</small></span></a>
        <p>Há mais de 20 anos trabalhando ao lado de profissionais da odontologia, integrando inovação biomimética, escaneamento CAD/CAM e a essência da escultura artesanal personalizada.</p>
        <div class="contact-list">
          <a :href="business.whatsappUrl" target="_blank" rel="noopener noreferrer">◉ <span>WhatsApp: {{ business.whatsappLabel }}</span></a>
          <a :href="business.instagramUrl" target="_blank" rel="noopener noreferrer">◎ <span>Instagram: {{ business.instagramLabel }}</span></a>
          <a :href="`mailto:${business.email}`">✉ <span>E-mail: {{ business.email }}</span></a>
        </div>
        <div class="registration"><strong>✓ &nbsp;Credenciamento Técnico</strong><span>Laboratório: <b>{{ business.registration }}</b></span><span>Responsável Técnico: <b>{{ business.responsible }}</b></span></div>
        <nav class="footer-links" aria-label="Links do rodapé"><a href="#laboratorio">O Laboratório</a><a href="#especialidades">Especialidades</a><a href="#avaliacoes">Avaliações</a><a :href="business.whatsappUrl">WhatsApp</a></nav>
      </div>
      <div class="map-area"><div class="map-heading"><h3>Onde estamos</h3><span>Matriz &amp; Logística</span></div><div class="map-frame"><iframe :src="business.mapEmbedUrl" loading="lazy" title="Mapa de localização JC Protético" referrerpolicy="no-referrer-when-downgrade" /></div><div class="address"><span>⌖ &nbsp;{{ business.address }}</span><a :href="business.mapsUrl" target="_blank" rel="noopener noreferrer">Abrir no Google Maps ↗</a></div></div>
    </div>
    <div class="bottom-bar container"><span>© JC Protético. Todos os direitos reservados.</span><span>Laboratório de Prótese Dentária • Qualidade • Precisão • Pontualidade</span></div>
  </footer>
</template>
