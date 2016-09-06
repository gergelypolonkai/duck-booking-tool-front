import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DucksComponent } from "./ducks.component";
import { DuckDetailComponent } from "./duck-detail.component";
import { DashboardComponent } from "./dashboard.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "ducks",
        component: DucksComponent
    },
    {
        path: "detail/:id",
        component: DuckDetailComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
