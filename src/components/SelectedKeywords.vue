<template>
    <div style="min-width: 200px;" class="border-r-2 border-zinc-800 bg-zinc-400 h-full w-52 min-h-full max-h-full overflow-y-auto">
        <div class="bg-zinc-600 hover:bg-zinc-700 select-none cursor-pointer text-white px-2 flex items-center justify-between" v-for="keyword in keywordsStore.keywords" @click="keywordsStore.removeKeyword(keyword)" :key="keyword">
            <p>
                {{ keyword }}
            </p>
            <span>x</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useKeywordsStore } from '@/store/keywords';

export default defineComponent({
    setup() {
        const keywordsStore = useKeywordsStore();

        return { keywordsStore };
    }
})
</script>