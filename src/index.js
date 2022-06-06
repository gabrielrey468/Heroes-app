import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { HeroesApp } from './HeroesApp';




const container = document.getElementById('root')
const root = createRoot(container); 
root.render(
    <Router><HeroesApp /></Router> )