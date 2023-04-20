<template>
    <KeywordsLabel label-name="Image Quantity" />
    <div class="w-40 px-8 flex justify-center items-center bg-black text-white">
        <span class="rounded-full w-8 h-8 flex justify-center items-center pb-2 hover:bg-zinc-800 cursor-pointer text-4xl" @click="keywordsStore.removeQuantity()">-</span>
        <p class="mx-4 text-5xl">{{ keywordsStore.getQuantity }}</p>
        <span class="rounded-full w-8 h-8 flex justify-center items-center pb-2 hover:bg-zinc-800 cursor-pointer text-4xl" @click="keywordsStore.addQuantity()">+</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KeywordsLabel from './KeywordsLabel.vue';
import { useKeywordsStore } from '@/store/keywords';

export default defineComponent({
    setup() {

        const keywordsStore = useKeywordsStore();

        return { keywordsStore };
    },
    components: { KeywordsLabel }
})
</script>