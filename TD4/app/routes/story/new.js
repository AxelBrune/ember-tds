import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model(){
        return RSVP.hash({
            project: this.get('store').findRecord('project',1),
            devs: this.get('store').findAll('developer')
        })
    }
});
