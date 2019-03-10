<template lang="pug">
a.button
  slot
</template>

<script>
export default {
  // props: {
  //   primary: Boolean,
  //   tertiary: Boolean,
  //   secondary: Boolean,
  //   large: Boolean,
  //   small: Boolean
  // },
  // computed: {
  //   classNames() {
  //     return [this.type, this.size]
  //   },
  //   type() {
  //     if (this.primary) {
  //       return 'primary'
  //     }
  //     if (this.tertiary) {
  //       return 'tertiary'
  //     }
  //     return 'secondary'
  //   },
  //   size() {
  //     if (this.large) {
  //       return 'large'
  //     }
  //     if (this.small) {
  //       return 'small'
  //     }
  //     return ''
  //   }
  // }
}
</script>
