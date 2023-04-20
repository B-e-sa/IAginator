<template>
    <div class="px-1 cursor-default bg-zinc-700 flex justify-center items-center">
        <p style="writing-mode: vertical-lr;" class="text-white rotate-180">
            {{ name }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        labelName: String
    },
    setup(props) {
        // eslint-disable-next-line vue/no-setup-props-destructure
        const name = props.labelName;
        return { name };
    }
});
</script>