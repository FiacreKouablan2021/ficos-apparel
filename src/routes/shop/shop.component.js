import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

//import { useContext } from "react";
//import CategoryPreview from "../../components/category-preview/category-preview.component";
import './shop.styles.scss';
//import { CategoriesContext } from "../../contexts/categories.context";



const Shop = () =>{

    return (
        <Routes>
            <Route index element ={<CategoriesPreview />} />
            <Route path=":category" element ={<Category />} />
        </Routes>
    )
}

export default Shop;