import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarTecnicoPage } from './editar-tecnico.page';

describe('EditarTecnicoPage', () => {
  let component: EditarTecnicoPage;
  let fixture: ComponentFixture<EditarTecnicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTecnicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
