<template>
    <div v-if="isInitialized">
        <button @click="inc()">Clicked {{ countState.count }} times.</button>
    </div>
</template>

<script>
    import {clickStore} from "../store/click-store";
    import {onBeforeMount} from 'vue'

    export default {
        setup() {
            onBeforeMount(async () => await clickStore.init())

            console.log("1");

            const inc = () => {
                clickStore.incrementCount()

                // should throw a warning and don't mutate the store
                clickStore.getState().count++
            }

            return {
                countState: clickStore.getState(),
                isInitialized: clickStore.getIsInitialized(),
                inc
            }
        }
    }
</script>