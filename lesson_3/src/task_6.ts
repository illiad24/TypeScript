// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата).
// Створити функції для перевірки цього типу (Type Guard, Assert)

type Ticket = {
  destination: string;
  price: number;
  passengerName: string;
  date: Date;
};
const myTicket = {
  destination: "Київ — Варшава",
  price: 1200,
  passengerName: "Іваненко Іван Іванович",
  date: new Date("2024-05-20T10:00:00"),
};

// function isTicket(data: unknown): data is Ticket {
//   if (typeof data !== "object" || typeof data === null) {
//     return false;
//   }

//   return (
//     !!data &&
//     typeof data === "object" &&
//     ["destination", "passengerName", "price", "date"].every(
//       (key) => key in data
//     )
//   );
// }

// if (isTicket(myTicket)) {
//   console.log("Це квиток:", myTicket.destination);
// } else {
//   console.log("Це не квиток");
// }

function isTicket(data: unknown): asserts data is Ticket {
  if (
    !(
      !!data &&
      typeof data === "object" &&
      ["destination", "passengerName", "price", "date"].every(
        (key) => key in data
      )
    )
  )
    throw new Error("error");
}

isTicket(myTicket);

console.log(myTicket.destination);
