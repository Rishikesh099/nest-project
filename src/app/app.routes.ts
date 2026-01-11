import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Recipes } from './pages/recipes/recipes';
import { RecipeDetails } from './pages/recipe-details/recipe-details';

export const routes: Routes = [
    {   path: '',
        component: Home
 
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'contact',
        component: Contact,
    },
    {
        path: 'recipes',
        component: Recipes,
    },
    {
        path: 'recipe-details/:id',
        component: RecipeDetails,
    },
];
