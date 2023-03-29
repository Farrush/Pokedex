<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { computed } from 'vue';
import NavItem from './components/NavItem.vue'
import Card from './components/Card.vue'
export default defineComponent({
setup(){
  const store = useStore()
  const lista = ref("")
  const pokemon = ref("")
  return{
    store,
    lista: computed(()=>store.state.lista),
  }
},
components:{
    NavItem,
    Card
},
methods:{
    clickPokeListItem(cod: string){
        this.store.dispatch("RECEBE_POKEMON", cod)
    }
},
mounted(){
    this.store.dispatch("RECEBE_LISTA")
}
})
</script>

<template>
    <div class="pokedex">
      <Card/>
      <nav class="list" >
              <ul >
                <NavItem @click="clickPokeListItem(item.codigo)" v-for="item in lista" :nome="item.nome" :imagem="'data:image/png;base64,'+item.icon"/>
              </ul>
        </nav>
    </div>
</template>

<style scoped>

</style>
