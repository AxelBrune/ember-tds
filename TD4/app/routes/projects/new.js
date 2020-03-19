import Route from '@ember/routing/route';

export default Route.extend({
    model(){

    },
    actions:{
        addProject(){
            let store=this.get('store');
            let post=store.createRecord('project',{
                name:this.get('controller').get('name'),
                descriptif:this.get('controller').get('descriptif'),
                startDate:this.get('controller').get('startDate'),
                dueDate:this.get('controller').get('dueDate')
            })
            post.save();
            this.transitionTo("projects");
        }
    }
});
