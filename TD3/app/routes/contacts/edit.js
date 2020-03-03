import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.get('store').findRecord('contact',1);
    },
    actions:{
        updateContact(data){
            // this.get('store').findRecord('contact', 1).then(function(tyrion) {
            //     // ...after the record has loaded
            //     tyrion.set('nom', data.nom);
            //     tyrion.set('prenom',data.prenom);
            //     tyrion.set('email',data.email);
            //     tyrion.save();
            //   });
            data.save();
            this.transitionTo("contacts");
        }
    }
});
