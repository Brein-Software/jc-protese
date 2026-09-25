<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-grid">
      <div class="footer-info">
        <a class="footer-brand" href="#top">
          <img :src="business.logo" :alt="`${business.name} logo`" />
        </a>
        <p class="footer-description">Há mais de 20 anos trabalhando ao lado de profissionais da odontologia, integrando inovação biomimética, escaneamento CAD/CAM e a essência da escultura artesanal personalizada.</p>
        <div class="contact-list" aria-label="Canais de contato">
          <a class="contact-item" :href="business.whatsappUrl" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5Z"/><path d="M8.5 8.5c.2 2.4 2.6 5 5 5.2l1.3-1.1c.2-.2.5-.2.7-.1l1.3.6c.3.1.4.4.3.7-.3 1.1-1 1.6-2.1 1.5-3.3-.2-6.8-3.7-7-7-.1-1.1.4-1.8 1.5-2.1.3-.1.6 0 .7.3l.6 1.3c.1.2.1.5-.1.7L8.5 8.5Z"/></svg></span>
            <span><small>WhatsApp</small>{{ business.whatsappLabel }}</span>
          </a>
          <a class="contact-item" :href="business.instagramUrl" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="12" cy="12" r="4"/><circle class="icon-dot" cx="17.4" cy="6.7" r=".8"/></svg></span>
            <span><small>Instagram</small>{{ business.instagramLabel }}</span>
          </a>
          <a class="contact-item" :href="`mailto:${business.email}`">
            <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span>
            <span><small>E-mail</small>{{ business.email }}</span>
          </a>
        </div>
        <div class="registration" aria-label="Credenciamento técnico">
          <div class="registration-title"><span class="registration-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></span><strong>Credenciamento Técnico</strong></div>
          <span>Laboratório: <b>{{ business.registration }}</b></span>
          <span>Responsável Técnico: <b>{{ business.responsible }}</b></span>
        </div>
      </div>
      <div class="map-area">
        <div class="map-heading"><div><span class="map-kicker">Nossa localização</span><h3>Onde estamos</h3></div><span class="map-badge">Matriz &amp; Logística</span></div>
        <div class="map-frame"><iframe :src="business.mapEmbedUrl" loading="lazy" title="Mapa de localização JC Protético" referrerpolicy="no-referrer-when-downgrade" /></div>
        <div class="address"><span class="address-text"><span class="address-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span>{{ business.address }}</span></span><a :href="business.mapsUrl" target="_blank" rel="noopener noreferrer">Abrir no Google Maps <span aria-hidden="true">↗</span></a></div>
      </div>
    </div>
    <div class="bottom-bar container"><span>© JC Protético. Todos os direitos reservados.</span><span>Laboratório de Prótese Dentária • Qualidade • Precisão • Pontualidade</span></div>
  </footer>
</template>
