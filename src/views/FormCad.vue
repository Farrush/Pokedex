<template>
    <form class="form" action="" v-on:submit.prevent="submit()" target="_self" method="post">
        <h2>Adicione um pokemon</h2>
        <div class="form-group">
            <label for="code">Código</label>
            <input name="code" id="code" type="text" v-model="code"/>

            <label for="name">Nome</label>
            <input name="name" id="name" type="text" v-model="name"/>
        </div>
        <h2>Habilidades</h2>
        <div class="form-group">
            <label for="skill1">Habilidade 1</label>
            <input name="skill1" id="skill1" type="text" v-model="skill1"/>

            <label for="skill2">Habilidade 2</label>
            <input name="skill2" id="skill2" type="text" v-model="skill2"/>
        </div>
        <h2>Status</h2>
        <div class="form-group">
            <label for="hp">Vida</label>
            <input name="hp" id="hp" type="number" min="0" v-model="hp"/>

            <label for="atq">Ataque</label>
            <input name="atq" id="atq" type="number" min="0" v-model="atq"/>

            <label for="def">Defesa</label>
            <input name="def" id="def" type="number" min="0" v-model="def"/>

            <label for="vel">Velocidade</label>
            <input name="vel" id="vel" type="number" min="0" v-model="vel"/>
        </div>
        <div class="form-group">
            <label for="type">Tipo:</label>
            <select id="type" name="type" size="1" v-model="type">
                <option value="Fogo">Fogo</option>
                <option value="Água">Agua</option>
                <option value="Pedra">Pedra</option>
                <option value="Dragão">Dragão</option>
                <option value="Fantasma">Fantasma</option>
                <option value="Elétrico">Elétrico</option>
                <option value="Grama">Grama</option>
                <option value="Normal">Normal</option>
                <option value="Voador">Voador</option>
                <option value="Lutador">Lutador</option>
                <option value="Escuridão">Escuridão</option>
            </select>
        </div>
        <div class="file-group">
            <label for="imagem">Imagem</label>
            <input type="file" id="imagem" name="imagem" :ref="el => imagem = el" v-on:change="converterParaBase64(imagem.value.files[0], 'img')"/>
        </div>
        <div class="file-group">
            <label for="icone">Ícone</label>
            <input type="file" id="icone" name="icone" :ref="el => icone = el" v-on:change="converterParaBase64(icone.value.files[0], 'icon')">
        </div>
        <input id="submit" type="submit" value="Submit">
    </form>
</template>

<script lang="ts">
import http from '../http/http'
import { defineComponent, ref} from 'vue'
import { formToJSON } from 'axios'

export default defineComponent({

    setup(){
        const code = ref('')
        const name = ref('')
        const skill1 = ref('')
        const skill2 = ref('')
        const type = ref('')
        const hp = ref('')
        const atq = ref('')
        const def = ref('')
        const vel = ref('')
        const img = ref('')
        const icon = ref('')
        const icone = ref()
        const imagem = ref()

        function converterParaBase64(file: File, id: string){
            const reader = new FileReader()
            let base64
            reader.onload = function() {
                base64 = reader.result
                if(id == 'img'){
                    img.value = base64 as string
                }
                else if(id == 'icon'){
                    icon.value = base64 as string
                }
            };
            reader.readAsDataURL(file);
   
        }
        function submit(){
            let formData = new FormData()
            
            formData.append('code', code.value as unknown as string)
            formData.append('name', name.value as unknown as string)
            formData.append('type', type.value as unknown as string)
            formData.append('sk1', skill1.value as unknown as string)
            formData.append('sk2', skill2.value as unknown as string)
            formData.append('hp', hp.value as unknown as string)
            formData.append('atq', atq.value as unknown as string)
            formData.append('def', def.value as unknown as string)
            formData.append('img', img.value as unknown as string)
            formData.append('icon', icon.value as unknown as string)

            http.post('/pokemon/add', formToJSON(formData) )
            /*http.post('/pokemon/add', {
                code: code,
                nome: name,
                type: type,
                sk1: skill1,
                sk2: skill2,
                hp: hp,
                atq: atq,
                def: def,
                vel: vel,
                img: img,
                icon: icon
            })*/
        }
        
        return{
            code,
            name,
            skill1,
            skill2,
            type,
            hp,
            atq,
            def,
            vel,
            img,
            icon,
            submit,
            converterParaBase64,
            imagem,
            icone
        }
    },
        
    })
</script>

<style scoped>
label{
    margin: 0px 2px;
}
.form{
    font-size: 17px;
    text-align: center;
    padding:10px;
    width: 40vw;
    height: 95vh;
    border-radius: 15px;
    margin: 20px auto;
    background-color: #fafafabb;
    -webkit-box-shadow: -1px 3px 30px 1px rgba(0,0,0,0.5);
    -moz-box-shadow: -1px 3px 30px 1px rgba(0,0,0,0.5);
    box-shadow: -1px 3px 30px 1px rgba(0,0,0,0.5);
}
h2{
    font-size: 20px;
    margin-bottom: -10px;
}
.form-group{
    padding: 10px 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-group label{
    align-self: flex-start;
    margin-left: 30px;
}
.form-group input, .form-group select{
    width: 100%;
    padding:3px 5px;
    border-radius: 5px;
    border-color: #0005;
}
.file-group{
    margin: 10px;
    display: flex;
    justify-content: flex-start;
}
#submit{
    padding: 8px 5px;
    border-radius: 12px;
    width: 200px;
}
</style>