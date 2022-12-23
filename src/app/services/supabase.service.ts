import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { LoadingController, ToastController } from '@ionic/angular'
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from '../environments/environment'

export interface Profile {
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient
  public currentUser$: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentSession$: BehaviorSubject<any> = new BehaviorSubject(null);
  public isUserAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController,private router: Router) {
    this.supabase = createClient(
      environment.supabaseUrl, 
      environment.supabaseKey, 
    );  
    this.loadUser();
  }

  get currentUser(): Observable<Profile> {
    return this.currentUser$.asObservable();
  }


  async loadUser() {
    const {data, error}: any = await this.supabase.auth.getSession();
    if (data) {
      console.log(data);
      this.currentUser$.next(data.user);
      this.currentSession$.next(data);
      this.isUserAuthenticated$.next(true);
    } else {
      this.isUserAuthenticated$.next(false);
      this.currentUser$.next(null);
      this.currentSession$.next(null);
      this.router.navigateByUrl('/');
    }
  }
  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }
  async signUp(credentials: { email, password }) {
    const { data, error } = await this.supabase.auth.signUp(credentials)
    if (!!data.user && !!data.session) {
      this.onLoginSuccess(data);
    }
    if (error) {
      this.createNotice(error.message);
    }
  }

  async signIn(credentials: { email, password }) {
    const { data, error } = await this.supabase.auth.signInWithPassword(credentials)
    if (!!data.user && !!data.session) {
      this.onLoginSuccess(data);
    }
    if (error) {
      this.createNotice(error.message);
    }
  }

  signOut() {
    this.supabase.auth.signOut().then(_ => {
      this.isUserAuthenticated$.next(false);
      this.currentUser$.next(null);
      this.currentSession$.next(null);
      this.router.navigateByUrl('/');
    });
  }
  onLoginSuccess(data) {
    this.currentUser$.next(data.user);
    this.currentSession$.next(data.session);
    this.isUserAuthenticated$.next(true);
    this.router.navigateByUrl('/home/tab1', { replaceUrl: true });
  }
  async createNotice(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 })
    await toast.present()
  }
}