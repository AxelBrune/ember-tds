import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.get('store').findAll("developer")
    },
    actions:{
        deleteDeveloper(dev){
            dev.deleteRecord();
            dev.save();
        }
    }
});
