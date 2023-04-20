<template>
    <div class="h-screen h-screen">
        <OptionsComponent />
        <ImageContainer />
    </div>
</template>
  
<script lang="ts">
import OptionsComponent from '@/components/OptionsComponent.vue';
import ImageContainer from '@/components/ImageContainer.vue'
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GenerateView',
    components: { OptionsComponent, ImageContainer },
});
</script>
  