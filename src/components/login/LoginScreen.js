import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { types } from "../../types/types"


export const LoginScreen = () => {

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const hanledLogin = () => {

        const action = {
            type: types.login,
            payload: {
            name: 'Gabriel'
            }
        }


       
        dispatch(action)

         navigate('/marvel', {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={hanledLogin}
            >
                Login
            </button>
            
        </div>
    )
}