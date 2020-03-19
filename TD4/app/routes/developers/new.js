import Route from '@ember/routing/route';

export default Route.extend({
    model(){

    },
    actions:{
        addDeveloper(){
            let store=this.get('store');
            let post=store.createRecord('developer',{
                identity: this.get('controller').get('identity')
            })
            post.save();
            this.transitionTo('developers');
        }
    }
});
