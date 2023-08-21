import logo from '../assets/images/deliveroo-logo.png'
import banner from '../assets/images/header-image.jpg'
import '../App.css'

function Header() {

  return (
    <>
        <nav>
            <div className='container'>
                <img src={logo} alt="" className='logo' />
            </div>
        </nav>
        <div className='container'>
            <div>
                <h1>Le Pain Quotidien - Montorgueil</h1>
                <p>Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.</p>
            </div>
            <img className='banner-img' src={banner} alt="" />
        </div>
    </>
  )
}

export default Header
