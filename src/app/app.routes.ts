import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TheatreComponent } from './pages/theatre/theatre.component';
import { DanceComponent } from './pages/dance/dance.component';
import { AboutComponent } from './pages/about/about.component';
import { TvEventsGigsComponent } from './pages/tv-events-gigs/tv-events-gigs.component';
import { OtherWorksComponent } from './pages/other-works/other-works.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { FutureProjectsComponent } from './pages/future-projects/future-projects.component';
import { ClippingComponent } from './pages/clipping/clipping.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'theatre',
        component: TheatreComponent,

    },
    {
        path: 'dance',
        component: DanceComponent,
    },
    {
        path: 'tv-events-gigs',
        component: TvEventsGigsComponent,
    },
    {
        path: 'other-works',
        component: OtherWorksComponent,
    },
    {
        path: 'awards',
        component: AwardsComponent,
    },
    {
        path: 'future-projects',
        component: FutureProjectsComponent,
    },
    {
        path: 'clipping',
        component: ClippingComponent,
    }
  
];
