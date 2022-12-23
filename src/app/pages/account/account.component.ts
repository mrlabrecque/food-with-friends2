import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Profile, SupabaseService } from 'src/app/services/supabase.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  profile: Profile = {
    username: '',
    avatar_url: '',
    website: '',
  }

  session: any = this.supabase

  constructor(private readonly supabase: SupabaseService, private router: Router) {}
  ngOnInit() {
  }




  async signOut() {
    console.log('testing?')
    await this.supabase.signOut()
    this.router.navigate(['/'], { replaceUrl: true })
  }
}