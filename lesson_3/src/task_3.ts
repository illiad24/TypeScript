// Задача 3. Задача “Події календаря”.
//  Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).
//  Кожна подія може бути mandatory або optional.
// Створити тип CalendarEvent, який об’єднує тип події та її важливість,
// використовуючи перетини та об’єднання типів.

type EventType =
  | { type: "Meeting"; participants: string[] }
  | { type: "Deadline"; dueDate: Date }
  | { type: "Reminder"; note: string };

type Importance = { flag: "mandatory" | "optional" };

type CalendarEvent = EventType & Importance;

const newEvent: CalendarEvent = {
  type: "Meeting",
  participants: ["Ivan", "Petro"],
  flag: "mandatory",
};
