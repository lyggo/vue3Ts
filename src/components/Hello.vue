<template>
    <div class="Hello">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>性别：{{ gender }}</h2>
        <button @click="changName">修改名字</button>
        <button @click="changAge">年龄+1</button>
        <button @click="showTel">点我查看联系⽅式</button>
        <h2>汽⻋信息：⼀台{{ car.brand }}汽⻋，价值{{ car.price }}万</h2>
        <button @click="changCarPrice">升值</button>
        <button @click="changCar">换车</button>

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
        


        <h5>work:{{ bairong.beijing.chaoyang.lixinghang }}</h5>
        <h5>home:{{ home.shunyi.nanfaxin.dongyashouhang }}</h5>




    </div>
</template>
<script setup lang="ts" name="Hello">
import { ref, reactive,toRefs,toRef } from "vue";

let name = ref("张三")
let age = ref(18)
let gender = ref("男")
let tel = "17777784567"

let car = reactive({ brand: '奔驰', price: 100 })
let phone = ref({
    version: 14,
    name: "iphone"

})



let games = reactive([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
])

let stars = ref([
    { id: "SSDSS1", name: "蔡徐坤" },
    { id: "SSDSS2", name: "吴亦凡" },
    { id: "SSDSS3", name: "黃子韜" }
])

let bairong = ref({
    beijing: {
        chaoyang: {
            lixinghang: "bairong"
        }
    }

})
let home = reactive({
    shunyi: {
        nanfaxin: {
            dongyashouhang: "home"
        }
    }
})

let friend = reactive({
    fname:"李四",
    fage:18,
    fgender: "女"
    
})
let {fname,fgender} = toRefs(friend)
let fage = toRef(friend,"fage")

function changName() {
    name.value = '李四'
}

function changAge() {
    console.log(age)
    age.value += 1
}

function showTel() {
    alert(tel)
}



function changCarPrice() {
    car.price += 1
}

// reactive 重新分配⼀个新对象，会失去响应式（可以使⽤ Object.assign 去整体替换）
function changCar() {
    car = Object.assign(car, { brand: '宝马', price: 110 })
}

function changFirstGameName() {
    games[0].name = "To The Moon"
}

function killSuperStar() {
    if (stars.value.length > 1) {
        let index = Math.floor(Math.random() * stars.value.length);
        stars.value.splice(index, 1);
    } else {
        alert("不能再杀了eeee");
    }
}

function changPhone() {
    phone.value = {
        version: 15,
        name: "iphone"

    }
}

function changfAge() {
    fage.value +=1
}

</script>