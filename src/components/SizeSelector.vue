<template>
    <KeywordLabel label-name="Image Size" />
    <div>
        <div @click="showing = !showing"
            class="w-40 h-full cursor-pointer hover:bg-zinc-800 bg-black text-white text-center px-8 flex flex-col justify-center items-center">
            <img class="invert select-none w-52" src="../assets/square.svg" alt="">
            <p class="select-none">
                {{ keywordsStore.getSize }}
            </p>
        </div>
        <div class="absolute w-40" v-if="showing">
            <div v-for="size in sizes" :key="size">
                <p class="select-none bg-zinc-500 hover:bg-zinc-400 text-white cursor-pointer z-10" @click="keywordsStore.changeSize(size)">
                    {{ size }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useKeywordsStore } from '@/store/keywords';
import KeywordLabel from './KeywordsLabel.vue';

export default {
    setup() {
        const keywordsStore = useKeywordsStore();
        const showing = ref(false);
        const sizes = [
            "256x256",
            "512x512",
            "1024x1024"
        ];
        return { sizes, showing, keywordsStore };
    },
    components: { KeywordLabel }
}
</script>