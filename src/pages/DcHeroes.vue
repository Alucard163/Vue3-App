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
        ref="newHeroRef"
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
import { computed, onMounted, ref } from "vue";

export default {
  setup() {
     const newHeroRef = ref("");
     const newHero = ref("");
     const dcHeros = ref([
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ]);

      onMounted(() => {
        newHeroRef.value.focus();
      });
      const herosCount = computed({
        get: () => dcHeros.value.length,
      });
      function remove(index) {
        dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
      }
      function addHero() {
        if (newHero.value !== "") {
          dcHeros.value.unshift({ name: newHero.value });
          newHero.value = "";
        }
      }
    return { dcHeros, newHero, remove, addHero, newHeroRef, herosCount };
  },
}
</script>

<style>

</style>