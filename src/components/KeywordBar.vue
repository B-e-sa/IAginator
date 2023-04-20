<template>
    <div @click="keywordsStore.changeActiveOption(name)" style="height: 33.3%;"
        class="select-none bg-black hover:bg-zinc-800 text-white w-48 flex justify-center items-center cursor-pointer">
        <p>
            {{ name }}
        </p>
    </div>
    <div v-if="keywordsStore.activeOption === name" class="select-none bg-zinc-500 w-48 absolute">
        <div @click="() => keywordsStore.addKeyword(option)" v-for="option in options" :key="option"
            class="flex justify-between px-1 cursor-pointer hover:bg-zinc-400">
            <p class="text-white">{{ option }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from "vue";
import { useKeywordsStore } from "@/store/keywords";

export default defineComponent({
    props: {
        optionsArray: Array as PropType<Array<string>>,
        optionsName: String,
    },
    setup(props) {
        const options = ref(props.optionsArray)
        const name = ref(props.optionsName)
        const keywordsStore = useKeywordsStore();

        return { options, name, keywordsStore };
    }
})

</script>