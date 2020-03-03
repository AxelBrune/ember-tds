import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(note){
            alert("Sauvegarde de : \""+note.get('content')+"\"");
        },
        clear(note){
            note.set('content',"");
        }
    }
});
