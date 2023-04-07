import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type IPokemon from '../interfaces/IPokemon'
import type IListaPoke from '../interfaces/IListaPoke'
import http from '../http/http'
export interface Estado {
    pokemon: IPokemon,
    lista: IListaPoke[]
}
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        pokemon: {
            codigo: "x",
            nome: "x",
            tipo: "x",
            habilidade1: "x",
            habilidade2: "x",
            hp: 0,
            atq: 0,
            def: 0,
            vel: 0,
            img: ""
        },
        lista: [
            {
                codigo: "",
                nome: "",
                icon: ""
            }
        ]
    },
    mutations: {
        ["CARREGA_LISTA"](store, lista: IListaPoke[]) {
            store.lista = lista
        },
        ["CARREGA_POKEMON"](store, poke: IPokemon){
            store.pokemon = poke
        }

    },
    actions: {

        ["RECEBE_LISTA"]({ commit }) {

            http.get('nav-list')
                .then(response => commit("CARREGA_LISTA", response.data))

        },
        ["RECEBE_POKEMON"]({ commit }, cod){
            http.get('pokemon/'+cod)
                .then(response => commit("CARREGA_POKEMON", response.data))
        }
    }

})
export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}
