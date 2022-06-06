import { Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";

import { PrivateRouter } from "./PrivateRouter";

import { DashboardRoutes } from "./DashboardRoutes";



export const AppRouter = () => {
    return (
        <div>

            {/*<Navbar/>*/}
            <Routes>
                
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={
                
                        <PrivateRouter>
                            <DashboardRoutes/>
                        </PrivateRouter>
                   
                    }
                />    

                {/*Route path="/*" element={<DashboardRoutes/>} */}

            </Routes>
            
        </div>
    )
}