<template>
  <div>
    <span class="result">{{ count }}</span>
    <button @click="inc">Count</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0
  }),

  methods: {
    inc () {
      this.count++
    }
  }
}
</script>
