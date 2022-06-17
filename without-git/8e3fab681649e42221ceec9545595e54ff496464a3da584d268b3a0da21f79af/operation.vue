<template>
  <div class="operation">
    <h1>Operation</h1>
    <p>{{ $store.getters.counter }}</p>
    <button @click="increment">Addition</button>
    <button @click="decrement">Substraction</button>
  </div>
</template>
 
<script>
export default {
  name: "Operation",
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>