import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
            <my-tutorials></my-tutorials>`,
  directives: [TutorialsComponent]
})

export class AppComponent { }
