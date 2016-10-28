import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDuckService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { DuckDetailComponent } from "./duck-detail.component";
import { DashboardComponent } from "./dashboard.component";
import { DucksComponent } from "./ducks.component";
import { HeaderComponent } from "./header.component";

import { DuckService } from "./duck.service";
import { UserService } from "./user.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDuckService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        DuckDetailComponent,
        DucksComponent,
        HeaderComponent
    ],
    providers: [
        DuckService,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
