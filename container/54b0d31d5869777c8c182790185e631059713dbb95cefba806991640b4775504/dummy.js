var dateObj = new Date();
var options = { year: "numeric", month: "long", day: "numeric" };
var locale = "fr";
var formatted = new Intl.DateTimeFormat(locale, options).format(dateObj);
console.log(formatted);
