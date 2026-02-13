import { Routes } from "@angular/router";
import { MainGuest } from "../../../shared/layouts/main-guest/main-guest";
import { Dashboard } from "./pages/dashboard/dashboard";
import { AjouterFabricant } from "./pages/ajouter-fabricant/ajouter-fabricant";
import { Controle } from "./pages/controle/controle";
import { DetailsAmms } from "./pages/details-amms/details-amms";
import { ListAmms } from "./pages/list-amms/list-amms";
import { EssaiList } from "./pages/essai-list/essai-list";
import { EssaiDetails } from "./pages/essai-details/essai-details";
import { OfficineList } from "./pages/officine-list/officine-list";
import { OfficineDetails } from "./pages/officine-details/officine-details";
import { Signalement } from "./pages/signalement/signalement";
import { FabricantList } from "./pages/fabricant-list/fabricant-list";

export const DIRECTION_ROUTES : Routes =[
    {
        path:'',
        component: MainGuest,
        children:[
            {
                path:'',
                component: Dashboard,
                data:{
                    title: 'Tableau de bord',
                    icon: 'dashboard',
                    url: '/backoffice/direction'
                }
            },
            {
                path:'ajouter-fabricant',
                component: AjouterFabricant,
                data:{
                    title: 'Ajouter un fabricant',
                    icon: 'add',
                    url: '/backoffice/direction/ajouter-fabricant'
                }
            },
            {
                path:'controle',
                component: Controle,
                data:{
                    title: 'Controle',
                    icon: 'check',
                    url: '/backoffice/direction/controle'
                }
            },
            {
                path:'detail-amms/:id',
                component: DetailsAmms,
                data:{
                    title: 'Details AMMS',
                    icon: 'details',
                    url: '/backoffice/direction/detail-amms/:id'
                }
            },
            {
                path:'list-amms',
                component: ListAmms,
                data:{
                    title: 'Liste des AMMS',
                    icon: 'list',
                    url: '/backoffice/direction/list-amms'
                }
            },
            {
                path:'essai-list',
                component: EssaiList,
                data:{
                    title: 'Liste des essais',
                    icon: 'list',
                    url: '/backoffice/direction/essai-list'
                }
            },
            {
                path:'essai-detail/:id',
                component: EssaiDetails,
                data:{
                    title: 'Details essai',
                    icon: 'details',
                    url: '/backoffice/direction/essai-detail/:id'
                }
            },
            {
                path:'officine-list',
                component: OfficineList,
                data:{
                    title: 'Liste des officines',
                    icon: 'list',
                    url: '/backoffice/direction/officine-list'
                }
            },
            {
                path: 'officine-detail/:id',
                component: OfficineDetails,
                data:{
                    title: 'Details officine',
                    icon: 'details',
                    url: '/backoffice/direction/offecine-detail/:id'
                }
            },
            {
                path:'sigmalement',
                component: Signalement,
                data:{
                    title: 'Signalement',
                    icon: 'signalement',
                    url: '/backoffice/direction/sigmalement'
                }
            },
            {
                path:'fabricant-list',
                component: FabricantList,
                data:{
                    title: 'Liste des fabricants',
                    icon: 'list',
                    url: '/backoffice/direction/fabricant-list'
                }
            }

        ]
    }
]