import I18n from 'react-native-i18n';
import en from './locales/en';
import pt from './locales/pt-BR';

I18n.fallbacks = true;
// 
// const deviceLocale = I18n.locale;
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
// I18n.defaultLocale = 'pt-BR';
// I18n.locale = 'en';
// I18n.locale = 'pt-BR';

I18n.translations = {
    en,
    pt
};

// console.log(I18n);

export default I18n; 
