import './Card.css'

export const Card = ({pokemon}) => {
  let cor
  switch(pokemon.type){
    case 'Elétrico':
        cor='#EDCA00AA'
      break;
    case 'Fogo':
        cor='#EE1F00AA'
      break;
    case 'Água':
        cor='#0088EEAA'
      break;
    case 'Planta':
        cor='#22CC44AA'
      break;
    case 'Fantasma':
        cor='#7600EEAA'
      break;
    case 'Dragão':
        cor='#3355FEAA'
      break;
    case 'Normal':
        cor='#666666AA'
      break;
  }
  const css={backgroundColor:cor}
  return (
    <div className="card" style={css}>
      <div className="card-top">
        <div className="details">
          <h2 className="name">{pokemon.name}</h2>
          <span>#{pokemon.code}</span>

        </div>
        <div className="type">{pokemon.type}</div>
        <div className="card-img">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </div>
      <div className="card-info">
        <div className="status">
          <h3>Status</h3>
          <ul>
            <li>Hp: {pokemon.life}</li>
            <li>Ataque: {pokemon.atq}</li>
            <li>Defesa: {pokemon.def}</li>
            <li>Velocidade: {pokemon.vel}</li>
            <li>Total: {pokemon.life+pokemon.atq+pokemon.def+pokemon.vel}</li>
          </ul>
        </div>
        <div className="ability">
          <h3>Habilidades</h3>
          <ul>
            <li>{pokemon.skill1}</li>
            <li>{pokemon.skill2}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card