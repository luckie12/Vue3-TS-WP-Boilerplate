<template>
    <div class="main">
        Hello!
        <router-link to="test">Test</router-link>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Main.vue",
    data() {
        return {}
    },
})

</script>

<style scoped lang="sass">
</style>