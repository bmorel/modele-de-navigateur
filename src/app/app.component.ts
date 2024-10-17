import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BackwardComponent } from './backward/backward.component';
import { DebugComponent } from './debug/debug.component';
import { ForwardComponent } from './forward/forward.component';
import { RefreshComponent } from './refresh/refresh.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeButtonComponent } from "./home-button/home-button.component";
import { CrawlingButtonComponent } from "./crawling-button/crawling-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, AddressComponent, BackwardComponent, DebugComponent, ForwardComponent, RefreshComponent, HomeButtonComponent, CrawlingButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'browser-template';
  links: string[] = [];  // Variable pour stocker les liens extraits
  crawlingbutton: any;

  // Injecter le CrawlerService dans le constructeur
  //constructor(private crawlingbutton: CrawlingButton) {}

  // Fonction pour démarrer le crawling
  startCrawling() {
    const url = 'https://20minutes.fr';  // Remplacer par l'URL que tu veux crawler
    this.crawlingbutton.crawl(url).subscribe((links: string[]) => {
      this.links = links; // Mettre à jour la liste des liens
      console.log('Liens trouvés :', this.links);
    });
  }
}