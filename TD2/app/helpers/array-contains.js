import { helper } from '@ember/component/helper';
import Ember from 'ember';
export default helper(function arrayContains(params/*,hash*/){
  return params;
});

export function arrayContains(params){
  const [items,value]=params;
  return items.includes(value);
}