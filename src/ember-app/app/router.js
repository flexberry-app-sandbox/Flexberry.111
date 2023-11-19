import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-111-график-l');
  this.route('i-i-s-111-график-e',
  { path: 'i-i-s-111-график-e/:id' });
  this.route('i-i-s-111-график-e.new',
  { path: 'i-i-s-111-график-e/new' });
  this.route('i-i-s-111-должности-l');
  this.route('i-i-s-111-должности-e',
  { path: 'i-i-s-111-должности-e/:id' });
  this.route('i-i-s-111-должности-e.new',
  { path: 'i-i-s-111-должности-e/new' });
  this.route('i-i-s-111-организация-l');
  this.route('i-i-s-111-организация-e',
  { path: 'i-i-s-111-организация-e/:id' });
  this.route('i-i-s-111-организация-e.new',
  { path: 'i-i-s-111-организация-e/new' });
  this.route('i-i-s-111-подразделения-l');
  this.route('i-i-s-111-подразделения-e',
  { path: 'i-i-s-111-подразделения-e/:id' });
  this.route('i-i-s-111-подразделения-e.new',
  { path: 'i-i-s-111-подразделения-e/new' });
  this.route('i-i-s-111-прием-l');
  this.route('i-i-s-111-прием-e',
  { path: 'i-i-s-111-прием-e/:id' });
  this.route('i-i-s-111-прием-e.new',
  { path: 'i-i-s-111-прием-e/new' });
  this.route('i-i-s-111-расчет-l');
  this.route('i-i-s-111-расчет-e',
  { path: 'i-i-s-111-расчет-e/:id' });
  this.route('i-i-s-111-расчет-e.new',
  { path: 'i-i-s-111-расчет-e/new' });
  this.route('i-i-s-111-сотрудник-l');
  this.route('i-i-s-111-сотрудник-e',
  { path: 'i-i-s-111-сотрудник-e/:id' });
  this.route('i-i-s-111-сотрудник-e.new',
  { path: 'i-i-s-111-сотрудник-e/new' });
  this.route('i-i-s-111-таблица-l');
  this.route('i-i-s-111-таблица-e',
  { path: 'i-i-s-111-таблица-e/:id' });
  this.route('i-i-s-111-таблица-e.new',
  { path: 'i-i-s-111-таблица-e/new' });
  this.route('i-i-s-111-увольнение-l');
  this.route('i-i-s-111-увольнение-e',
  { path: 'i-i-s-111-увольнение-e/:id' });
  this.route('i-i-s-111-увольнение-e.new',
  { path: 'i-i-s-111-увольнение-e/new' });
});

export default Router;
