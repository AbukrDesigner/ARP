import { Routes } from "@angular/router";
import { MainGuest } from "../../../shared/layouts/main-guest/main-guest";
import { Dashboard } from "./pages/dashboardp/dashboard";
import { DemandesCreate } from "./pages/demandes-create/demandes-create";
import { DemandesList } from "./pages/demandes-list/demandes-list";
import { GestionStock } from "./pages/gestion-stock/gestion-stock";
import { ConformiteTest } from "./pages/conformite-test/conformite-test";
import { SignalementList } from "./pages/signalement-list/signalement-list";
import { SignalementCreate } from "./pages/signalement-create/signalement-create";

export const PHARMACIE_ROUTES : Routes =[
   {
    path:'',
    component: MainGuest,
    children:[
        {
            path: '',
            component: Dashboard,
            data:{
                title: 'Dashboard',
                icon: 'dashboard',
                url: '/backoffice/pharmacie'
            }
        },
        {
            path:'demande-create',
            component: DemandesCreate,
            data:{
                title: 'Créer une demande',
                icon: 'add',
                url: '/backoffice/pharmacie/demande-create'
            }
        },
        {
            path:'demande-list',
            component: DemandesList,
            data:{
                title: 'Liste des demandes',
                icon: 'list',
                url: '/backoffice/pharmacie/demande-list'
            }
        },
        {
            path:'gestion-stock',
            component: GestionStock,
            data:{
                title: 'Gestion du stock',
                icon: 'stock',
                url: '/backoffice/pharmacie/gestion-stock'
            }
        },
        {
            path:'conformite-test',
            component: ConformiteTest,
            data:{
                title: 'Conformité test',
                icon: 'check',
                url: '/backoffice/pharmacie/conformite-test'
            }
        },
        {
            path:'signalement-list',
            component: SignalementList,
            data:{
                title: 'Liste des signalements',
                icon: 'list',
                url: '/backoffice/pharmacie/signalement-list'
            }
        },
        {
            path:'signalement-create',
            component: SignalementCreate,
            data:{
                title: 'Créer un signalement',
                icon: 'add',
                url: '/backoffice/pharmacie/signalement-create'
            }
        },
    ]
   }
]