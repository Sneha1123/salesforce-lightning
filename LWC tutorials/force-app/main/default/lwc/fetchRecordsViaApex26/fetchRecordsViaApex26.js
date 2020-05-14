import { LightningElement,track,wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContacts';
export default class FetchRecordsViaApex26 extends LightningElement {
    
   // @wire (getAllContacts) contacts;
    @track limit;
    @track contacts;
    //@track allContacts = contacts.data;

    limitChangeHandler(event){
        console.log("inside limitchangehandler");
        console.log("contacts is "+this.contacts);
       // console.log("contacts.data is "+this.allContacts);
        console.log("getAllContacts is "+this.getAllContacts);
        this.limit=event.target.value;
    }
    get contactRecieved(){
        console.log("inside contactRecieved");
       console.log("contacts is "+this.contacts);
        //console.log("contacts.data is "+this.allContacts);
        console.log("getAllContacts is "+this.getAllContacts);
        if(this.contacts){
            return true;
        }
        return false;

    }

    getContactsHandler(event){
        console.log("inside getContactHandler");
        console.log("contacts is "+this.contacts);
        //console.log("contacts.data is "+this.allContacts);
        console.log("getAllContacts is "+this.getAllContacts);
        getAllContacts({limitDefined : this.limit}).then(Response => {
            this.contacts = Response;
        }).catch(error =>{
            console.log("error is "+error.body.message);
        });
    }

    }
