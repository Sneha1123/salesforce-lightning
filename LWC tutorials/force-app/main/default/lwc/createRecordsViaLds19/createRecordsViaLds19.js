import { LightningElement,track } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';

export default class CreateRecordsViaLds19 extends LightningElement {

    @track contactName;
    @track contactPhone;
    @track contactEmail;

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
        }).catch(error => {
            console.log("error "+error.body.message);
        });
    }
    }


