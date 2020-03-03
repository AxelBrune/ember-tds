import Route from '@ember/routing/route';
import Contacts from '../../utils/Contacts';

export default Route.extend({
    model(){
        // let store=this.get('store');
        //     let post=store.createRecord('contact',{
        //     nom: "Brune",
        //     prenom: "Axel",
        //     email: "mail@mail.com"
        // })
        // post.save();
        // let datas=store.findAll('contact');
        // return Contacts.create({datas:datas});
    },
    actions:{
        addContact(/*datas*/){
            // let store=this.get('store');
            // let post=store.createRecord('contact',{
            //     nom: datas.nom,
            //     prenom: datas.prenom,
            //     email: datas.email
            // })
            // post.save();

            // n=this.controller.get('model.nom');
            // p=this.controller.get('model.prenom');
            // m=this.controller.get('model.email');
            let store=this.get('store');
            let post=store.createRecord('contact',{
                nom: this.get('controller').get('nom'),
                prenom: this.get('controller').get('prenom'),
                email: this.get('controller').get('email')
            })
            post.save();
            this.transitionTo('contacts');
        }
    }
});
