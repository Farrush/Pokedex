import './Form.css'
import { useState } from 'react'

export const Form = (props) => {
    const [pokemon, setPokemon] = useState({
        name: "",
        type: "",
        code: "",
        life: 0,
        atq: 0,
        def: 0,
        vel: 0,
        skill1: "",
        skill2: "",
        image: "",
        active: false
    })
    const submit = (evento) => {
        evento.preventDefault()
        props.sendPokemon(pokemon)
        setPokemon({
            name: "",
            type: "",
            code: "",
            life: 0,
            atq: 0,
            def: 0,
            vel: 0,
            skill1: "",
            skill2: "",
            image: "",
            active: false
        })
    }
    const convertImage = (image) => {
        const fr = new FileReader()

        fr.onload = function (event) {
            const base64Image = event.target.result;
            setPokemon({ ...pokemon, image: base64Image })
        };

        fr.readAsDataURL(image)
    }
    return (
        <form className='form'>
            <h1>Adicione um pokemon</h1>
            <div className='input-field'>
                <label>Código</label>
                <input type='text' minLength={4} maxLength={4} value={pokemon.code} onChange={event => setPokemon({ ...pokemon, code: event.target.value })} />
            </div>
            <div className='input-field'>
                <label>Nome</label>
                <input type='text' minLength={3} maxLength={20} value={pokemon.name} onChange={event => setPokemon({ ...pokemon, name: event.target.value })} />
            </div>
            <div className='input-field'>
                <label>Tipo</label>
                <select value={pokemon.type} onChange={event => setPokemon({ ...pokemon, type: event.target.value })}>
                    <option value={'Água'}>Água</option>
                    <option value={'Fogo'}>Fogo</option>
                    <option value={'Planta'}>Planta</option>
                    <option value={'Elétrico'}>Elétrico</option>
                    <option value={'Dragão'}>Dragão</option>
                    <option value={'Normal'}>Normal</option>
                    <option value={'Fantasma'}>Fantasma</option>
                    <option value={'Veneno'}>Veneno</option>
                    <option value={'Voador'}>Voador</option>
                    <option value={'Lutador'}>Lutador</option>
                    <option value={'Escuridão'}>Escuridão</option>
                </select>
            </div>
            <div className='input-field'>
                <h2>Status</h2>
                <div className='stats'>
                    <input type='number' placeholder='Vida' min={1} value={pokemon.life} onChange={event => setPokemon({ ...pokemon, life: event.target.value })} />
                    <input type='number' placeholder='Ataque' min={1} value={pokemon.atq} onChange={event => setPokemon({ ...pokemon, atq: event.target.value })} />
                    <input type='number' placeholder='Defesa' min={1} value={pokemon.def} onChange={event => setPokemon({ ...pokemon, def: event.target.value })} />
                    <input type='number' placeholder='Velocidade' min={1} value={pokemon.vel} onChange={event => setPokemon({ ...pokemon, vel: event.target.value })} />
                </div>
            </div>
            <div className='input-field'>
                <label>Habilidades</label>
                <input type='text' minLength={3} maxLength={35} value={pokemon.skill1} onChange={event => setPokemon({ ...pokemon, skill1: event.target.value })} />
                <input type='text' minLength={3} maxLength={35} value={pokemon.skill2} onChange={event => setPokemon({ ...pokemon, skill2: event.target.value })} />
            </div>
            <div className='input-field'>
                <label>Imagem</label>
                <input type='file' accept='.png' maxLength={35} onChange={event => convertImage(event.target.files[0])} />
            </div>
            <div className='input-field'>
                <button onClick={evento => submit(evento)}>Submit</button>
            </div>
            <div className='form-footer'>
                <p>Imagem em formato png, de preferência de fundo transparente. (Imagem com fundo fica bem estranho)</p>
                <p>Para encontrar informações e dados de algum pokemon, pesquise https://pokemondb.net/pokedex/ + nome do pokemon</p>
                <a target='_blank' rel="noreferrer" href='https://pokemondb.net/pokedex/pikachu'>https://pokemondb.net/pokedex/pikachu</a>
            </div>
        </form>
    )
}

export default Form