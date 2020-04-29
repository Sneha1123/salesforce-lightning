import { LightningElement,api} from 'lwc';

export default class PublicChild10 extends LightningElement {
    @api employeeDetail={empName:"EmpName", empAddress:"Address"}
}