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
    recentRecordhandler(event){
        this[NavigationMixin.Navigate]({
            type:"standard__objectPage",
            attributes:{
                objectApiName: 'Contact',
                actionName: 'list'

            },
            state:{filterName:"Recent"}
        })
    }

    relatedRecordhandler(event){
        this[NavigationMixin.Navigate]({
            type:"standard__recordRelationshipPage",
            attributes:{
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName:"Contacts",
                actionName: 'view'
            }
        })
    }
    webPageHandler(event){
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes:{
                url: 'http://google.co.in'
            }
        })
    }
    homePageHandler(event){
        this[NavigationMixin.Navigate]({
            type:"standard__objectPage",
            attributes:{
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }
    sHomePageHandler(event){
        this[NavigationMixin.Navigate]({
            type:"standard__namedPage",
            attributes:{
               
                pageName: 'home'
            }
        });
    }
    chatterPageHandler(event){
        this[NavigationMixin.Navigate]({
            type:"standard__namedPage",
            attributes:{
                pageName: 'chatter'
            }
        }
        );
    }
}