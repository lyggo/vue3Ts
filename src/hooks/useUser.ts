import { ref, reactive, toRefs, toRef, computed, watch, watchEffect } from "vue";

export default function () {
    const name = ref("张三")
    const age = ref(18)
    const gender = ref("男")
    const tel = "17777784567"

    let car = reactive({
        brand: '奔驰',
        price: 100,
        info: {
            color: "red",
            specs: "low"
        }
    })
    const phone = ref({
        version: 14,
        name: "iphone"

    })


    const games = reactive([
        { id: 'ahsgdyfa01', name: '英雄联盟' },
        { id: 'ahsgdyfa02', name: '王者荣耀' },
        { id: 'ahsgdyfa03', name: '原神' }
    ])

    const stars = ref([
        { id: "SSDSS1", name: "蔡徐坤" },
        { id: "SSDSS2", name: "吴亦凡" },
        { id: "SSDSS3", name: "黃子韜" }
    ])

    const friend = reactive({
        fname: "李四",
        fage: 18,
        fgender: "女",
        fcar: {
            c1: "奔驰",
            c2: "宝马"

        }

    })

    const { fname, fgender } = toRefs(friend)
    const fage = toRef(friend, "fage")


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
            const index = Math.floor(Math.random() * stars.value.length);
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

    const marriageStatus = computed({
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
    // 深度监视
    watch([() => car.brand, car.info], (newValue, oldValue) => {
        console.log("car info color and specs update", newValue, oldValue)

    }, { deep: true })


    const watchStop = watchEffect(() => {
        if (Math.abs(age.value - fage.value) <= 3) {
            console.log("可")
        } else {
            console.log("不可")
            watchStop()

        }
    })

    return {
        name, age, gender, fname, fage, fgender, car, phone, games, stars, marriageStatus, changAge, changCar, changCarPrice,
        changColor, changFirstGameName, changMrriageStatus, changName, changPhone, changfAge, changfName,
        showTel, upgradation, upgradationAll, killSuperStar
    }

}