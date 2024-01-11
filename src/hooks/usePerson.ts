import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from "vue";


export default function () {


    onBeforeMount(() => {
        console.log("挂载之前")
    })
    onMounted(() => {
        console.log("挂载之后")
    })
    onBeforeUpdate(() => {
        console.log("更新之前")
    })
    onUpdated(() => {
        console.log("更新之后")
    })
    onBeforeUnmount(() => {
        console.log("卸载之前")
    })
    onUnmounted(() => {
        console.log("卸载之后")
    })


}