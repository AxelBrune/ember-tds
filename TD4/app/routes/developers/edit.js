import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.get('store').findRecord('developer',1);
    },
    actions:{
        updateDeveloper(data){
            data.save();
            this.transitionTo("developers")
        }
    }
});
