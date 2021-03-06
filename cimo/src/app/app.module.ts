import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


//Material and CDK
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './users/list/list.component';
import { AddComponent } from './users/add/add.component';
import { ManagementCimoComponent } from './management-cimo/management-cimo.component';
import { VideoconferencesComponent } from './management-cimo/videoconferences/videoconferences.component';
import { ChatComponent } from './management-cimo/chat/chat.component';
import { PayrollComponent } from './payroll/payroll.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { ErrorControlComponent } from './error-control/error-control.component';
import { PrincipalpageComponent } from './principalpage/principalpage.component';
import { CimoComponent } from './cimo/cimo.component';
import { PaymentComponent } from './payment/payment.component';
import { SitePoliciesComponent } from './site-policies/site-policies.component';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';


//Services
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service/service.service';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PacientComponent } from './dashboard/pacient/pacient.component';
import { ChatfrontendComponent } from './cimo/chatfrontend/chatfrontend.component';
import { VideoconferencefrontendComponent } from './cimo/videoconferencefrontend/videoconferencefrontend.component';
import {ReactiveFormsModule} from '@angular/forms';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { DialogComponent } from './payroll/dialog/dialog.component';
import { ServicesInfoComponent } from './services-info/services-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CalenderAndAccessDateComponent } from './calender-and-access-date/calender-and-access-date.component';
import { ChatDoctorComponent } from './cimo/chat-doctor/chat-doctor.component';
import { VideoDoctorComponent } from './cimo/video-doctor/video-doctor.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    UsersComponent,
    ListComponent,
    AddComponent,
    ManagementCimoComponent,
    VideoconferencesComponent,
    ChatComponent,
    PayrollComponent,
    StatisticalComponent,
    ErrorControlComponent,
    PrincipalpageComponent,
    CimoComponent,
    PaymentComponent,
    SitePoliciesComponent,
    FrequentQuestionsComponent,
    TechnicalSupportComponent,
    DashboardComponent,
    AdminComponent,
    DoctorComponent,
    PacientComponent,
    ChatfrontendComponent,
    VideoconferencefrontendComponent,
    DialogComponent,
    ServicesInfoComponent,
    AboutUsComponent,
    CalenderAndAccessDateComponent,
    ChatDoctorComponent,
    VideoDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FullCalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule, // register FullCalendar with you app
    NgbModalModule,
    FlatpickrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [ ServiceService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
