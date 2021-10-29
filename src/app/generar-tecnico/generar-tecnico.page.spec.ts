import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarTecnicoPage } from './generar-tecnico.page';

describe('GenerarTecnicoPage', () => {
  let component: GenerarTecnicoPage;
  let fixture: ComponentFixture<GenerarTecnicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarTecnicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
