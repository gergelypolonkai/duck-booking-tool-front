import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { DucksComponent } from "./ducks.component";
import { DuckDetailComponent } from "./duck-detail.component";
import { DashboardComponent } from "./dashboard.component";

import { DuckService } from "./duck.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DucksComponent,
        DuckDetailComponent,
        DashboardComponent
    ],
    providers: [ DuckService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
