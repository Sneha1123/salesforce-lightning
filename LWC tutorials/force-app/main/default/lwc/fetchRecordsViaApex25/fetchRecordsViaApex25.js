import { LightningElement,wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContacts';
export default class FetchRecordsViaApex25 extends LightningElement {
    @wire (getAllContacts) contacts;

    get contactRecieved(){
        console.log("Contacts "+this.contacts);
        console.log("Contacts.data "+this.contacts.data);
        if(this.contacts){
            return true;
        }
        return false;
    }
}