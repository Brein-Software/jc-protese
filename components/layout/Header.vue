<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowUpRight } from '@lucide/vue'
import { business } from '~/data/business'

const sectionIds = ['laboratorio', 'especialidades', 'avaliacoes', 'contato']
const activeSection = ref('laboratorio')
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
let sections: HTMLElement[] = []

const updateActiveSection = () => {
  const activationLine = window.innerHeight * 0.3
  const currentSection = sections
    .filter((section) => section.getBoundingClientRect().top <= activationLine)
    .at(-1)

  if (currentSection) {
    activeSection.value = currentSection.id
  }
}

const setActiveSection = (id: string) => {
  activeSection.value = id
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const updateHeaderState = () => {
  isScrolled.value = window.scrollY > 24
  updateActiveSection()
}

onMounted(() => {
  sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => Boolean(section))

  updateHeaderState()
  window.addEventListener('scroll', updateHeaderState, { passive: true })
  window.addEventListener('resize', updateActiveSection)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeaderState)
  window.removeEventListener('resize', updateActiveSection)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }" role="banner">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Voltar ao início">
        <img :src="business.logo" :alt="`${business.name} logo`" />
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a
          v-for="item in [
            ['laboratorio', 'O Laboratório'],
            ['especialidades', 'Especialidades'],
            ['avaliacoes', 'Avaliações'],
            ['contato', 'Contato'],
          ]"
          :key="item[0]"
          :href="`#${item[0]}`"
          :class="{ active: activeSection === item[0] }"
          :aria-current="activeSection === item[0] ? 'location' : undefined"
          @click="setActiveSection(item[0])"
        >{{ item[1] }}</a>
      </nav>
      <div class="header-actions">
        <a class="button button-small header-whatsapp" :href="business.whatsappUrl" target="_blank" rel="noopener noreferrer"><svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.91 9.91 0 0 0-8.51 15.01L2 22l5.13-1.5A9.93 9.93 0 1 0 12.04 2Zm0 18.18a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.05.9.92-2.97-.2-.31a8.24 8.24 0 1 1 6.83 3.71Zm4.52-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.55.13-.16.25-.63.81-.77.97-.14.17-.28.19-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.55-1.34-.75-1.83-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2.01s.86 2.33.98 2.49c.12.17 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z" /></svg><span>Fale conosco</span></a>
        <button class="mobile-menu-toggle" :class="{ open: mobileMenuOpen }" type="button" :aria-expanded="mobileMenuOpen" aria-controls="mobile-menu" aria-label="Abrir menu" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="menu-icon" :class="{ open: mobileMenuOpen }" aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
    </div>
    <Transition name="mobile-menu">
      <nav v-if="mobileMenuOpen" id="mobile-menu" class="mobile-menu" aria-label="Navegação mobile">
        <a
          v-for="item in [
            ['laboratorio', 'O Laboratório'],
            ['especialidades', 'Especialidades'],
            ['avaliacoes', 'Avaliações'],
            ['contato', 'Contato'],
          ]"
          :key="item[0]"
          :href="`#${item[0]}`"
          :class="{ active: activeSection === item[0] }"
          @click="setActiveSection(item[0]); closeMobileMenu()"
        >{{ item[1] }}<ArrowUpRight :size="24" :stroke-width="1.8" aria-hidden="true" /></a>
      </nav>
    </Transition>
  </header>
</template>
