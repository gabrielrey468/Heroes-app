import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../../selectors/getHeroById"



export const SuperHero = () => {

    const { heroeId } = useParams()

    const hero = getHeroeById(heroeId)

    const navigate = useNavigate()

    const hanledReturn = () => {
        navigate( -1 )
    }

    if (!hero) {
        return <Navigate to='/' />
    }


    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    const imagePath = `/assets/${id}.jpg`
    

    return (     

        <div className="row mt-5">
            <div className="col-5">
                    <img
                        src={ imagePath }
                        alt={ superhero } 
                        className="img-thumbnail animate__animated animate__fadeInDown"
                    />
            
                <div className="col-8 animate__animated animate__fadeInDown">
                    <h3>{ hero.superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                        <li className="list-group-item"> <b>publisher:</b> { publisher } </li>
                        <li className="list-group-item"> <b>First_appearance:</b> { first_appearance } </li>
                    </ul>

                    <h5 className="mt-3">Characters</h5>
                    <p>{ characters }</p>

                    <button 
                        className="btn btn-outline-info"
                        onClick={hanledReturn}
                        >
                        Regresar
                    </button>

                </div>

                
            </div>
        </div>
    )
}