<template>
    <div class="poke-cards">
        <div class="pokemon-card" :class="type">
                <div class="card-top">
                    <div class="details">
                        <h2 class="name">{{ pokemon.nome }}</h2>
                        <span>#{{pokemon.codigo}}</span>

                    </div>
                    <div class="type">{{pokemon.tipo}}</div>
                    <div class="card-img">
                        <img :src="'data:image/png;base64,'+pokemon.img">
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
</template>

<script lang="ts">
import { store } from '@/store';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store'
export default defineComponent({
    name:"PokeCard",
    setup(){
        const pokemon = ref("")
        const store = useStore()
        return{
            store,
            pokemon: computed(()=>store.state.pokemon)
        }
    },
    mounted(){
        this.store.dispatch("RECEBE_POKEMON", '0025')
    },
    computed:{
        type(){
            let type = ''
            switch(this.pokemon.tipo){
                case 'Dragão':
                    type = 'dragon-type'
                    break;
                    case 'Elétrico':
                    type = 'eletric-type'
                    break;
                    case 'Água':
                    type = 'water-type'
                    break;
                    case 'Fogo':
                    type = 'fire-type'
                    break;
                    case 'Grama':
                    type = 'grass-type'
                    break;
                    case 'Fantasma':
                    type = 'ghost-type'
                    break;
                    case 'Normal':
                    type = 'normal-type'
                    break;
                    default:
                        type = 'normal-type'
            }
            return type
        }
    }
})
</script>