<template>
    <div class="Hello">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>性别：{{ gender }}</h2>
        <button @click="changName">修改名字</button>
        <button @click="changAge">年龄+1</button>
        <button @click="showTel">点我查看联系⽅式</button>
        <h2>汽⻋信息：⼀台{{ car.brand }}汽⻋，价值{{ car.price }}万,颜色：{{ car.info.color }},规格：{{ car.info.specs }}</h2>
        <button @click="changCarPrice">升值</button>
        <button @click="changCar">换车</button>
        <button @click="changColor">改色</button>
        <button @click="upgradation">升级</button>
        <button @click="upgradationAll">改全套</button>

        <h2>手机信息：⼀台{{ phone.name }}手机，型号{{ phone.version }}</h2>
        <button @click="changPhone">换手机</button>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changFirstGameName">修改游戏一名字</button>
        <h2>喜爱的明星列表：</h2>
        <ul>
            <li v-for="star in stars" :key="star.id">{{ star.name }}</li>
        </ul>
        <button @click="killSuperStar">随机杀一人</button>
        <h2>朋友信息：</h2>
        <ul>
            <li>姓名：{{ fname }}</li>
            <li>年龄：{{ fage }}</li>
            <li>性别：{{ fgender }}</li>
        </ul>
        <button @click="changfAge">年龄+1</button>
        <button @click="changfName">修改朋友名字</button>
        <h2>亲密状态：</h2>
        <h4>{{ marriageStatus }}</h4>
        <button @click="changMrriageStatus">修改亲密关系</button>
        <h2>幸运数字：</h2>
        <h4>{{ obj.a.b.c }}</h4>
        <button @click="changNum">修改数字</button>

        <Person :list="persons" />
        <!-- <Person/> -->
        <Dog />

    </div>
</template>
<script setup lang="ts" name="Hello">
import { defineExpose, reactive } from "vue";

import useTest from "@/hooks/useTest";
import useUser from "@/hooks/useUser";

import Person from "@/components/Person.vue";
import Dog from "@/components/Dog.vue"

import { type Persons } from "@/types/PersonInter";

let persons = reactive<Persons>([
    { name: "lisi", age: 18, gender: "男" },
    { name: "zhaosi", age: 18, gender: "男" },
    { name: "wangwu", age: 18, gender: "男" }
])





const { obj, changNum } = useTest()
const { name, age, gender, fname, fage, fgender, car, phone, games, stars, marriageStatus, changAge, changCar, changCarPrice,
    changColor, changFirstGameName, changMrriageStatus, changName, changPhone, changfAge, changfName,
    showTel, upgradation, upgradationAll, killSuperStar } = useUser()



defineExpose({ name, age })

</script>