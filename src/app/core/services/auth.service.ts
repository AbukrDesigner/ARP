import { Injectable, signal } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  role?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Signal pour l'utilisateur connecté
  currentUser = signal<User | null>(null);

  constructor() {
    // Charger l'utilisateur depuis localStorage au démarrage (si disponible)
    this.loadUserFromStorage();
  }

  /**
   * Définit l'utilisateur connecté
   */
  setCurrentUser(user: User): void {
    this.currentUser.set(user);
    // Sauvegarder dans localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  /**
   * Charge l'utilisateur depuis localStorage
   */
  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUser.set(user);
      } catch (e) {
        console.error('Erreur lors du chargement de l\'utilisateur:', e);
      }
    } else {
      // Utilisateur par défaut pour le développement
      // À supprimer quand l'authentification sera implémentée
      this.currentUser.set({
        firstName: 'Boubacar',
        lastName: 'BALDE',
        role: 'Direction homologation'
      });
    }
  }

  /**
   * Retourne les initiales de l'utilisateur connecté
   */
  getUserInitials(): string {
    const user = this.currentUser();
    if (!user) return '??';
    
    const firstInitial = user.firstName?.charAt(0)?.toUpperCase() || '';
    const lastInitial = user.lastName?.charAt(0)?.toUpperCase() || '';
    return `${firstInitial}${lastInitial}`;
  }

  /**
   * Retourne le nom complet de l'utilisateur
   */
  getUserFullName(): string {
    const user = this.currentUser();
    if (!user) return 'Non connecté';
    return `${user.firstName} ${user.lastName}`;
  }

  /**
   * Retourne le rôle de l'utilisateur
   */
  getUserRole(): string {
    const user = this.currentUser();
    return user?.role || '';
  }

  /**
   * Déconnecte l'utilisateur
   */
  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
  }
}
