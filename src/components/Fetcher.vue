<template>
  <div>
    <button @click="fetch">Fetch</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  methods: {
    fetch () {
      store.fetch('products')
    }
  }
}
</script>

