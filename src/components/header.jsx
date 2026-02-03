import { Link } from "react-router-dom";
import "./header.css"
function Header() {
  return (
    <header>
        <div className="headercontainer">
            <img src="./images/лого школи 1.png" alt="" className="headerimg"></img>
            <div className="headertext">

                <h4 className="headertextitem"><Link to="/">Головна</Link></h4>
                <h4 className="headertextitem"><Link to="/index2">Про нас</Link></h4>
                <h4 className="headertextitem"> <Link to="/index3">Математика</Link></h4>  
                
                <button className="headerbutton"><p className="headerbuttontext">Приєднатися</p></button>
                
            </div>
        </div>
    </header>
  )
}
export default Header