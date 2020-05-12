import { LightningElement,track,wire } from 'lwc';
import {createRecord,getRecord} from 'lightning/uiRecordApi';
const fieldArray = ['Contact.LastName','Contact.Phone','Contact.Email'];
export default class CreateViewRecordsLds20 extends LightningElement {
    @track contactName;
    @track contactPhone;
    @track contactEmail;
    @track RecordId;
    @wire(getRecord, {recordId:'$RecordId',fields:fieldArray}) contactRecord;
    nameHandler(event){
        this.contactName = event.target.value;
        
    }
    phoneHandler(event){
        this.contactPhone = event.target.value;
        
    }
    emailHandler(event){
        this.contactEmail = event.target.value;
        
    }
    createHandler(event){

        const fields={'LastName':this.contactName,'Phone':this.contactPhone,'Email':this.contactEmail};
        const recordInput = {apiName:'Contact', fields};

        createRecord(recordInput).then(Response => {
            console.log("created succesfully", Response.id);
            this.RecordId=Response.id;
            console.log(this.recordId);
            console.log(this.contactRecord.data);
        }).catch(error => {
            console.log("error is "+error.body.message);
        });
    }
    

    get recContactName(){
        console.log('inside recContactName');
        console.log(this.contactRecord.data);
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.LastName.value;

        }
        return undefined;
    }
    get recContactName(){
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.Phone.value;

        }
        return undefined;
    }
    get recContactEmail(){
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.Email.value;

        }
        return undefined;
    }
}