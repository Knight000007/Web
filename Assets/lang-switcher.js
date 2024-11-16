// lang-switcher.js

// Object holding translations for each element ID
const translations = {
    "en": {
        "mental_health": "Mental Health",
        "what_is_it": "What is it?",
        "help_yourself_link": "How can you help yourself?",
        "help_others_link": "How can you help others?",
        "get_started": "Get started",
        "spread_awareness": "Start spreading awareness",
        "quote": "\"You wake up every morning to fight the same demons that left you so tired the night before.\"",
        "message-summary": "We set out to hear the stories of the many men and women who battle with mental health problems every day.",
        "callout-hero-image": "Listen to their stories",
        "educate": "Educate Yourself",
        "help_yourself": "Help Yourself",
        "help_others": "Help Others",
        "spread": "Spread the Word",
        "find_help": "Find Help",
        "take_test": "Take a Test",
        "sign_in": "Sign In"
    },
    "ne": {
        "mental_health": "मानसिक स्वास्थ्य",
        "what_is_it": "यो के हो?",
        "help_yourself_link": "आफ्नो मद्दत कसरी गर्न सकिन्छ?",
        "help_others_link": "अरूलाई मद्दत कसरी गर्न सकिन्छ?",
        "get_started": "सुरु गर्नुहोस्",
        "spread_awareness": "चेतना फैलाउन सुरु गर्नुहोस्",
        "quote": "\"तपाईंले हरेक बिहान उही भूतहरूसँग लड्नको लागि उठ्नुहुन्छ जसले तपाईंलाई अघिल्लो रातको थकित बनाएको थियो।\"",
        "message-summary": "हामी मानसिक स्वास्थ्य समस्याहरूसँग संघर्ष गर्ने धेरै पुरुष र महिलाहरूका कथाहरू सुन्न बाहिर निस्कियौं।",
        "callout-hero-image": "उनीहरूको कथाहरू सुन्नुहोस्",
        "educate": "आफूलाई शिक्षित गर्नुहोस्",
        "help_yourself": "आफ्नो मद्दत गर्नुहोस्",
        "help_others": "अरूको मद्दत गर्नुहोस्",
        "spread": "शब्द फैलाउनुहोस्",
        "find_help": "मद्दत खोज्नुहोस्",
        "take_test": "परीक्षण गर्नुहोस्",
        "sign_in": "साइन इन गर्नुहोस्"
    }
};

// Function to switch language
function switchLanguage(lang) {
    // Loop through each key in the translations object for the selected language
    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][id];
        }
    });
}

// Event listener for language selection dropdown
document.getElementById("language-toggle").addEventListener("change", (event) => {
    switchLanguage(event.target.value);
});

// Default to English on page load
switchLanguage("en");
