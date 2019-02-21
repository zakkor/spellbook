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

<style lang="stylus">
@require '../styles/variables'

a.button, button.button
  display inline-block
  background-color rgba(0, 0, 0, 0)
  border 1px solid
  padding size-3 size-4
  border-radius 8px
  font-size font-4
  text-decoration none

  &:hover
    cursor pointer

  &.large
    font-size 20px
    padding 15px 30px
    letter-spacing 0.9px

  &.small
    font-size 14px
    padding 8px 10px
    letter-spacing 0

  &.tiny
    font-size 12px
    padding 6px 8px
    letter-spacing 0

  &.block
    text-align center
    display block

  // -- Colours
  // secondary style is default (because most commonly used)
  border-color c-primary-l-1
  border-width 2px
  color c-primary

  &.white
    color c-neutral-l-4

  font-weight 600
  letter-spacing 0.7px
  user-select none

  &:hover
    color c-primary-d-1

    &.white
      color c-primary-l-2

    border-color c-primary

  &:active
    color c-primary-d-2
    border-color c-primary-d-1

  transition color 0.2s ease 0s, background-color 0.2s ease 0s, border-color 0.2s ease 0s

  &.primary
    background-color c-primary
    border-color c-primary-l-1
    color c-neutral-l-4

    &:hover
      background-color c-primary-l-1
      border-color c-primary-l-1

    &:active
      border-color c-primary-l-2

  &.tertiary
    border 0
    position relative
    padding 0
    text-decoration underline

    &:hover
      color c-primary-d-1

  &.danger
    color c-danger-d-3
    border-color c-danger-l-2
    background-color c-danger-l-2

    &.tertiary
      background-color transparent

    &:hover
      border-color c-danger-l-2
      background-color c-danger-l-1
      color c-danger-l-3

      &.tertiary
        background-color transparent
        color c-danger-d-3

button.button:focus
  outline 0
</style>
