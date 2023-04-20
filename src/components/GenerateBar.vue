<template>
    <div class="flex rounded-r-md w-full">
        <textarea @input="(e) => saveInput(e)" placeholder="Insert your idea here!"
            class="placeholder-zinc-500 p-3 w-10/12 outline-0 bg-zinc-400 resize-none" cols="100" rows="100"></textarea>
        <button @click="keywordsStore.generateImages()"
            class="select-none w-2/12 hover:bg-amber-500 flex justify-center items-center flex-col bg-black">
            <div v-if="keywordsStore.generationStatus === 'none'" class='flex flex-col items-center'>
                <img src="../assets/brain.svg" width="30" alt="">
                <p class="text-white">Generate</p>
            </div>
            <p v-else class="text-white"> LOADING... </p>
        </button>
    </div>
</template>

<script lang="ts">
import { useKeywordsStore } from '@/store/keywords';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const saveInput = (e: Event) => {
            useKeywordsStore()
                .saveInput((e.target as HTMLInputElement).value);
        }

        const keywordsStore = useKeywordsStore();

        return { saveInput, keywordsStore };
    }
})
</script>