import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,DrawerModule,MenubarModule,CommonModule,ImageModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

items: MenuItem[] | undefined;
visible: boolean = false;
view: boolean = false;
view2: boolean = false;
isDarkMode: boolean = false;

constructor(private router: Router, ){}
@ViewChild('skills') skillsSection!: ElementRef;
@ViewChild('proyectos') proyectosSection!: ElementRef;
@ViewChild('contact') contactSection!: ElementRef;
@ViewChild('home') homeSection!: ElementRef;

  scrollToSkills() {
    this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToproyecto() {
    this.proyectosSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollTocontact() {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollTohome() {
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  
viewcv() {
  this.view = !this.view; // Alterna entre true y false
}
viewcertificate(){
  this.view2 = !this.view2
}

viewTechnology(){
  window.location.href = 'https://fraulinnunez.github.io/store_technology/app-home';
}

viewApi(){
  window.location.href = 'https://fraulinnunez.github.io/angular-api-rink-and-morty/home';
}

viewTodoList(){
  window.location.href = 'https://fraulinnunez.github.io/To_Do-List---Angular-Ionic/tabs/tab1';
}

viewCalculator(){
  window.location.href = 'https://fraulinnunez.github.io/Calculadora-React/';
}

viewClips(){
  window.location.href = 'https://fraulinnunez.github.io/ContadorClics_React/';
}

viewTestimonios(){
  window.location.href = 'https://FraulinNunez.github.io/freecode_camp';
}


//Code github

viewTechnologyCode(){
  window.location.href = 'https://github.com/FraulinNunez/store_technology';
}

viewApiCode(){
  window.location.href = 'https://github.com/FraulinNunez/angular-api-rink-and-morty';
}

viewTodoListCode(){
  window.location.href = 'https://github.com/FraulinNunez/To_Do-List---Angular-Ionic';
}

viewCalculatorCode(){
  window.location.href = 'https://github.com/FraulinNunez/Calculadora-React';
}

viewClipsCode(){
  window.location.href = 'https://github.com/FraulinNunez/ContadorClics_React';
}

viewTestimoniosCode(){
  window.location.href = 'https://github.com/FraulinNunez/freecode_camp';
}




//Descargar cv
cvDownload(){
  const link = document.createElement('a');
  link.href = '/Currículum Vitae CV Fraulin Nuñez.pdf';
  link.download = 'CV_Fraulin_Nuñez.pdf';
  link.target = '_blank';
  link.click();
}

darkMode(){
  this.isDarkMode = !this.isDarkMode;
  const body = document.body;

  if(this.isDarkMode){
    body.classList.add('dark-theme');

  }else {
    body.classList.remove('dark-theme');
  }

}



ngOnInit(): void {
  this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => {
            this.scrollTohome();
          },
      },
      {
          label: 'Experience',
          icon: 'pi pi-crown',
          command: () => {
              // this.router.navigate(['/installation']);
              this.scrollToSkills();
          }
      },
      {
          label: 'Projects',
          icon: 'pi pi-building',
          command: () => {
            this.scrollToproyecto();
          },
      },
      {
        label: 'About me',
        icon: 'pi pi-user',
        command: () => {
          console.log("Clic en Contáctame"); // Esto debe aparecer en la consola
          this.visible = true;
          console.log("Drawer activado:", this.visible);
          
        },
      },
      {
        label: 'Contact me',
        icon: 'pi pi-envelope',
        command: () => {
            this.scrollTocontact();
          },
        
        
    }
  ];
}

}
