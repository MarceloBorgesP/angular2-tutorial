import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>{{title}}</h2>
                <div [class.myClass]="applyClass">Apply Class</div>
                <div [style.color] = "textColor">this text is: {{textColor}}</div>
                <button (click)="onClick(demoInput.value)">Click me to update the color</button><br>
                <label>Type a color</label><input type="text" #demoInput><br><br>
                <input type="text" [(ngModel)]="fname"><br>
                <input type="text" [(ngModel)]="lname"><br>
                FullName: {{fname}} {{lname}}
                <p *ngIf="showElement">Show Element</p>
                <div [ngSwitch]="color">
                    <p *ngSwitchWhen="'red'">Red color is shown</p>
                    <p *ngSwitchWhen="'blue'">Blue color is shown</p>
                    <p *ngSwitchDefault>Invalid color</p>
                </div>
                <ul>
                    <li *ngFor="let color of colors">{{color}}</li>
                </ul>`,

    styles: [
        `.myClass {
            color: red
        }`
    ]
                
})

export class TutorialsComponent { 
    public title = "Tutorial about Angular 2";
    public imgLink = "http://lorempixel.com/400/200";
    private applyClass = true;
    private applyBlue = true;
    private textColor = '#000';
    public fname;
    public lname;
    public showElement = true;
    public color = "red";
    public colors = ['red', 'blue', 'green'];

    public onClick(color) {
        this.textColor = color;
    }
}