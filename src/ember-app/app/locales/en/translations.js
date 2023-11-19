import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS111ГрафикLForm from './forms/i-i-s-111-график-l';
import IIS111ДолжностиLForm from './forms/i-i-s-111-должности-l';
import IIS111ОрганизацияLForm from './forms/i-i-s-111-организация-l';
import IIS111ПодразделенияLForm from './forms/i-i-s-111-подразделения-l';
import IIS111ПриемLForm from './forms/i-i-s-111-прием-l';
import IIS111РасчетLForm from './forms/i-i-s-111-расчет-l';
import IIS111СотрудникLForm from './forms/i-i-s-111-сотрудник-l';
import IIS111ТаблицаLForm from './forms/i-i-s-111-таблица-l';
import IIS111УвольнениеLForm from './forms/i-i-s-111-увольнение-l';
import IIS111ГрафикEForm from './forms/i-i-s-111-график-e';
import IIS111ДолжностиEForm from './forms/i-i-s-111-должности-e';
import IIS111ОрганизацияEForm from './forms/i-i-s-111-организация-e';
import IIS111ПодразделенияEForm from './forms/i-i-s-111-подразделения-e';
import IIS111ПриемEForm from './forms/i-i-s-111-прием-e';
import IIS111РасчетEForm from './forms/i-i-s-111-расчет-e';
import IIS111СотрудникEForm from './forms/i-i-s-111-сотрудник-e';
import IIS111ТаблицаEForm from './forms/i-i-s-111-таблица-e';
import IIS111УвольнениеEForm from './forms/i-i-s-111-увольнение-e';
import IIS111ГрафикModel from './models/i-i-s-111-график';
import IIS111ДолжностиModel from './models/i-i-s-111-должности';
import IIS111ОрганизацияModel from './models/i-i-s-111-организация';
import IIS111ПодразделенияModel from './models/i-i-s-111-подразделения';
import IIS111ПриемModel from './models/i-i-s-111-прием';
import IIS111РасчетModel from './models/i-i-s-111-расчет';
import IIS111СотрудникModel from './models/i-i-s-111-сотрудник';
import IIS111ТаблицаModel from './models/i-i-s-111-таблица';
import IIS111УвольнениеModel from './models/i-i-s-111-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-111-график': IIS111ГрафикModel,
    'i-i-s-111-должности': IIS111ДолжностиModel,
    'i-i-s-111-организация': IIS111ОрганизацияModel,
    'i-i-s-111-подразделения': IIS111ПодразделенияModel,
    'i-i-s-111-прием': IIS111ПриемModel,
    'i-i-s-111-расчет': IIS111РасчетModel,
    'i-i-s-111-сотрудник': IIS111СотрудникModel,
    'i-i-s-111-таблица': IIS111ТаблицаModel,
    'i-i-s-111-увольнение': IIS111УвольнениеModel
  },

  'application-name': '111',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '111',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '111',
          title: '111'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        111: {
          caption: '111',
          title: '111',
          'i-i-s-111-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-111-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-111-расчет-l': {
            caption: 'Расчет',
            title: ''
          },
          'i-i-s-111-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          },
          'i-i-s-111-таблица-l': {
            caption: 'Таблица',
            title: ''
          },
          'i-i-s-111-подразделения-l': {
            caption: 'Подразделения',
            title: ''
          },
          'i-i-s-111-прием-l': {
            caption: 'Прием',
            title: ''
          },
          'i-i-s-111-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-111-график-l': {
            caption: 'График',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-111-график-l': IIS111ГрафикLForm,
    'i-i-s-111-должности-l': IIS111ДолжностиLForm,
    'i-i-s-111-организация-l': IIS111ОрганизацияLForm,
    'i-i-s-111-подразделения-l': IIS111ПодразделенияLForm,
    'i-i-s-111-прием-l': IIS111ПриемLForm,
    'i-i-s-111-расчет-l': IIS111РасчетLForm,
    'i-i-s-111-сотрудник-l': IIS111СотрудникLForm,
    'i-i-s-111-таблица-l': IIS111ТаблицаLForm,
    'i-i-s-111-увольнение-l': IIS111УвольнениеLForm,
    'i-i-s-111-график-e': IIS111ГрафикEForm,
    'i-i-s-111-должности-e': IIS111ДолжностиEForm,
    'i-i-s-111-организация-e': IIS111ОрганизацияEForm,
    'i-i-s-111-подразделения-e': IIS111ПодразделенияEForm,
    'i-i-s-111-прием-e': IIS111ПриемEForm,
    'i-i-s-111-расчет-e': IIS111РасчетEForm,
    'i-i-s-111-сотрудник-e': IIS111СотрудникEForm,
    'i-i-s-111-таблица-e': IIS111ТаблицаEForm,
    'i-i-s-111-увольнение-e': IIS111УвольнениеEForm
  },

});

export default translations;
