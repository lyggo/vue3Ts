<template>
    <h2>喜欢的狗</h2>
    <img v-for="(u, index) in dogList" :key="index" :src="(u as
        string)"><br />
    <button @click="getDog">再来⼀只狗</button>
</template>


<script setup lang="ts" name="App">
import useDog from '@/hooks/useDogs'

let { dogList, getDog } = useDog()

</script>

<style>
img {
    height: 100px;
}
</style>