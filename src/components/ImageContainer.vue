<template>
    <div style="height: 80%;" class="w-screen overflow-x-auto bg-zinc-600 flex items-center" :class="imagesArray.length === 0 ? 'justify-center' : ''">
        <div class="flex" v-if="imagesArray.length !== 0">
            <img v-for="image in imagesArray" :key="image.url"
                class="first:ml-6 object-cover h-120 w-96 mr-5" :src="image.url">
        </div>
        <p v-else class="self-center text-6xl text-zinc-700">YOUR IMAGES WILL APPEAR HERE</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useKeywordsStore } from '@/store/keywords';

export default defineComponent({
    setup() {

        const keywordsStore = useKeywordsStore();

        const imagesArray = computed(() => {
            return keywordsStore.getImages.data;
        })

        return { keywordsStore, imagesArray };

    }
})
</script>