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
animateSkills = false;
animateProjects = false;
animateContact = false;
animateHome = false;
animationClasses = ['fadeinleft', 'fadeindown' , 'zoomindown']; // Agrega más si quieres


constructor(private router: Router, ){}

  scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

observer!: IntersectionObserver;
  observedElements: Element[] = [];

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.restartAnimations(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Seleccionar todas las secciones con clase 'observed-section'
    this.observedElements = Array.from(document.querySelectorAll('.observed-section'));
    this.observedElements.forEach(el => this.observer.observe(el));
  }

  restartAnimations(sectionEl: HTMLElement) {
  this.animationClasses.forEach(animationClass => {
    const animElements = sectionEl.querySelectorAll(`.${animationClass}`);

    animElements.forEach(el => {
      el.classList.remove(animationClass);
      void (el as HTMLElement).offsetWidth;
     el.classList.add(animationClass);
      });
    });
  }

  ngOnDestroy() {
    this.observedElements.forEach(el => this.observer.unobserve(el));
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


//darkMode
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
      this.scrollToSection('home');
    }
  },
      {
          label: 'Experience',
          icon: 'pi pi-crown',
          command: () => {
              // this.router.navigate(['/installation']);
              this.scrollToSection('skills');
          }
      },
      {
          label: 'Projects',
          icon: 'pi pi-building',
          command: () => {
             this.scrollToSection('projects');
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
            this.scrollToSection('contact');
          },
        
        
    }
  ];


  

}

}
