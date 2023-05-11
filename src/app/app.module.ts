import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';


import { TrendingArticleComponent } from "./components/trending-article.component";
import { RecommendedArticleComponent } from "./components/recommended-article.component";

@NgModule({
  declarations: [
    AppComponent,
    TrendingArticleComponent,
    RecommendedArticleComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    DateInputsModule,
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    BarcodesModule,
    ChartsModule,
    ChatModule,
    DialogsModule,
    GaugesModule,
    IconsModule,
    IndicatorsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
