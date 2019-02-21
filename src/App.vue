<template lang="pug">
  #app
    //- Navbar(title='Spellbook')

    .container.p-6
      .row
        .col.mr-large-4
          Card.text-center
            h3 Auto
        .col.mr-large-8.mt-small-4
          Card.text-center
            h3 Auto
        .col.mt-small-8.mr-large-4
          Card.text-center
            h3 Auto
        .col.mt-small-4
          Card.text-center
            h3 Auto
        
</template>

<script>
import { Button, Navbar, Card } from './components'

export default {
  name: 'app',
  components: {
    Navbar,
    Button,
    Card
  }
}
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
