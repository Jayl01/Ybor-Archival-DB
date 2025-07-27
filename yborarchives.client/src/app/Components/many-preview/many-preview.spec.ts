import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManyPreviewComponent } from './many-preview'; 
import { AppRoutingModule } from '../../app-routing.module';

describe('ManyPreviewComponent', () => {
  let component: ManyPreviewComponent;
  let fixture: ComponentFixture<ManyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManyPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
