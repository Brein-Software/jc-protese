<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const testimonials = [
  ['MG', 'Dr. Marcelo Guimarães', 'Cirurgião-Dentista | Reabilitação Oral', 'Excelente atendimento e muita atenção aos detalhes. A qualidade dos trabalhos e a comunicação fluida fazem toda a diferença no dia a dia do nosso consultório.'],
  ['CN', 'Dra. Camila Nogueira', 'Especialista em Prótese Dentária', 'A adaptação das peças sobre implante e o refinamento estético das cerâmicas sempre superam as expectativas. Parceria fundamental e estratégica para os nossos casos clínicos.'],
  ['RS', 'Dr. Roberto Silveira', 'Clínica Integrada Odonto', 'Pontualidade exemplar e precisão milimétrica. A proximidade e a prontidão de toda a equipe trazem total segurança no planejamento dos casos mais desafiadores.'],
  ['EC', 'Equipe Clínica Integrada Odonto', 'Clínica Integrada Odonto', 'O cuidado em cada etapa, do planejamento à entrega, fortalece a nossa rotina clínica. O laboratório é um parceiro presente, ágil e comprometido com resultados consistentes.'],
  ['AF', 'Dra. Ana Flávia Martins', 'Implantodontia e Estética', 'A equipe entende as necessidades de cada caso e mantém uma comunicação clara durante todo o processo. O resultado final alia naturalidade, conforto e excelente acabamento.'],
  ['LP', 'Dr. Lucas Paiva', 'Reabilitação Oral', 'Trabalhos precisos, prazos bem cumpridos e atenção genuína aos detalhes. A parceria com o laboratório torna o planejamento das reabilitações muito mais seguro e previsível.'],
]

const carousel = ref<HTMLElement | null>(null)
const visibleCount = ref(3)
const currentPage = ref(0)
const totalPages = computed(() => Math.ceil(testimonials.length / visibleCount.value))

const updateVisibleCount = () => {
  visibleCount.value = window.innerWidth <= 900 ? 1 : 3
  currentPage.value = Math.min(currentPage.value, totalPages.value - 1)
}

const goToPage = (page: number) => {
  if (!carousel.value) return
  const nextPage = Math.max(0, Math.min(page, totalPages.value - 1))
  currentPage.value = nextPage
  const firstCard = carousel.value.querySelector<HTMLElement>('.testimonial')
  const gap = parseFloat(getComputedStyle(carousel.value).columnGap || '0')
  const pageWidth = visibleCount.value === 1 && firstCard
    ? firstCard.offsetWidth + gap
    : carousel.value.clientWidth

  carousel.value.scrollTo({ left: nextPage * pageWidth, behavior: 'smooth' })
}

const handleScroll = () => {
  if (!carousel.value) return
  const firstCard = carousel.value.querySelector<HTMLElement>('.testimonial')
  const gap = parseFloat(getComputedStyle(carousel.value).columnGap || '0')
  const pageWidth = visibleCount.value === 1 && firstCard
    ? firstCard.offsetWidth + gap
    : carousel.value.clientWidth

  currentPage.value = Math.round(carousel.value.scrollLeft / pageWidth)
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => window.removeEventListener('resize', updateVisibleCount))
</script>

<template>
  <section id="avaliacoes" class="section section-white">
    <div class="container">
      <div class="section-heading">
        <span class="eyebrow">Avaliações</span>
        <h2>A confiança de quem trabalha conosco</h2>
        <p>Relacionamentos sólidos construídos através da consistência técnica, do trabalho em equipe, da comunicação constante e do compromisso com cada peça.</p>
      </div>

      <div class="testimonial-carousel-wrap">
        <button class="carousel-arrow carousel-arrow-prev" type="button" aria-label="Avaliações anteriores" :disabled="currentPage === 0" @click="goToPage(currentPage - 1)">
          <ChevronLeft :size="20" :stroke-width="2" aria-hidden="true" />
        </button>
        <div ref="carousel" class="testimonial-carousel" tabindex="0" aria-label="Carrossel de avaliações" @scroll="handleScroll" @keydown.left.prevent="goToPage(currentPage - 1)" @keydown.right.prevent="goToPage(currentPage + 1)">
          <div v-for="review in testimonials" :key="review[1]" class="testimonial">
            <div>
              <div class="stars" aria-label="5 estrelas">★★★★★</div>
              <p>“{{ review[3] }}”</p>
            </div>
            <div class="reviewer">
              <span>{{ review[0] }}</span>
              <div><strong>{{ review[1] }}</strong><small>{{ review[2] }}</small></div>
            </div>
          </div>
        </div>
        <button class="carousel-arrow carousel-arrow-next" type="button" aria-label="Próximas avaliações" :disabled="currentPage === totalPages - 1" @click="goToPage(currentPage + 1)">
          <ChevronRight :size="20" :stroke-width="2" aria-hidden="true" />
        </button>
      </div>

      <div class="carousel-dots" aria-label="Páginas das avaliações">
        <button v-for="page in totalPages" :key="page" type="button" :class="{ active: currentPage === page - 1 }" :aria-label="`Ir para a página ${page}`" :aria-current="currentPage === page - 1 ? 'true' : undefined" @click="goToPage(page - 1)" />
      </div>
    </div>
  </section>
</template>
