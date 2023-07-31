import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import RecipePage from './pages/recipePage/RecipePage';
import RecipesPage from './pages/recipesPage/RecipesPage';
import GlobalStyles from './GlobalStyles';

function App() {
    return(
        <div className="App">
            <GlobalStyles />
            <Routes>
                <Route path="/testtask_beer_recipes_zustand/" element={<Layout/>}>
                    <Route index element={<RecipesPage/>}/>
                    <Route path='/testtask_beer_recipes_zustand/recipe/:id/' element={<RecipePage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;