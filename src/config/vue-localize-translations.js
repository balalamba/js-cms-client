export default {
  // global context
  'global': {
    'project-name': {
      en: 'Name of the project in English',
      ru: 'Название проекта на Русском'
    },
    // translations for language selector items
    lang: {
      eng: {
        en: 'English',
        ru: 'Английский'
      },
      rus: {
        en: 'Russian',
        ru: 'Русский'
      }
    }
  },
  // context for translations of frontend phrases (public section of your site)
  'site': {
    // context for translations of header
    'header': {
      // context for translations for anchors in nav menu
      'nav': {
        // key of the anchor of the link to homepage
        'home': {
          // translation of the anchor of the link to homepage into the English
          en: 'Home',
          ru: 'Главная'
        },
        // key of the anchor of the link to about page
        'about': {
          en: 'About',
          ru: 'О проекте'
        },
        // key of the anchor of the link to contacts page
        'contacts': {
          en: 'Contacts',
          ru: 'Контакты'
        },
        'loginbox': {
          // ...
        }
      }
    },
    'footer': {
      // translations of footer phrases
    }
  },
  'admin': {
    // translations of administration panel phrases
  }
}