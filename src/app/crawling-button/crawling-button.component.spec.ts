import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrawlingButtonComponent } from './crawling-button.component';

describe('CrawlingButtonComponent', () => {
  let component: CrawlingButtonComponent;
  let fixture: ComponentFixture<CrawlingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrawlingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrawlingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
