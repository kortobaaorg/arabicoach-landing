import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'home',
      loadComponent: () =>
        import('./home/home.component').then((c) => c.HomeComponent),
    },
    {
      path: 'terms-and-conditions',
      loadComponent: () =>
        import(
          './pages/terms-and-conditions/terms-and-conditions.component'
        ).then((c) => c.TermsAndConditionsComponent),
    },
    {
      path: 'privacy-policy',
      loadComponent: () =>
        import('./pages/privacy-policy/privacy-policy.component').then(
          (c) => c.PrivacyPolicyComponent
        ),
    },
    {
      path: '404',
      component: PageNotFoundComponent,
    },
    {
      path: '**',
      component: PageNotFoundComponent,
    },
];
