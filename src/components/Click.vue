<template>
    <div>
        <button @click="inc()">Clicked {{ countState.count }} times.</button>
    </div>
</template>

<script>
    import {clickStore} from "../store/click-store";

    export default {
        setup() {
            const inc = () => {
                clickStore.incrementCount()

                // should throw a warning and don't mutate the store
                clickStore.getState().count++
            }

            return {
                countState: clickStore.getState(),
                inc
            }
        }
    }
</script>