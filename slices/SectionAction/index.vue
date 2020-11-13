<template>
  <section class="ps action">
    <div class="ps__wrap">
      <div class="ps__main grid grid--12 grid--align-center">
        <div class="span-1-6">
          <div class="ps__head ps__head--left">
            <div class="ps__header">
              <prismic-rich-text :field="slice.primary.title" class="ps__title" />
            </div>
            <prismic-link v-if="slice.primary.link.length" class="ps-button ps-button--primary" :field="slice.primary.link">
              {{ slice.primary.label }}
            </prismic-link>
            <prismic-rich-text :field="slice.primary.description" class="ps__desc" style="margin-top: 1em;" />
          </div>
        </div>
        <div class="span-7-12">
          <div v-if="slice.items.length" class="image-container">
            <prismic-image v-for="(item, i) in slice.items" :key="`grid-item-${i + 1}`" :field="item.image" class="ps__img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.action {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--color-grey-90);
}
.container-text {
    display: flex;
    height: fit-content;
    width: auto;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
}
.image-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.image-action {
  width: 20vw;
  height: auto;
}
@media (max-width: 1001px) {
  .action {
    flex-flow: column;
  }
  .image-container {
    flex-flow: wrap;
  }
}
</style>
