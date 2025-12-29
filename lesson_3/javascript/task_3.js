"use strict";
// Задача 3. Задача “Події календаря”.
//  Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).
//  Кожна подія може бути mandatory або optional.
// Створити тип CalendarEvent, який об’єднує тип події та її важливість,
// використовуючи перетини та об’єднання типів.
const newEvent = {
    type: "Meeting",
    participants: ["Ivan", "Petro"],
    flag: "mandatory",
};
