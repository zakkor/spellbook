<template lang="pug">
  #app
    //- Navbar(title='Spellbook')

    .container.p-6
      .row
        .col.lg-mr-4
          Card.text-center
            h3 Auto
        .col.lg-mr-8.sm-mt-4
          Card.text-center
            h3 Auto
        .col.sm-mt-8.lg-mr-4
          Card.text-center
            h3 Auto
        .col.sm-mt-4
          Card.text-center
            h3 Auto
      Alert.primary
        p yo
        
</template>

<script>
import { Button, Navbar, Card, Alert } from './components'

export default {
  name: 'app',
  components: {
    Navbar,
    Button,
    Card,
    Alert
  }
}
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
