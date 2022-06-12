<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{ errMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RbFormItem',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      errMessage: ''
    }
  }
}
</script>

<style>

</style>
