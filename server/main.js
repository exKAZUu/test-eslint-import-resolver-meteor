import { Meteor } from 'meteor/meteor';
import { value1, value2 } from './values/value12';
import { value3, value4 } from '../imports/server/value34';

Meteor.startup(() => {
  console.log(value1, value2, value3, value4);
});
