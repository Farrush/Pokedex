import './NavItem.css'

export const NavItem = ({code, name, icon, active, clicked}) => {
    function changePokemon(code){
        clicked(code)
    }
    return(
        <li className={`pokemon ${active?"ativo":""}`} onClick={() => changePokemon(code)}> 
            <img src={icon} alt={"Ícone do "+name}/>
            <span>{name}</span>
        </li>
    )
}

export default NavItem