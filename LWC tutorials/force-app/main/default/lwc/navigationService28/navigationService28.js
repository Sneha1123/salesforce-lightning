import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationService28 extends NavigationMixin(LightningElement) {

    @api recordId;
    newRecordhandler(event){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                
                objectApiName:"Account",
                actionName: "new"
            }
        })

    }
    editRecordhandler(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.recordId,
                objectApiName:"Account",
                actionName: "edit"
            }
        })

    }
    viewRecordhandler(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.recordId,
                objectApiName:"Account",
                actionName: "view"
            }
        })

    }
}