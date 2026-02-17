import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { filter, map } from 'rxjs/operators';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-main-guest',
  standalone: true,
  imports: [RouterOutlet, Sidebar, NgClass, NgIf, DialogModule, RippleModule],
  templateUrl: './main-guest.html',
  styleUrl: './main-guest.scss',
})
export class MainGuest implements OnInit {
  pageTitle: string = 'Tableau de bord';
  pageSubtitle: string = 'Consultez et gérez les données normatives';
  sidebarOpen = false;
  showCreateDemandeButton = false;
  showCreateSignalementButton = false;
  showCreateAmmButton = false;
  showDeclareVariationButton = false;
  displayNewDemandeModal = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Récupérer le titre initial
    this.updateTitle();

    // Écouter les changements de route
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: ActivatedRoute) => {
          let r = route;
          while (r.firstChild) {
            r = r.firstChild;
          }
          return r;
        })
      )
      .subscribe(route => {
        this.updateTitle();
      });
  }

  private updateTitle() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const routeData = route.snapshot.data;
    if (routeData && routeData['title']) {
      this.pageTitle = routeData['title'];
    }

    // Mapping des sous-titres selon les routes
    const url = this.router.url;
    // Affichage du bouton "Créer une nouvelle demande" uniquement sur la liste des demandes pharmacie
    this.showCreateDemandeButton =
      url.includes('/backoffice/pharmacie/demande-list') ||
      url.includes('/backoffice/pharmacie/demande-ist');
    // Affichage du bouton "Faire un signalement" uniquement sur la liste des signalements pharmacie
    this.showCreateSignalementButton =
      url.includes('/backoffice/pharmacie/signalement-list');
    // Affichage du bouton "Nouvelle demande d'AMM" uniquement sur la liste des AMM fabricant
    this.showCreateAmmButton =
      url.includes('/backoffice/fabricant/list-amms');
    // Affichage du bouton "Déclarer une variation" uniquement sur le détail AMM fabricant
    this.showDeclareVariationButton =
      url.includes('/backoffice/fabricant/detail-amms/');

    if (url.includes('list-amms')) {
      this.pageSubtitle = 'Gérez les autorisations de mise sur le marché';
    } else if (url.includes('sigmalement')) {
      this.pageSubtitle = 'Consultez et traitez les signalements';
    } else if (url.includes('essai-list')) {
      this.pageSubtitle = 'Gérez les essais cliniques';
    } else if (url.includes('controle')) {
      this.pageSubtitle = 'Contrôlez la conformité des produits';
    } else if (url.includes('fabricant-list')) {
      this.pageSubtitle = 'Gérez les fabricants enregistrés';
    } else if (url.includes('officine-list')) {
      this.pageSubtitle = 'Gérez les officines pharmaceutiques';
    } else {
      this.pageSubtitle = 'Consultez et gérez les données normatives';
    }
  }

  openNewDemandeModal(): void {
    this.displayNewDemandeModal = true;
  }

  closeNewDemandeModal(): void {
    this.displayNewDemandeModal = false;
  }

  onDemandeTransfert(): void {
    this.closeNewDemandeModal();
    this.goToDemandeCreate();
  }

  onDemandeAttributionSite(): void {
    this.closeNewDemandeModal();
    // TODO: ajouter la navigation vers la demande d'attribution de site d'officine
  }

  onDemandeVariation(): void {
    this.closeNewDemandeModal();
    // TODO: ajouter la navigation vers la demande de variation
  }

  goToDemandeCreate(): void {
    this.router.navigate(['/backoffice/pharmacie/demande-create']);
  }

  goToSignalementCreate(): void {
    this.router.navigate(['/backoffice/pharmacie/signalement-create']);
  }

  goToFabricantDemandeCreate(): void {
    this.router.navigate(['/backoffice/fabricant/demande-create']);
  }

  // goToDeclareVariation(): void {
  //   // On redirige vers la page de déclaration de variation côté chercheur
  //   this.router.navigate(['/backoffice/chercheur/demande-create']);
  // }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
