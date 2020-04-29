import { NgModule } from '@angular/core';
import { RequestComponent } from './requests/request.component';
import { UiFeaturesComponent } from './ui-features.component';
import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';

const components = [
  UiFeaturesComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesRoutingModule,
    RequestComponent,
  ],
  declarations: [
    ...components,
  ],
  exports: [...components],
  entryComponents: [],
  providers: []
})
export class UiFeaturesModule { }

