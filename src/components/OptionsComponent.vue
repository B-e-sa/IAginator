<template>
    <div style="height: 20%;" class="flex h-32 w-full border-b-2 border-zinc-900">
        <SizeSelector />
        <QuantitySelector />
        <KeywordSelector />
        <SelectedKeywords />
        <GenerateBar />
    </div>
</template>

<script lang="ts" setup>
import SizeSelector from './SizeSelector.vue';
import KeywordSelector from './KeywordSelector.vue';
import GenerateBar from './GenerateBar.vue';
import SelectedKeywords from './SelectedKeywords.vue';
import QuantitySelector from './QuantitySelector.vue';
</script>
