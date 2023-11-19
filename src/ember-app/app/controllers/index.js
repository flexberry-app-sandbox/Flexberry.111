import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.111.caption'),
          title: i18n.t('forms.application.sitemap.111.title'),
          children: [{
            link: 'i-i-s-111-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-сотрудник-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-111-должности-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-должности-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-111-расчет-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-расчет-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-расчет-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-111-увольнение-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-увольнение-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-увольнение-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-111-таблица-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-таблица-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-таблица-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-111-подразделения-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-подразделения-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-111-прием-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-прием-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-прием-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-111-организация-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-организация-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-111-график-l',
            caption: i18n.t('forms.application.sitemap.111.i-i-s-111-график-l.caption'),
            title: i18n.t('forms.application.sitemap.111.i-i-s-111-график-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})