# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


https://www.youtube.com/watch?v=FP7Hs8lTy1k

ng add @angular/material

npm i highcharts-angular --save

npm i highcharts --save

npm i @angular/flex-layout @angular/cdk --save

Using import { MatButtonModule } from '@angular/material'; to test 
--> <button mat-raised-button color = "primary"> Test</button>

ng g c layouts/default

-> create module  => ng g m layouts/default

=> ng g c modules/dashboard

1.
Default module is responsbile to initilize the layout (!!!!!)  
contaning DefaultComponent, DashboardComponent
DefaultComponent and then ---->  DashboardComponent
Note: app.module 有用的 要在app.module聲明
 
2. 
ng g c shared/components/header
ng g c shared/components/footer
ng g c shared/components/sidebar
ng g m shared/shared
ng g c modules/posts


ng g c shared/widgets/area
ng g c shared/widgets/card
ng g c shared/widgets/pie

3. 注意 DefaultComponent 的emmitevent to Sidebar -> 
releationship DefaultComponent <-> HeaderComponent in DefaultHtml
The Most important Compoenent -> setting up DefaultComponent
Also, The most important Module -> Default Module (shared module) -> this is reason why the module is required to be exported 
