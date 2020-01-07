<template>
    <div>
        <h1>Reactivity</h1>
        <div class="row">
            <div class="col">
                <button @click="changeItemInArray">Change Item in Array</button>
                <button @click="changeArrayLength">Change Array Length</button>
                <button @click="pushToBasicArray">Push to Array</button>
                <div>{{basicArray}} | {{basicArray.items.length}}</div>
            </div>
            <div class="col">
                <button @click="addFieldToBasicObject">Add Field</button>
                <button @click="removeFieldFromBasicObject">Remove Field</button>
                <div>{{basicObject}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {reactive} from "vue";

    export default {
        setup() {
            let basicArray = reactive({items: ['a', 'b', 'c']})
            let changeArrayLength = () => basicArray.items.length = 2
            let changeItemInArray = () => basicArray.items[0] = 'Test'
            let pushToBasicArray = () => basicArray.items.push('d')

            let basicObject = reactive({userProfile: {name: "Mario"}})
            let addFieldToBasicObject = () => basicObject.userProfile.age = 99
            let removeFieldFromBasicObject = () => delete basicObject.userProfile.name


            return {
                basicArray,
                changeItemInArray,
                changeArrayLength,
                pushToBasicArray,

                basicObject,
                addFieldToBasicObject,
                removeFieldFromBasicObject
            }
        }
    }
</script>

<style scoped>
    .row {
        display: flex;
    }

    .col {
        flex: 1 0 auto;
    }
</style>