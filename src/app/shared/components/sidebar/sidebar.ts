import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { NgFor } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

type SidebarItem = {
  label: string;
  icon: string;
  route: string;
  isActive?: boolean;
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  @Output() navigate = new EventEmitter<void>();

  items: SidebarItem[] = [];

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.updateMenu(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateMenu(event.urlAfterRedirects || event.url);
      }
    });
  }

  private updateMenu(url: string): void {
    if (url.startsWith('/backoffice/pharmacie')) {
      this.items = [
        {
          label: 'Tableau de bord',
          icon: 'bi bi-grid-3x3-gap-fill',
          route: '/backoffice/pharmacie',
        },
        {
          label: 'Gestion des stocks',
          icon: 'bi bi-box-seam',
          route: '/backoffice/pharmacie/gestion-stock',
        },
        {
          label: 'Mes demandes',
          icon: 'bi bi-inboxes',
          route: '/backoffice/pharmacie/demande-list',
        },
        {
          label: 'Vérification de codes',
          icon: 'bi bi-upc-scan',
          route: '/backoffice/pharmacie/conformite-test',
        },
        {
          label: 'Alertes & signalement',
          icon: 'bi bi-megaphone',
          route: '/backoffice/pharmacie/signalement-list',
        },
      ];
    } else if (url.startsWith('/backoffice/fabricant')) {
      this.items = [
        {
          label: 'Tableau de bord',
          icon: 'bi bi-grid-3x3-gap-fill',
          route: '/backoffice/fabricant',
        },
        {
          label: 'Gestion des AMM',
          icon: 'bi bi-clipboard-data',
          route: '/backoffice/fabricant/list-amms',
        },
      ];
    } else if (url.startsWith('/backoffice/chercheur')) {
      this.items = [
        {
          label: 'Tableau de bord',
          icon: 'bi bi-grid-3x3-gap-fill',
          route: '/backoffice/chercheur',
        },
        {
          label: 'Declaration de variations',
          icon: 'bi bi-journal-plus',
          route: '/backoffice/chercheur/demande-create',
        },
        {
          label: 'Essais clinique',
          icon: 'bi bi-beaker',
          route: '/backoffice/chercheur/list-amms',
        },
      ];
    } else if (url.startsWith('/backoffice/grossiste')) {
      this.items = [
        {
          label: 'Tableau de bord',
          icon: 'bi bi-grid-3x3-gap-fill',
          route: '/backoffice/grossiste',
        },
        {
          label: 'Gestion de stock',
          icon: 'bi bi-box-seam',
          route: '/backoffice/grossiste/gestion-stock',
        },
        {
          label: 'Vérification de codes',
          icon: 'bi bi-upc-scan',
          route: '/backoffice/grossiste/controle-test',
        },
        {
          label: 'Alertes & signalement',
          icon: 'bi bi-megaphone',
          route: '/backoffice/grossiste/signalement',
        },
      ];
    } else {
      // Par défaut : menu Direction (comportement actuel)
      this.items = [
        {
          label: 'Tableau de bord',
          icon: 'bi bi-grid-3x3-gap-fill',
          route: '/backoffice/direction',
        },
        {
          label: 'Gestion des AMM',
          icon: 'bi bi-clipboard-data',
          route: '/backoffice/direction/list-amms',
        },
        {
          label: 'Signalements',
          icon: 'bi bi-megaphone',
          route: '/backoffice/direction/sigmalement',
        },
        {
          label: 'Essais clinique',
          icon: 'bi bi-beaker',
          route: '/backoffice/direction/essai-list',
        },
        {
          label: 'Contrôle & conformité',
          icon: 'bi bi-shield-check',
          route: '/backoffice/direction/controle',
        },
        {
          label: 'Fabricants',
          icon: 'bi bi-building',
          route: '/backoffice/direction/fabricant-list',
        },
        {
          label: 'Officines',
          icon: 'bi bi-shop-window',
          route: '/backoffice/direction/officine-list',
        },
      ];
    }

    this.updateActiveStates(url);
  }

  private updateActiveStates(url: string): void {
    this.items = this.items.map(item => ({
      ...item,
      isActive: this.isItemActive(item, url),
    }));
  }

  private isItemActive(item: SidebarItem, url: string): boolean {
    // Section Pharmacie
    if (url.startsWith('/backoffice/pharmacie')) {
      // Tableau de bord Pharmacie : actif uniquement sur la racine
      if (item.route === '/backoffice/pharmacie') {
        return url === '/backoffice/pharmacie' || url === '/backoffice/pharmacie/';
      }

      // Mes demandes : actif sur la liste ET la création
      if (item.route === '/backoffice/pharmacie/demande-list') {
        return url.includes('/backoffice/pharmacie/demande');
      }

      // Alertes & signalement : actif sur la liste ET la création
      if (item.route === '/backoffice/pharmacie/signalement-list') {
        return url.includes('/backoffice/pharmacie/signalement');
      }

      // Autres items pharmacie : actif si l'URL commence par la route
      return url.startsWith(item.route);
    }

    // Section Direction
    if (url.startsWith('/backoffice/direction')) {
      if (item.route === '/backoffice/direction') {
        return url === '/backoffice/direction' || 
        url === '/backoffice/direction/';
      }

      // Gestion des AMM (Direction) : actif sur la liste ET le détail
      if (item.route === '/backoffice/direction/list-amms') {
        return (
          url.includes('/backoffice/direction/list-amms') ||
          url.includes('/backoffice/direction/detail-amms')
        );
      }
      // Essais clinique : actif sur la liste ET le détail
      if (item.route === '/backoffice/direction/essai-list') {
        return (
          url.includes('/backoffice/direction/essai-list') ||
          url.includes('/backoffice/direction/essai-detail')
        );
      }
      return url.startsWith(item.route);
    }

    // Section Fabricant
    if (url.startsWith('/backoffice/fabricant')) {
      if (item.route === '/backoffice/fabricant') {
        return url === '/backoffice/fabricant' || url === '/backoffice/fabricant/';
      }
      // Gestion des AMM : actif sur la liste ET la création
      if (item.route === '/backoffice/fabricant/list-amms') {
        return (
          url.includes('/backoffice/fabricant/list-amms') ||
          url.includes('/backoffice/fabricant/demande-create') ||
          url.includes('/backoffice/fabricant/detail-amms')
        );
      }
      return url.startsWith(item.route);
    }

    // Section Chercheur
    if (url.startsWith('/backoffice/chercheur')) {
      if (item.route === '/backoffice/chercheur') {
        return url === '/backoffice/chercheur' || url === '/backoffice/chercheur/';
      }
      return url.startsWith(item.route);
    }

    // Section Grossiste
    if (url.startsWith('/backoffice/grossiste')) {
      if (item.route === '/backoffice/grossiste') {
        return url === '/backoffice/grossiste' || url === '/backoffice/grossiste/';
      }
      return url.startsWith(item.route);
    }

    // Fallback générique
    return url.startsWith(item.route);
  }

  onNavClick(event: Event): void {
    if ((event.target as HTMLElement).closest('a')) {
      this.navigate.emit();
    }
  }
}
