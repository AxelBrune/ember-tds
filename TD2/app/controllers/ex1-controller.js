import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        addToIncluded(){

        },
        addAllToIncluded(){

        },
        removeFromIncluded(){

        },
        RemoveAllFromIncluded(){
            
        },
        addTo(source,what,dest){
            dest.pushObjects(what);
            source.removeObjects(what);
            let model=this.modelFor(this.routeName);
            set(model,'selectedDispoItemsIds',[]);
            set(model,'selectedIncludedItemsIds',[]);
        }
    }
});
