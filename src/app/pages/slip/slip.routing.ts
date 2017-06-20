import { Routes, RouterModule } from '@angular/router';
import {SlipComponent} from './slip.component';

import {AllComponent} from './all/all.component'
const routes: Routes = [
  {
    path: '',
    component: SlipComponent,
    children: [
      { path: 'all', component: AllComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
