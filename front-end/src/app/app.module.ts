import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from "./signup/signup.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { UserService } from "./services/user.service";
import { AuthGuard } from "./auth.guard";
 import {ToastrModule} from "ngx-toastr";
import { JwtModule } from "@auth0/angular-jwt";
import { ValidateService } from './services/validate.service';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, SignupComponent, SearchComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    FeedbackComponent,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("id_token");
        }
      }
    }),
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [UserService, ValidateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
