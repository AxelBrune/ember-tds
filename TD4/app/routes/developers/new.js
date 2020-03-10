import Route from '@ember/routing/route';

export default Route.extend({
    model(){

    },
    actions:{
        addDeveloper(){
            // let store=this.get('store');
            // let post=store.createRecord('contact',{
            //     nom: this.get('controller').get('nom'),
            //     prenom: this.get('controller').get('prenom'),
            //     email: this.get('controller').get('email')
            // })
            // post.save();
            // this.transitionTo('contacts');
            let store=this.get('store');
            let post=store.createRecord('developer',{
                identity: this.get('controller').get('identity')
            })
            post.save();
            this.transitionTo('developers');
        }
    }
});
