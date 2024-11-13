Biglietto del treno
===

## Consegna
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Mio Approccio
La mia idea è quella di avere due variabili const con un parseFloat(prompt) per la richiesta dei chilometri e un parseInt(prompt) per la richiesta dell'età del passeggero.
A questo punto ho una terza variabile let prezzo del biglietto a cui assegno il valore prompt numero chilometri * 0.21 €. Di seguito assegno gli sconti con un if (etaPasseggero < 18) allora applico lo sconto del 20%, if else (etaPasseggero > 65) applico lo sconto del 40%.
Ora rimane solo rendere l'output della variabile prezzoBiglietto in forma umana, penso mi servirà il metodo toFixed () che potrei far funzionare trasformando la variabile output del prezzo in un numero e quindi avere poi outputPrezzo.toFixed (2) che con un console.log (outputPrezzo) dovrebbe darmi il risultato corretto.