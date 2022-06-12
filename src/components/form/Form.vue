<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RbForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  }
}
</script>

<style>

</style>
