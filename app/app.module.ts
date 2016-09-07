import "./rxjs-extensions";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular2-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { DucksComponent } from "./ducks.component";
import { DuckDetailComponent } from "./duck-detail.component";
import { DashboardComponent } from "./dashboard.component";
import { DuckSearchComponent } from "./duck-search.component";

import { DuckService } from "./duck.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        DucksComponent,
        DuckDetailComponent,
        DuckSearchComponent,
        DashboardComponent
    ],
    providers: [ DuckService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
