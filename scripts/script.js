const kmNumber = parseFloat (prompt ('Quanti chilometri desidera percorrere?'))
const passengerAge = parseInt (prompt ('Quanti anni hai?'))

console.log('numero chilometri =', kmNumber);
console.log('eta passeggero =', passengerAge);

let ticketPrice = kmNumber * 0.21;

// console.log('Prezzo base biglietto =', ticketPrice.toFixed(2) + " " + "€");

if (passengerAge < 18) {
    ticketPrice = ticketPrice - 20 / 100;
} else if (passengerAge > 65) {
    ticketPrice = ticketPrice - 40 / 100;
}

console.log('Prezzo Biglietto =', ticketPrice.toFixed(2) + " " + "€");
