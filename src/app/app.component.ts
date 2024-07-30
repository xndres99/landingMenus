import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  title = 'landingMenu';
  
  preventPause(event: Event): void {
    setTimeout(() => {
      const video = event.target as HTMLVideoElement;
      if (video.paused) {
        video.play();
      }
    }, 0);
  }
  
  scrollToSection() {
    const element = document.getElementById('planes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  irTiktok(){
    window.open('https://www.tiktok.com/@ratelappz', '_blank');
  }
  irFacebook(){
    window.open('https://www.facebook.com/profile.php?id=61563508112687', '_blank');
  }
  irWhatsapp(){
    window.open('https://wa.me/+59161229848?text=Hola%20quiero%20mas%20informacion%20del%20menu%20para%20mi%20restaurante.', '_blank');
  }
}
