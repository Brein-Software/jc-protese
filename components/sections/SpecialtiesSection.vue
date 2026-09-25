<script setup lang="ts">
import { BadgeCheck, ClipboardList, Gem, Layers3, Route, Sparkles } from '@lucide/vue'

const specialties = [
  { title: 'Prótese Fixa', text: 'Soluções desenvolvidas com foco absoluto em adaptação marginal, passividade, funcionalidade oclusal e biocompatibilidade.', tags: ['Zircônia', 'Metalocerâmica'], icon: BadgeCheck, class: 'card-light' },
  { title: 'Prótese sobre Implante', text: 'Planejamento e execução cuidadosa para trabalhos sobre implantes, protocolos cerâmicos e pilares personalizados com assentamento milimétrico.', icon: Layers3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI8H140IIhWFUwr77SI2nqeeU63hDsc8zynfZofrA7WhnGlpgkG3l4B-sU18K18SAJDZE14RrHWPE6iVqhkkXIho42xgYD5Kp1NdfmkC1F9z_VpAxC2xpCfNvmePCLNSoZe79acqTNe-dTPICI5hd4mNivgA30H-T6vQ8gaIlaVR6EuynbYW8vZBlj5SwnpwcYqTv1U1S01J8N1Iu4WDWIp_3A37l8Ah7_CLbT2Z4A5kWwekGAtS-s3g', class: 'card-image wide' },
  { title: 'Trabalhos Estéticos', text: 'Cuidado com forma, proporção áurea, acabamento de borda incisal e naturalidade biomimética para facetas e lentes ultrafinas.', icon: Sparkles, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHecuKI7Gi_3Jkmg8pCTU2veILIhxZhWq5aQmQiprCt0E2teqg8g9cKhEOFdus8bA3dGNe3kwmDQlTR5-JYhes4d1xneeUx2jNtrPxYDBQ0ILRPOjNzFww8lFVayqSq6__HvLVgFE2KLAp9Q3nrhRWfqnC00UM-7gxtAiP8cB6Hwda9HauO3kaOMdapyimZRMaCvRkoGWO016iV0D_XJ8VHGWOexELjOtmhWA3bXbjQQntevE1YovVUg', class: 'card-image wide' },
  { title: 'Cerâmica', text: 'Estratificação artesanal e maquiagem micro-texturizada desenvolvidas com atenção profunda à mimetização de esmalte natural.', tags: ['Zircônia & Dissilicato'], icon: Gem, class: 'card-primary' },
  { title: 'Prótese Removível', text: 'Trabalhos personalizados buscando estabilidade mastigatória, proteção periodontal e equilíbrio funcional para o paciente.', tags: ['PPR • Total Balanceada'], icon: ClipboardList, class: 'card-light' },
  { title: 'Casos Personalizados & Complexos', text: 'Análise individual para demandas específicas de cada cirurgião-dentista. Atendimento consultivo direto com o técnico responsável para definição de eixos de inserção e seleção de ligas e cerâmicas.', icon: Route, class: 'card-soft wide' },
]
</script>

<template>
  <section id="especialidades" class="section section-tint"><div class="container"><div class="section-heading"><span class="eyebrow">Especialidades</span><h2>Soluções protéticas desenvolvidas com precisão</h2><p>Trabalhos pensados para atender diferentes necessidades clínicas, oclusais e estéticas com excelência técnica.</p></div><div class="specialty-grid"><article v-for="item in specialties" :key="item.title" :class="['specialty-card', item.class]" :style="item.image ? { backgroundImage: `url(${item.image})` } : undefined"><div v-if="item.image" class="card-shade" /><div class="card-content"><span v-if="item.icon" class="card-icon"><component :is="item.icon" :size="25" :stroke-width="1.8" aria-hidden="true" /></span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><div v-if="item.tags" class="tags"><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div></div></article></div></div></section>
</template>
