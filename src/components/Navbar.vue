<template lang="pug">
nav.navbar(ref='navbar' role='navigation', aria-label='main navigation')
  .container.flex
    .controls
      nuxt-link(to='/').title.font-6.uppercase.mr-10.ph-3 {{ title }}

      svg.collapse.ml-auto(@click='toggleResponsive' viewBox='0 0 800 600')
        path#top(d='M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200')
        path#middle(d='M300,320 L540,320')
        path#bottom(d='M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190', transform='translate(480, 320) scale(1, -1) translate(-480, -318) ')

    .links
      ul
        slot

</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    toggleResponsive() {
      const nav = this.$refs.navbar
      if (nav.className === 'navbar') {
        nav.className += ' responsive'
      } else {
        nav.className = 'navbar'
      }
    }
  }
}
</script>
