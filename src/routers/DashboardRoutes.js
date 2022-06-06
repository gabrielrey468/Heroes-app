import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { SuperHero } from "../components/hero/SuperHero";


export const DashboardRoutes = () => {
    return (
        <>
        
            <Navbar/>

            <div className="container mt-5">

                <Routes>
                
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<SuperHero/>}/>
                
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>

            </div>

        </>
    )
}