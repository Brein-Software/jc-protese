<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Clock3, MessageCircle, Ruler } from '@lucide/vue'

const experienceBadge = ref<HTMLElement | null>(null)
const years = ref(0)
const hasAnimated = ref(false)
let observer: IntersectionObserver | undefined

const animateYears = () => {
  if (hasAnimated.value) return

  hasAnimated.value = true

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    years.value = 20
    return
  }

  const duration = 1100
  const start = performance.now()

  const update = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const easedProgress = 1 - Math.pow(1 - progress, 3)
    years.value = Math.round(easedProgress * 20)

    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (!experienceBadge.value) return

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('is-visible')

      if (entry.target === experienceBadge.value) animateYears()
    })
  }, { threshold: 0.35 })

  document.querySelectorAll<HTMLElement>('#laboratorio .reveal, #laboratorio .reveal-item')
    .forEach((element) => observer?.observe(element))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="laboratorio" class="section section-white">
    <div class="container two-column">
      <div class="laboratory-image reveal">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0b2UCf2-bTuBDVYBnGVhXQlvaYHEZ-RgraBE_zFjGZZbnRTgl_5J7SlQIYDMaJjwr2Ml9_ZCCl21et4Ex5LifyGFT42ZBt3IbhoPyCWGFbArkJ2zxrAfo-mtz9JRCMoulFd784HvRlh1R1KW7l0dIQi1ylRXqCq3DqpU-P3TxsAD9NNVQJzOsxf730Re51xkQPS6I-MK_TDbKl_2vB522U-deh5QV3IvnG6ZCAJ3RhNFYylHba4cPbg" alt="Mestre em Prótese Dentária Júlio César de Almeida ao microscópio" loading="lazy">
        <div ref="experienceBadge" class="experience-badge reveal">
          <strong>+{{ years }} anos</strong>
          <span>de experiência, escultura biomimética e dedicação</span>
        </div>
      </div>

      <div class="section-copy reveal">
        <span class="eyebrow">O Laboratório</span>
        <h2>Experiência, técnica e cuidado em cada detalhe.</h2>
        <p>O JC Protético atua há mais de duas décadas no desenvolvimento de trabalhos protéticos especializados para profissionais da odontologia e clínicas de referência.</p>
        <p>Nossa proposta é construir relações de confiança com dentistas e clínicas, oferecendo atenção rigorosa aos detalhes, comunicação direta e compromisso inegociável com a qualidade de cada elemento protético produzido.</p>
        <div class="pillars">
          <div class="reveal-item" style="--reveal-delay: 80ms"><MessageCircle class="pillar-icon" :size="24" :stroke-width="1.8" aria-hidden="true" /><strong>Comunicação</strong><small>Diálogo clínico direto</small></div>
          <div class="reveal-item" style="--reveal-delay: 160ms"><Ruler class="pillar-icon" :size="24" :stroke-width="1.8" aria-hidden="true" /><strong>Precisão</strong><small>Ajuste milimétrico</small></div>
          <div class="reveal-item" style="--reveal-delay: 240ms"><Clock3 class="pillar-icon" :size="24" :stroke-width="1.8" aria-hidden="true" /><strong>Pontualidade</strong><small>Prazos respeitados</small></div>
        </div>
      </div>
    </div>
  </section>
</template>
