import { Component, ViewContainerRef } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "duckbook-front-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    title = "Rubber Duck Booking Tool";

    private viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef: ViewContainerRef) {
        // We need this little hack to use ng2-bootstrap.
        this.viewContainerRef = viewContainerRef;
    }
}
