import { Component, inject } from '@angular/core';
import { BrowserService } from '../browser.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crawling-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './crawling-button.component.html',
  styleUrl: './crawling-button.component.css'
})
export class CrawlingButtonComponent {
  //public browserService = inject(BrowserService);
  links: string[] = [];

  constructor(public browserService: BrowserService) {}

  async startCrawling() {
    this.links = await this.browserService.crawlingbutton();
  }
}