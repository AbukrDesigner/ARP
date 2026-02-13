import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'frontoffice',
  },
  {
    path:'auth',
    loadChildren:() => import('./Auth/auth.routes').then(
      (m) => m.AUTH_ROUTES,
    )
  },
  {
    path: 'frontoffice',
    loadChildren: () =>
      import('./Front-office/frontoffice.routes').then(
        (m) => m.FRONTOFFICE_ROUTES,
      ),
  },
  {
    path: 'backoffice',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'direction',
      },
      {
        path: 'chercheur',
        loadChildren: () =>
          import('./Back-office/components/chercheur/chercheur.routes').then(
            (m) => m.CHERCHEUR_ROUTES,
          ),
      },
      {
        path: 'direction',
        loadChildren: () =>
          import('./Back-office/components/direction/direction.routes').then(
            (m) => m.DIRECTION_ROUTES,
          ),
      },
      {
        path: 'fabricant',
        loadChildren: () =>
          import('./Back-office/components/fabricant/fabricant.routes').then(
            (m) => m.FABRICANT_ROUTES,
          ),
      },
      {
        path: 'grossiste',
        loadChildren: () =>
          import('./Back-office/components/grossiste/grossiste.routes').then(
            (m) => m.GROSSISTE_ROUTES,
          ),
      },
      {
        path: 'pharmacie',
        loadChildren: () =>
          import('./Back-office/components/pharmacie/pharmacie.routes').then(
            (m) => m.PHARMACIE_ROUTES,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'frontoffice',
  },
];
