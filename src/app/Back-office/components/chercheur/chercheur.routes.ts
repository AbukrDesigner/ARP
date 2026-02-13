import { Routes } from "@angular/router";
import { MainGuest } from "../../../shared/layouts/main-guest/main-guest";
import { Dashboard } from "./pages/dashboard/dashboard";
import { DemandeCreate } from "./pages/demande-create/demande-create";
import { ListAmms } from "./pages/list-amms/list-amms";

export const CHERCHEUR_ROUTES : Routes =[
    {
       path:'',
       component : MainGuest,
       children:[
        {
            path: '',
            component: Dashboard,
            data:{
                title: 'Dashboard',
                icon: 'dashboard',
                url: '/backoffice/chercheur'
            },
        },
        {
            path:'demande-create',
            component: DemandeCreate,
            data:{
                title: 'Créer une demande',
                icon: 'add',
                url: '/backoffice/chercheur/demande-create'
            }
        },
        {
            path:'list-amms',
            component: ListAmms,
            data:{
                title: 'Liste des AMMs',
                icon: 'list',
                url: '/backoffice/chercheur/list-amms'
            }
        }
       ]
    }
]