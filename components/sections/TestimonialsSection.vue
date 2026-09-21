<script setup lang="ts">
const testimonials = [
  ['MG', 'Dr. Marcelo Guimarães', 'Cirurgião-Dentista | Reabilitação Oral', 'Excelente atendimento e muita atenção aos detalhes. A qualidade dos trabalhos e a comunicação fluida fazem toda a diferença no dia a dia do nosso consultório.'],
  ['CN', 'Dra. Camila Nogueira', 'Especialista em Prótese Dentária', 'A adaptação das peças sobre implante e o refinamento estético das cerâmicas sempre superam as expectativas. Parceria fundamental e estratégica para os nossos casos clínicos.'],
  ['RS', 'Dr. Roberto Silveira', 'Clínica Integrada Odonto', 'Pontualidade exemplar e precisão milimétrica. A proximidade e a prontidão do Júlio César trazem total segurança no planejamento dos casos mais desafiadores.'],
]
</script>

<template>
  <section id="avaliacoes" class="section section-white"><div class="container"><div class="section-heading"><span class="eyebrow">Avaliações</span><h2>A confiança de quem trabalha conosco</h2><p>Relacionamentos sólidos construídos através da consistência técnica, comunicação constante e compromisso com cada peça.</p></div><div class="testimonial-grid"><article v-for="review in testimonials" :key="review[1]" class="testimonial"><div><div class="stars" aria-label="5 estrelas">★★★★★</div><p>“{{ review[3] }}”</p></div><div class="reviewer"><span>{{ review[0] }}</span><div><strong>{{ review[1] }}</strong><small>{{ review[2] }}</small></div></div></article></div></div></section>
</template>
