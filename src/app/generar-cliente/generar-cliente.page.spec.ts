import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarClientePage } from './generar-cliente.page';

describe('GenerarClientePage', () => {
  let component: GenerarClientePage;
  let fixture: ComponentFixture<GenerarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
