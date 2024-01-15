import { reactive,watch } from "vue";

export default function () {

    const obj = reactive(
        {
            a: {
                b: {
                    c: 666
                }
            }
        })

    

    watch(obj, (newValue, oldValue) => {
        console.log("obj 变化了", newValue, oldValue)
    })

    function changNum() {
        obj.a.b.c += 1
    }

    return {obj,changNum}
    
}