<template>
  <div class="flex justify-center items-center w-screen h-screen relative">
    <RoundLights />
    <div class="flex justify-center items-center flex-col">
      <h1 class="text-8xl">IAginator</h1>
      <router-link class="w-fit flex text-lg underline text-green-600 mt-3" to="/generate">
        Generate image
        <img class="w-5" src="@/assets/arrow-right.svg" alt="arrow-right" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import RoundLights from '@/components/RoundLights.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { RoundLights },
});
</script>
