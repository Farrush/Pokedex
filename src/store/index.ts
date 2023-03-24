import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type IPokemon from '../interfaces/IPokemon'
import type IListaPoke from '../interfaces/IListaPoke'
export interface Estado {
    pokemon: IPokemon,
    lista: IListaPoke[]
} 
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        pokemon:{
            codigo: "171",
            nome: "monpoke",
            tipo: "bolo",
            habilidade1: "soco",
            habilidade2: "chute",
            hp: 2,
            atq: 3,
            def: 5,
            vel: 1,
            img: ""
        },
        lista:[
            {
            codigo: "0025",
            nome: "pikachu",
            icon: "naodda"
            },
            {
                codigo: "0095",
                nome: "gengar",
                icon: "naosdadda"
            }
        ]
    },
    mutations: {

    },
    actions: {
        //criar uma action que
        //faz um select codigo, icon from pokemons
        //salva cada um na store em "lista"
    }

  })

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}