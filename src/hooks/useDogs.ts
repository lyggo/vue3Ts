import axios, { AxiosError } from "axios";
import { onBeforeMount, reactive } from "vue";

export default function(){
    const dogList  = reactive<string[]>([])
    async function getDog(){
        try {
            const {data} = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            dogList.push(data.message)
        } catch (error) {
            const err = <AxiosError>error
            console.log(err.message)
            
        }
    }

    onBeforeMount(()=>{
        getDog()
    })
    return {dogList,getDog}
}