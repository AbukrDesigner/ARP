import { Routes } from "@angular/router";
import { MainGuest } from "../../../shared/layouts/main-guest/main-guest";
import { Dashboard } from "./pages/dashboard/dashboard";
import { ControleTest } from "./pages/controle-test/controle-test";
import { GestionStock } from "./pages/gestion-stock/gestion-stock";
import { Signalement } from "./pages/signalement/signalement";

export const GROSSISTE_ROUTES : Routes =[
    {
        path:'',
        component: MainGuest,
        children:[
            {
                path:'',
                component: Dashboard,
                data:{
                    title: 'Dashboard',
                    icon: 'dashboard',
                    url: '/backoffice/grossiste'
                }
            },
            {
                path:'controle-test',
                component: ControleTest,
                data:{
                    title: 'Controle test',
                    icon: 'check',
                    url: '/backoffice/grossiste/controle-test'
                }
            },
            {
                path:'gestion-stock',
                component: GestionStock,
                data:{
                    title: 'Gestion de stock',
                    icon: 'stock',
                    url: '/backoffice/grossiste/gestion-stock'
                }
            },
            {
                path:'signalement',
                component: Signalement,
                data:{
                    title: 'Signalement',
                    icon: 'signalement',
                    url: '/backoffice/grossiste/signalement'
                }
            }
        ]
        
    }
]