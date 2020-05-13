public with sharing class ContactManager {
   @ AuraEnabled (cacheable=true)
    public static List<Contact> getContacts(){
        return [select id, Name, Phone from Contact limit 10];

    }
}
