<template>
  <div class="pokedex">
    <Card />
    <nav>
      <ul class="list">
        <NavItem @click="clickPokeListItem(item.codigo)" v-for="item in lista" :nome="item.nome"
          :imagem="'data:image/png;base64,' + item.icon" />
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { computed } from 'vue';
import NavItem from '@/components/NavItem.vue'
import Card from '@/components/Card.vue'
export default defineComponent({
  setup() {
    const store = useStore()
    return {
      store,
      lista: computed(() => store.state.lista),
    }
  },
  components: {
    NavItem,
    Card
  },
  methods: {
    clickPokeListItem(cod: string) {
      this.store.dispatch("RECEBE_POKEMON", cod)
    }
  },
  mounted() {
    this.store.dispatch("RECEBE_LISTA")
  }
})
</script>

<style scoped>
.add {
  position: absolute;
  left: 0;
  top: 0;
  text-decoration-color: #232323;
  background-color: #FCFCFC;
  border-bottom-right-radius: 15px;
  padding: 9px;
  font-size: 20px;
  text-decoration: none;
}
</style>