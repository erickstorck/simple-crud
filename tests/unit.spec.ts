import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { AppService } from '../src/app/app.service';
import { CPFValidator } from '../src/app/components/classes/cpf-validator'
import { ClientCrudComponent } from '../src/app/components/client-crud/client-crud.component'


describe('ClientCrudComponent', () => {
    let component: ClientCrudComponent;
    let fixture: ComponentFixture<ClientCrudComponent>;
    let injector: TestBed;
    let router: Router;

    const MATERIAL_MODULES = [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatListModule
    ];
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ClientCrudComponent],
            imports: [MATERIAL_MODULES, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: {}
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                },
                {
                    provide: Router,
                    useValue: {}
                },
                AppService
            ]
        }).compileComponents()
    })
    beforeEach(() => {
        injector = getTestBed();
        fixture = TestBed.createComponent(ClientCrudComponent);
        component = fixture.componentInstance;
        router = injector.inject(Router);
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should throw error on send() without valid values', () => {
        expect(component.send).toThrow(Error);
        expect(component.send).toThrow('Invalid Input');
    })

    it('should save on localstorage', () => {
        component.name.setValue('Erick Storck')
        component.cpf.setValue('01234567890')
        component.cellphone.setValue('51999868750')
        component.birthdate.setValue('26091993')
        component.address.setValue('client address')
        component.vehicle.setValue('Acura Integra GS 1.8')
        component.id.setValue('13a49c34-070a-4f80-87f7-fc8466d5809e')
        component.crudType = 'new'

        expect(component.send).not.toThrow(Error);
    })
});