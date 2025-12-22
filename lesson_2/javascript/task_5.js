"use strict";
// Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
var Settings;
(function (Settings) {
    Settings[Settings["open"] = 1] = "open";
    Settings[Settings["loop"] = 1] = "loop";
    Settings[Settings["fade"] = 0] = "fade";
    Settings[Settings["pagination"] = 0] = "pagination";
})(Settings || (Settings = {}));
console.log("Увімкнені налаштування:");
Object.entries(Settings).forEach(([key, value]) => {
    if (isNaN(Number(key)) && value === 1) {
        console.log(`${key} увімкнено`);
    }
});
