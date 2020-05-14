public with sharing class ContactManager {
   @ AuraEnabled (cacheable=true)
    public static List<Contact> getContacts(integer limitDefined){
        return [select id, Name, Phone from Contact limit:limitDefined];

    }
}
