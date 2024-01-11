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






    </div>
</template>
<script setup lang="ts" name="Hello">
import { ref, reactive, toRefs, toRef, computed, watch } from "vue";

let name = ref("张三")
let age = ref(18)
let gender = ref("男")
let tel = "17777784567"

let car = reactive({
    brand: '奔驰',
    price: 100,
    info: {
        color: "red",
        specs: "low"
    }
})
let phone = ref({
    version: 14,
    name: "iphone"

})


let obj = reactive(
    {
        a: {
            b: {
                c: 666
            }
        }
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

let friend = reactive({
    fname: "李四",
    fage: 18,
    fgender: "女",
    fcar: {
        c1: "奔驰",
        c2: "宝马"

    }

})
let { fname, fgender } = toRefs(friend)
let fage = toRef(friend, "fage")

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
    fage.value += 1
}

function changfName() {
    fname.value = "王五"

}

let marriageStatus = computed({
    get() {
        return name.value + "❤" + fname.value
    },
    set(val) {
        console.log(val)
        name.value = val.split("❤")[0]
        fname.value = val.split("❤")[1]
    }
})


function changMrriageStatus() {
    marriageStatus.value = "张三❤赵六"
}

const stopWatch = watch(age, (newValue, oldValue) => {
    console.log("age 变化了", newValue, oldValue)
    fage.value += 1
    if (age.value > 22) {
        stopWatch()
    }
})

watch(car, (newValue, oldValue) => {
    console.log("car 变化了", newValue, oldValue)
})

watch(obj, (newValue, oldValue) => {
    console.log("obj 变化了", newValue, oldValue)
})

function changNum() {
    obj.a.b.c += 1
}
watch(() => car.info, (newValue, oldValue) => {
    console.log("car info update", newValue, oldValue)
})

watch(() => car.info.color, (newValue, oldValue) => {
    console.log("car color info update", newValue, oldValue)
})

function changColor() {
    car.info.color = "blue"

}
function upgradation() {
    car.info.specs = "most"

}
function upgradationAll() {
    car.info = {
        color: "green",
        specs: "low"
    }
}
watch([() => car.brand, car.info], (newValue, oldValue) => {
    console.log("car info color and specs update", newValue, oldValue)

})


</script>