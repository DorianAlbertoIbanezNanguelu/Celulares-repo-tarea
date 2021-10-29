import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarCelularPage } from './generar-celular.page';

describe('GenerarCelularPage', () => {
  let component: GenerarCelularPage;
  let fixture: ComponentFixture<GenerarCelularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCelularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarCelularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
