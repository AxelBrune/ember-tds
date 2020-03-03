import Route from '@ember/routing/route';
import Contacts from '../utils/Contacts';

export default Route.extend({
    model(){
        let store=this.get('store');
        let datas=store.findAll('contact');
        return Contacts.create({datas:datas});
    },
    actions:{
        delete(contact){
            contact.deleteRecord();
            contact.save();
        }
    }
});
