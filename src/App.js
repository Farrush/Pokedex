import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import NavItem from './components/Navigation-item'
import Form from './components/Form';

function App() {
  const [pokemons,setPokemons] = useState([{
    name:"Pikachu",
    type:"Elétrico",
    code:"0025",
    life:35,
    atq:55,
    def:40,
    vel:90,
    skill1:"Choque do Trovão",
    skill2:"Cauda de Ferro",
    image:"/images/pikachu.png",
    active: true
  },
  {
    name:"Charmander",
    type:"Fogo",
    code:"0004",
    life:39,
    atq:52,
    def:43,
    vel:70,
    skill1:"Presa de Fogo",
    skill2:"Lança Chamas",
    image:"/images/charmander.png",
    active: false
  },
  {
    name:"Squirtle",
    type:"Água",
    code:"0007",
    life:44,
    atq:48,
    def:65,
    vel:43,
    skill1:"Jato de Água",
    skill2:"Cauda de Água",
    image:"/images/squirtle.png",
    active: false
  },
  {
    name:"Bulbasaur",
    type:"Planta",
    code:"0001",
    life:45,
    atq:49,
    def:49,
    vel:45,
    skill1:"Bomba de Semente",
    skill2:"Folha Navalha",
    image:"/images/bulbasaur.png",
    active: false
  },
  {
    name:"Gyarados",
    type:"Água",
    code:"0130",
    life:95,
    atq:125,
    def:79,
    vel:81,
    skill1:"Cachoeira",
    skill2:"Dança da Chuva",
    image:"/images/gyarados.png",
    active: false
  },
  {
    name:"Gengar",
    type:"Fantasma",
    code:"0094",
    life:60,
    atq:65,
    def:60,
    vel:110,
    skill1:"Feitiço",
    skill2:"Comedor de Sonhos",
    image:"/images/gengar.png",
    active: false
  },
  {
    name:"Dragonite",
    type:"Dragão",
    code:"0149",
    life:91,
    atq:134,
    def:95,
    vel:80,
    skill1:"Dança do Dragão",
    skill2:"Ultraje",
    image:"/images/dragonite.png",
    active: false
  }])

  const [pokemon, setPokemon] = useState({
    name:"Pikachu",
    type:"Elétrico",
    code:"0025",
    life:40,
    atq:39,
    def:29,
    vel:47,
    skill1:"Choque do trovão",
    skill2:"Investida",
    image:"/images/pikachu.png",
    active: true
  });

  useEffect(() => {
    const active = pokemons.find(pokemon => pokemon.active);
    setPokemon(active);
  }, [pokemons]);

  //Troca de pokemon exibido no card principal
  function setActivePokemon(code){
    
    const novoArray = pokemons.map(pokemon => {
      return({
        ...pokemon,
        active: pokemon.code === code? true : false
      })
    })

    setPokemons(novoArray)
  }
  function addPokemon(obj){
    //console.log(obj)
    if(pokemons.filter(poke => poke.code === obj.code).length < 1 || pokemons.filter(poke => poke.name === obj.name).length < 1){
      setPokemons([...pokemons,obj])
    }
  }

  return (
    <div className="App">
      <div className='pokedex'>
        <Card
          pokemon={pokemon}
        />
        <nav className="listagem">
          <ul>
            {pokemons.map(poke => {
              return(
              <NavItem
                key={poke.code}
                name={poke.name}
                icon={poke.image}
                active={poke.active}
                code={poke.code}
                clicked={code => setActivePokemon(code)}
              />)
            })}
          </ul>
        </nav>
      </div>
      <Form
        sendPokemon={obj => addPokemon(obj)}
        />
    </div>
  );
}

export default App;
