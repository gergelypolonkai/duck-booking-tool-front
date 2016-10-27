import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { DuckDetailComponent } from "./duck-detail.component";
import { DashboardComponent } from "./dashboard.component";
import { DucksComponent } from "./ducks.component";

import { DuckService } from "./duck.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        DuckDetailComponent,
        DucksComponent
    ],
    providers: [ DuckService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
