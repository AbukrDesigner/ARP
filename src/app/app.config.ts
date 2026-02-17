import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      // On garde le thème Aura mais on désactive le lien avec le dark mode du système
      theme: {
        preset: Aura,
        options: {
          // Au lieu de 'system', on utilise une classe qu'on ne met jamais :
          // le thème restera donc toujours en version claire.
          darkModeSelector: '.app-dark'
        }
      }
    })
  ]
};
