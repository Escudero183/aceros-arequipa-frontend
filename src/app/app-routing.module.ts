import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { WorkerComponent } from './erp/administration/worker/worker.component';
import { HelpComponent } from './erp/requirement/help/help.component';
import { RequestComponent } from './erp/requirement/request/request.component';

const routes: Routes = [
    {path: 'administracion/trabajadores', component: WorkerComponent},
    {path: 'requerimiento/solicitud', component: RequestComponent},
    {path: 'requerimiento/ayuda', component: HelpComponent},
    {path: '', component: RequestComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }