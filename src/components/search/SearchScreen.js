import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"

import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../../selectors/getHeroesByNames"
import { HeroCard } from "../hero/HeroCard"
import { useMemo } from "react"



export const SearchScreen = () => {

    const navigate = useNavigate()

    const location = useLocation()

    // const hero = useMemo( () => getHeroesByName(heroeId), [heroeId])
    //console.log(hero)

    const { q = '' } = queryString.parse(location.search)
    
    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    const {searchText} = formValues

    const heroesFileted = useMemo( () => getHeroesByName(q), [q] )

    const hanledSearch = (e) => {
            e.preventDefault()
            navigate(`?q=${searchText}`)    
    }

    return (

        <>
            
            <h1>Busquedas</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={ hanledSearch }>

                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                            onClick={hanledSearch}
                        >
                            Buscar...
                        </button>
 

                    </form>

                </div>

                <div className="container bg-blue col-10 p-5 animate__animated animate__fadeInLeft">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar un heroe</div>
                            : ( heroesFileted.length === 0 )
                                && <div className="alert alert-danger">No hay Resultados</div>
                    }

                    {
                        heroesFileted.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
            
        </>
    )
}