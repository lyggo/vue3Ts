<template>
    <Hello ref="user" /><br/>
    <h2>标签的 ref 属性：</h2><br/>
    <button @click="test">App组件获取属性</button><br/>
    
</template>

<script setup lang="ts" name="App">
import Hello from "@/components/Hello.vue";

import { ref } from "vue";

let user = ref()
function test() {
    console.log(user.value.name)
    console.log(user.value.age)

}


</script>


<style scoped></style>
