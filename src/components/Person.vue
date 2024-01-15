<template>
    <div>
        <h2>defineProps 使用</h2>
        <ul>
            <li v-for="person in list" :key="person.name">{{ person.name }}-{{ person.age }}-{{ person.gender }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
import { type Persons } from "@/types/PersonInter";
import usePerson from "@/hooks/usePerson";

const props = withDefaults(defineProps<{ list?: Persons }>(), {
    list: () => {
        return [
            { name: 'xiaozhupeiqi', age: 5, gender: "男" }
        ];
    }
})
console.log(props)

usePerson()



</script>

