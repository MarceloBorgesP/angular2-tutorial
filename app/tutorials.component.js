"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Tutorial about Angular 2";
        this.imgLink = "http://lorempixel.com/400/200";
        this.applyClass = true;
        this.applyBlue = true;
        this.textColor = '#000';
        this.showElement = true;
        this.color = "red";
        this.colors = ['red', 'blue', 'green'];
    }
    TutorialsComponent.prototype.onClick = function (color) {
        this.textColor = color;
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>{{title}}</h2>\n                <div [class.myClass]=\"applyClass\">Apply Class</div>\n                <div [style.color] = \"textColor\">this text is: {{textColor}}</div>\n                <button (click)=\"onClick(demoInput.value)\">Click me to update the color</button><br>\n                <label>Type a color</label><input type=\"text\" #demoInput><br><br>\n                <input type=\"text\" [(ngModel)]=\"fname\"><br>\n                <input type=\"text\" [(ngModel)]=\"lname\"><br>\n                FullName: {{fname}} {{lname}}\n                <p *ngIf=\"showElement\">Show Element</p>\n                <div [ngSwitch]=\"color\">\n                    <p *ngSwitchWhen=\"'red'\">Red color is shown</p>\n                    <p *ngSwitchWhen=\"'blue'\">Blue color is shown</p>\n                    <p *ngSwitchDefault>Invalid color</p>\n                </div>\n                <ul>\n                    <li *ngFor=\"let color of colors\">{{color}}</li>\n                </ul>",
            styles: [
                ".myClass {\n            color: red\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map