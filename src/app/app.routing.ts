import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { NotesComponent } from "./notes/notes.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'notes',      component: NotesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
