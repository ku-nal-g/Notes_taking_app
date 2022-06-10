import { NotesComponent } from './components/notes/notes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesGuard } from './guards/notes.guard';
import { TrackRecordComponent } from './components/track-record/track-record.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', 
    redirectTo: 'home',
    pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'record',
    component: TrackRecordComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
