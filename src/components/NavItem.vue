<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "NavItem",
    data(){
        return{
            wasActivated: false
        }
    },
    props: {
        nome: {
            type: String
        },
        imagem: {
            type: String
        }
    },
    methods:{
    }

})
</script>
<template>
    <li class="pokemon">
        <img :src="imagem"/>
        <span> {{nome}} </span>
    </li>
</template>

<style scoped>
.pokemon{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:10px;
    background-color: #4f4c4d;
    padding:5px;
    cursor:pointer;
    border-top-left-radius:30px;
    border-bottom-right-radius: 30px;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    min-height:70px;
    color: #fefefe;
}
.pokemon img{
    width:29%;
    border-radius:50%;
}
.pokemon:hover{
    transform:scale(1.10);
}
</style>