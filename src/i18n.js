import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          description:{
          part1: 'Commonly known as “the tree pose”, this asana is very basic and helps improve your sense of self and centres your body and mind.',
          part2: 'Vikrasana',
          part3: 'How to do it',
          part4: 'While standing straight with ankles flat on the ground, lift one leg and place the ankle on the inner part of your opposite thigh.',
          part5: 'This will bend your knee outward.',
          part6: 'Balance and stretch your arms skyward and connect your palms.',
          part7: 'Natarajasana',
          part8: 'Commonly referred to as “the dancer’s pose”, this asana is great for mood balancing. It can be beneficial for those who are fighting depression and anxiety.',
          part9: 'With both legs planted on the ground, bend one knee back; using your arm, grip the ankle.',
          part10: 'Slowly keeping a steady posture, lean forward and lift your ankle towards the sky.',
          part11: 'Extend your free hand in front of you.',
          part12: 'Take 5 deep and even breaths.',
          part13: 'Padmasana',
          part14: 'Another basic yoga pose, possibly the hardest one. This helps your digestion, spinal strength and improves calmness of the mind and also your mood. It helps keep your anxiety and depression at bay.',
          part15: 'While sitting cross-legged, gently lift one ankle above your opposite thigh.',
          part16: 'Place it as close to the hip as possible, do the same with the other ankle.',
          part17: ' Place your palms on your knees, keep your back straight.',
          part18: 'Breathe evenly for 30 seconds.'
        }
      }
      },
      hi: {
        translation: {
          description: {
            part1: 'आमतौर पर "ट्री पोज़" के रूप में जाना जाता है, यह आसन बहुत ही बुनियादी है और आपकी स्वयं की भावना को बेहतर बनाने में मदद करता है और आपके शरीर और दिमाग को केंद्र में रखता है।',
            part2: 'विकारासन',
            part3: 'यह कैसे करना है',
            part4: 'टखनों को जमीन पर सपाट रखते हुए सीधे खड़े होते हुए एक पैर उठाएं और टखने को अपनी विपरीत जांघ के अंदरूनी हिस्से पर रखें।',
            part5: 'इससे आपका घुटना बाहर की ओर झुक जाएगा।',
            part6: 'संतुलन बनाएं और अपनी बाहों को आकाश की ओर फैलाएं और अपनी हथेलियों को जोड़ लें।',
            part7: 'नटराजसन:',
            part8: 'आमतौर पर "नर्तक की मुद्रा" के रूप में जाना जाता है, यह आसन मूड संतुलन के लिए बहुत अच्छा है। यह उन लोगों के लिए फायदेमंद हो सकता है जो अवसाद और चिंता से लड़ रहे हैं।',
            part9: 'दोनों पैरों को जमीन पर टिकाकर एक घुटने को पीछे की ओर मोड़ें; अपने हाथ का उपयोग करके, टखने को पकड़ें।',
            part10: 'धीरे-धीरे स्थिर मुद्रा रखते हुए आगे की ओर झुकें और अपने टखने को आकाश की ओर उठाएं।',
            part11: 'अपने सामने अपना खाली हाथ बढ़ाएं।',
            part12: '5 गहरी और समान सांसें लें।',
            part13: 'पद्मासन',
            part14: 'एक और बुनियादी योग मुद्रा, संभवतः सबसे कठिन। यह आपके पाचन, रीढ़ की हड्डी की ताकत में मदद करता है और मन की शांति और आपके मूड में भी सुधार करता है। यह आपकी चिंता और अवसाद को दूर रखने में मदद करता है।',
            part15: 'क्रॉस लेग्ड बैठे हुए, धीरे से एक टखने को अपनी विपरीत जांघ के ऊपर उठाएं।',
            part16: 'इसे जितना हो सके कूल्हे के पास रखें, दूसरे टखने के साथ भी ऐसा ही करें।',
            part17: 'अपनी हथेलियों को अपने घुटनों पर रखें, अपनी पीठ को सीधा रखें।',
            part18: '30 सेकंड के लिए समान रूप से सांस लें।'
          }
        }
      }
    }
  });

export default i18n;