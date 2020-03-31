import DS from 'ember-data';
import EmberResolver from 'ember-resolver';

const {Model} = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('utc'),
  dueDate: DS.attr('utc'),
  owner: DS.belongsTo('developer'),
  stories: DS.hasMany('story'),
  boardVisible : DS.attr('boolean'),
  backlog: Ember.computed('stories.@each.step','boardVisible',function(){
    if (this.boardVisible == false){
      return this.get('stories');
    }
  })
});
