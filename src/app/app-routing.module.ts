import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: async () => HomeModule
    },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), HomeModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
