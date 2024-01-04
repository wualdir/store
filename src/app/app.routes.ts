import { Routes } from '@angular/router';
import { ListComponent} from './domains/products/pages/list/list.component';
import { ProductDetailComponent} from './domains/products/pages/product-detail/product-detail.component';
import { NotFoundComponent } from './domains/information/not-found/not-found.component'; 
import { AboutComponent } from './domains/products/pages/about/about.component'
export const routes: Routes = [
   { path:'',
    component:ListComponent
   },
   { path:'about',
    component:AboutComponent
   },

   { path:'product/:id',
   component:ProductDetailComponent
  },

   { path:'**',
    component:NotFoundComponent
   }
];

