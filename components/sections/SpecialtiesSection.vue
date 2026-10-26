<script setup lang="ts">
import { BadgeCheck, ClipboardList, Gem, Layers3, Route, Sparkles } from '@lucide/vue'
const publicImage = usePublicImage()

const specialties = [
  { title: 'Prótese Fixa', text: 'Soluções desenvolvidas com foco absoluto em adaptação marginal, passividade, funcionalidade oclusal e biocompatibilidade.', tags: ['Zircônia', 'Metalocerâmica'], icon: BadgeCheck, class: 'card-light' },
  { title: 'Prótese sobre Implante', text: 'Planejamento e execução cuidadosa para trabalhos sobre implantes, protocolos cerâmicos e pilares personalizados com assentamento milimétrico.', icon: Layers3, image: 'molde-implante-dentario.webp', class: 'card-image wide card-implant' },
  { title: 'Trabalhos Estéticos', text: 'Cuidado com forma, proporção áurea, acabamento de borda incisal e naturalidade biomimética para facetas e lentes ultrafinas.', icon: Sparkles, image: 'especialista-refinando-molde.webp', class: 'card-image wide card-aesthetic' },
  { title: 'Cerâmica', text: 'Estratificação artesanal e maquiagem micro-texturizada desenvolvidas com atenção profunda à mimetização de esmalte natural.', tags: ['Zircônia & Dissilicato'], icon: Gem, image: 'exemplo-de-molde.webp', class: 'card-image card-ceramics' },
  { title: 'Prótese Removível', text: 'Trabalhos personalizados buscando estabilidade mastigatória, proteção periodontal e equilíbrio funcional para o paciente.', tags: ['PPR • Total Balanceada'], icon: ClipboardList, class: 'card-light' },
  { title: 'Casos Personalizados & Complexos', text: 'Análise individual para demandas específicas de cada cirurgião-dentista. Atendimento consultivo direto com o técnico responsável para definição de eixos de inserção e seleção de ligas e cerâmicas.', icon: Route, class: 'card-soft wide' },
]
</script>

<template>
  <section id="especialidades" class="section section-tint"><div class="container"><div class="section-heading"><span class="eyebrow">Especialidades</span><h2>Soluções protéticas desenvolvidas com precisão</h2><p>Trabalhos pensados para atender diferentes necessidades clínicas, oclusais e estéticas com excelência técnica.</p></div><div class="specialty-grid"><article v-for="item in specialties" :key="item.title" :class="['specialty-card', item.class]" :style="item.image ? { backgroundImage: `url(${publicImage(item.image)})` } : undefined"><div v-if="item.image" class="card-shade" /><div class="card-content"><span v-if="item.icon" class="card-icon"><component :is="item.icon" :size="25" :stroke-width="1.8" aria-hidden="true" /></span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><div v-if="item.tags" class="tags"><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div></div></article></div></div></section>
</template>
