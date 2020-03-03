import Route from '@ember/routing/route';
import Note from 'td1c/utils/note-class';
export default Route.extend({
    model(){
        return Note.create();
    }
});
