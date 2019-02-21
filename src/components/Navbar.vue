<template lang="pug">
nav#navbar.navbar(role='navigation', aria-label='main navigation')
  .container.flex.items-center
    .mt-3.mb-1.ml-4.mr-3
      // include ../icons/grimoire
    .flex.col.ml-2.text-center
      p.f-6.uppercase {{ title }}
    .links.ml-auto(style='height: 100px')
      ul
        li.is-active
          a(id='buttons') Buttons
        li
          a(id='colors') Colors
        li
          a(id='forms') Forms
        li
          a(id='typography') Typography
        li
          a(id='shadows') Shadows
        li.dropdown
          a Sections
          ul
            li 
              a(id='hero') Hero
            li
              a(id='footer') Footer
    a.button.primary.ml-8(href="#demo") View Demo &raquo;
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus">
@require '../styles/variables'

nav.navbar
  display flex
  flex-direction row
  align-items center
  border-bottom 1px solid c-neutral-l-2
  background-color c-neutral-l-4

  .links
    -webkit-overflow-scrolling touch
    align-items stretch
    display flex
    font-size 1rem
    justify-content space-between
    white-space nowrap

    a
      cursor pointer
      align-items center
      color c-neutral-d-3
      display flex
      justify-content center
      padding 1em 1em
      vertical-align top
      height 100%

      &:hover
        color c-primary-d-1

    li
      display block
      position relative
      transition background-color ease 0.3s, border-color ease 0.3s
      border-bottom-color transparent
      border-bottom-style solid
      border-bottom-width 1px
      height 100%

      &:hover
        background-color c-neutral-l-3
        border-bottom-style solid
        border-bottom-width 1px
        border-bottom-color c-primary-l-1

      &.is-active
        border-bottom-color c-primary-d-1
        color c-primary-d-1

      &.dropdown
        > a:after
          content ' ›'
          white-space pre

        ul
          opacity 0
          display none
          position absolute
          z-index 1
          margin-top 1px
          background-color c-neutral-l-4
          border c-neutral-l-1 solid 1px
          border-radius size-1
          border-top-left-radius 0
          border-top-right-radius 0

        li
          border 0

          a
            justify-content start
            min-width 240px

        &:hover ul
          display block
          opacity 1
          animation fadeIn 0.1s

    ul
      align-items center
      display flex
      flex-grow 1
      flex-shrink 0
      justify-content flex-start

@keyframes fadeIn
  0%
    opacity 0

  100%
    opacity 1
</style>
