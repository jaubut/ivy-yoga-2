<template>
  <div class="ps ps-cta" style="background: var(--color-grey-90);">
    <div class="ps__wrap">
      <div class="ps__head">
        <div class="ps__header">
          <div class="ps__title" style="text-align: center;">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <div class="ps__desc" />
        <a class="ps-button ps-button--primary margin-auto" target="_blank" :href="url">{{ label }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaCenter',
  props: {
    url: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
    .ps-cta {
        background: white !important;
    }
    .margin-auto {
        margin-left: auto;
        margin-right: auto;
        margin-top: var(--h-padding);
    }
</style>
