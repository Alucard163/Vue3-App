<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ herosCount }}</h1>
    <ul>
      <li 
        v-for="(hero, index) in dcHeros"
        :key=hero.name
      >
        <div class="flex justify-between">{{ hero.name }} <button @click="remove(index)">x</button></div>
      </li>
    </ul>
    <form 
      class="mt-10"
      @submit.prevent="addHero"
    >
      <input 
        class="border rounded"
        v-model="newHero"
        placeholder="Type Hero Name Here"
      />
      <button 
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {

 data() {
    return {
        isActive: true,
        newHero: "",
        dcHeros: [
            {name: 'Supergirl'},
            {name: 'Flash'},
            {name: 'Batman'},
        ],
    }
 },
 methods: {
    addHero() { 
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = '';
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index)
    },
  },

  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  }
}
</script>

<style>

</style>