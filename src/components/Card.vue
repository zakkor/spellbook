<template lang="pug">
.card
  slot
</template>

<style lang="stylus">
@require '../styles/variables'

.card
  border 1px solid c-neutral-l-2
  border-radius 6px // TODO:
  padding size-5
  background-color c-neutral-l-4

  .body
    padding size-6

  .footer
    background-color c-neutral-l-3
    padding size-4

  &.stripe-primary
    border-top 4px solid c-primary

  &.stripe-danger
    border-top 4px solid c-danger

  &.stripe-warning
    border-top 4px solid c-warning

  &.stripe-success
    border-top 4px solid c-success
</style>
