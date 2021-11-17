import { HttpClientModule } from '@angular/common/http';
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
import { ClientListComponent } from '../src/app/components/client-list/client-list.component';
import { ClientCrudComponent } from '../src/app/components/client-crud/client-crud.component'


class MockEstadosService {
    close(): any {
        return true;
    }
}

describe('Crud tests', () => {
    let componentClientCrud: ClientCrudComponent;
    let componentClientList: ClientListComponent
    let fixture_crud: ComponentFixture<ClientCrudComponent>;
    let fixture_list: ComponentFixture<ClientListComponent>;
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
            declarations: [ClientCrudComponent, ClientListComponent],
            imports: [MATERIAL_MODULES, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
            providers: [
                {
                    provide: MatDialogRef,
                    useClass: MockEstadosService
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                },
                {
                    provide: Router,
                    useValue: {}
                }
            ]
        }).compileComponents()
    })

    beforeEach(() => {
        injector = getTestBed();
        fixture_crud = TestBed.createComponent(ClientCrudComponent);
        componentClientCrud = fixture_crud.componentInstance;
        router = injector.inject(Router);
        fixture_crud.detectChanges();
    })

    it('should create the crud component', () => {
        expect(componentClientCrud).toBeTruthy()
    })

    it('should validate all user input', () => {
        componentClientCrud.name.setValue('')
        componentClientCrud.cpf.setValue('')
        componentClientCrud.cellphone.setValue('')
        componentClientCrud.birthdate.setValue('')
        componentClientCrud.address.setValue('')
        componentClientCrud.vehicle.setValue('')
        componentClientCrud.id.setValue('')

        expect(componentClientCrud.crudForm.valid).toBeFalsy();

        componentClientCrud.name.setValue('Erick Storck')
        componentClientCrud.cpf.setValue('01234567890')
        componentClientCrud.cellphone.setValue('51999868750')
        componentClientCrud.birthdate.setValue('26091993')
        componentClientCrud.address.setValue('client address')
        componentClientCrud.vehicle.setValue('Acura Integra GS 1.8')
        componentClientCrud.id.setValue('13a49c34-070a-4f80-87f7-fc8466d5809e')

        expect(componentClientCrud.crudForm.valid).toBeTruthy();
    })

    it('should validate user Name', () => {
        componentClientCrud.name.setValue('Erick Storck')
        expect(componentClientCrud.name.valid).toBeTruthy();
        componentClientCrud.name.setValue('')
        expect(componentClientCrud.name.valid).toBeFalsy();
        componentClientCrud.name.setValue('as')
        expect(componentClientCrud.name.valid).toBeFalsy();
    })

    it('should validate user CPF', () => {
        componentClientCrud.cpf.setValue('01234567890')
        expect(componentClientCrud.cpf.valid).toBeTruthy();
        componentClientCrud.cpf.setValue('')
        expect(componentClientCrud.cpf.valid).toBeFalsy();
        componentClientCrud.cpf.setValue('01234567891')
        expect(componentClientCrud.cpf.valid).toBeFalsy();
        componentClientCrud.cpf.setValue('0123')
        expect(componentClientCrud.cpf.valid).toBeFalsy();
        componentClientCrud.cpf.setValue('012345678901')
        expect(componentClientCrud.cpf.valid).toBeFalsy();
    })

    it('should validate user Cellphone', () => {
        componentClientCrud.cellphone.setValue('51999868750')
        expect(componentClientCrud.cellphone.valid).toBeTruthy();
        componentClientCrud.cellphone.setValue('')
        expect(componentClientCrud.cellphone.valid).toBeFalsy();
        componentClientCrud.cellphone.setValue('519998687503')
        expect(componentClientCrud.cellphone.valid).toBeFalsy();
        componentClientCrud.cellphone.setValue('5199986875')
        expect(componentClientCrud.cellphone.valid).toBeFalsy();
    })

    it('should validate user Birthdate', () => {
        componentClientCrud.birthdate.setValue('26091993')
        expect(componentClientCrud.birthdate.valid).toBeTruthy();
        componentClientCrud.birthdate.setValue('')
        expect(componentClientCrud.birthdate.valid).toBeFalsy();
        componentClientCrud.birthdate.setValue('2609199')
        expect(componentClientCrud.birthdate.valid).toBeFalsy();
        componentClientCrud.birthdate.setValue('260919933')
        expect(componentClientCrud.birthdate.valid).toBeFalsy();
    })

    it('should validate user Address', () => {
        componentClientCrud.address.setValue('client address')
        expect(componentClientCrud.address.valid).toBeTruthy();
        componentClientCrud.address.setValue('')
        expect(componentClientCrud.address.valid).toBeFalsy();
        componentClientCrud.address.setValue('cl')
        expect(componentClientCrud.address.valid).toBeFalsy();
    })

    it('should validate user Vehicle', () => {
        componentClientCrud.vehicle.setValue('client vehicle')
        expect(componentClientCrud.vehicle.valid).toBeTruthy();
        componentClientCrud.vehicle.setValue('')
        expect(componentClientCrud.vehicle.valid).toBeFalsy();
        componentClientCrud.vehicle.setValue('cl')
        expect(componentClientCrud.vehicle.valid).toBeFalsy();
    })

    it('should validate user ID', () => {
        componentClientCrud.id.setValue('13a49c34-070a-4f80-87f7-fc8466d5809e')
        expect(componentClientCrud.id.valid).toBeTruthy();
        componentClientCrud.id.setValue('')
        expect(componentClientCrud.id.valid).toBeFalsy();
        componentClientCrud.id.setValue('13a49c34-070a-4f80-87f7-fc8466d5809')
        expect(componentClientCrud.id.valid).toBeFalsy();
        componentClientCrud.id.setValue('13a49c34-070a-4f80-87f7-fc8466d5809ee')
        expect(componentClientCrud.id.valid).toBeFalsy();
    })


    it('should create the list component', () => {
        injector = getTestBed();
        fixture_list = TestBed.createComponent(ClientListComponent);
        componentClientList = fixture_list.componentInstance;
        router = injector.inject(Router);
        fixture_list.detectChanges();

        expect(componentClientList).toBeTruthy()

        componentClientList.clients = [{ "name": "Erick Storck", "cpf": "01234567890", "cellphone": "45646546545", "birthdate": "65456456", "address": "asdasdas", "vehicle": "AM Gen Hummer Hard-Top 6.5 4x4 Diesel TB", "id": "af4348db-1020-45bf-a8e6-7217accba32c" }, { "name": "Erick Storck 2", "cpf": "02668027020", "cellphone": "51999868750", "birthdate": "26091993", "address": "client address", "vehicle": "Acura Integra GS 1.8", "id": "13a49c34-070a-4f80-87f7-fc8466d5809e" }]
        // expect(componentClientCrud.crudForm.valid).toBeTruthy()
    })

});