<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { computed } from 'vue';
import type IPokemon from './interfaces/IPokemon';
export default defineComponent({
setup(){
  const store = useStore()
  const lista = ref("")
  const pokemon = ref("")
  return{
    store,
    lista: computed(()=>store.state.lista),
    pokemon: computed(()=>store.state.pokemon)
  }
}
})
</script>

<template>
    <div class="pokedex">
      <div class="poke-cards">
        <div class="pokemon-card eletric-type open" id="pikachu-card">
                <div class="card-top">
                    <div class="details">
                        <h2 class="name">{{ pokemon.nome }}</h2>
                        <span>#{{pokemon.codigo}}</span>

                    </div>
                    <div class="type">{{pokemon.tipo}}</div>
                    <div class="card-img">
                        <img src="">
                    </div>
                </div>
                <div class="card-info">
                    <div class="status">
                        <h3>Status</h3>
                        <ul>
                            <li>Hp: {{ pokemon.hp }}</li>
                            <li>Ataque: {{ pokemon.atq }}</li>
                            <li>Defesa: {{ pokemon.def }}</li>
                            <li>Velocidade: {{pokemon.vel }}</li>
                            <li>Total: {{ pokemon.hp + pokemon.atq + pokemon.def + pokemon.vel }}</li>
                        </ul>
                    </div>
                    <div class="ability">
                        <h3>Habilidades</h3>
                        <ul>
                            <li>{{ pokemon.habilidade1 }}</li>
                            <li>{{ pokemon.habilidade2 }}</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
      <nav class="list" >
              <ul v-for="item in lista">
                <li class="pokemon"> 
                    <img />
                    <span> {{ item.nome }} </span>
                </li>
              </ul>
        </nav>
    </div>
</template>

<style scoped>

</style>
