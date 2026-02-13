import { Routes } from "@angular/router";
import { MainPortail } from "../shared/layouts/main-portail/main-portail";
import { Login } from "../Auth/components/login/login";
import { Portail } from "./components/pages/portail/portail";

export const FRONTOFFICE_ROUTES : Routes = [
    {
        path: '',
        component: MainPortail,
        children:[
            {
                path: '',
                component: Portail,
                data:{
                    title: 'Accueil',
                    icon: 'home',
                    url: '/'
                }
            },
        ]
    }
]