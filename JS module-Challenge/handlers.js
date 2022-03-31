 export function generateOptions(options) {
       return Object.entries(options)
         .map(
           ([currencyCode, currencyName]) =>
             // `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
             `<option value="${currencyCode}">${currencyCode == 'MSG' ? " " : currencyCode} - ${currencyName}</option>`
         )
         .join('');
         }

// its erforms any list related to currency related process in this file         