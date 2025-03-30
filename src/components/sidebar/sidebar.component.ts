import { Component, signal, WritableSignal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {
  }
  menus: WritableSignal<string[]> = signal(['Getting Started', 'Blogs']);
  submenu: WritableSignal<Record<string, string[]>> = signal({
    'Getting Started': ['Introduction', 'What\'s New'],
    'Blogs': ['Posts', 'Trending']
  });

  menuToggle: WritableSignal<Record<string, boolean>> = signal(
    Object.fromEntries(
      Object.keys({
        'Getting Started': ['Introduction', 'What\'s New'],
        'Blogs': ['Latest Posts', 'Trending']
      }).map(menu => [menu, true])
    )
  );

  selectedSubmenu: WritableSignal<string | null> = signal('Introduction'); // Selected submenu state

  getSubmenu(menu: string): string[] {
    return this.submenu()[menu] || [];
  }

  setMenuToggle(menu: string) {
    this.menuToggle.update(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  }

  isMenuOpen(menu: string): boolean {
    return this.menuToggle()[menu] ?? false;
  }

  setSelectedSubmenu(sub: string) {
    this.selectedSubmenu.set(sub);
  }

  isSubmenuSelected(sub: string): boolean {
    return this.selectedSubmenu() === sub;
  }

  navigateToPosts(menu:string, sub:string){
    this.router.navigate([`${sub}`]);
  }
}
