<template>
    <KeywordsLabel label-name="Keywords" />
    <div>
        <KeywordBar options-name="Lightning" :options-array="lightOptions" />
        <KeywordBar options-name="Styles" :options-array="styleOptions" />
        <KeywordBar options-name="Quality" :options-array="qualityOptions" />
    </div>
</template>

<script lang="ts">
import KeywordBar from './KeywordBar.vue';
import { defineComponent } from 'vue';
import KeywordsLabel from './KeywordsLabel.vue';

export default defineComponent({
    setup() {
        const lightOptions = [
            "Studio Lighting",
            "Soft Lighting",
            "Realistic Lightning",
            "Realistic Shadows"
        ];
        const styleOptions = [
            "Concept Art",
            "Photography",
            "Art Noveau",
            "Ukiyo-e",
            "Painting",
            "anime"
        ];
        const qualityOptions = [
            "Perfect",
            "Studio Quality",
            "8k / HD",
            "Contrast",
            "Detailed",
            "Smooth"
        ];
        return { lightOptions, qualityOptions, styleOptions };
    },
    components: { KeywordBar, KeywordsLabel }
})
</script>