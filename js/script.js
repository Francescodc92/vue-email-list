/*
  - Far comparire gli indirizzi email solamente quando sono stati tutti generati.

  // soluzione di marco 

  vue stampa gli elementi in base al cambio del data , quindi se pushiamo direttamente le email che vengono da axios nell'array emails vue farà uscire le email cosi come arrivano , 
  per prevenire questo comportamento dobbiamo inserire tutti i dati con un solo push , 

  quindi possiamo creare un secondo array all'interno di created dove pusheremo i dati che vengono da axios e poi (usando lo spred) li inseriamo nell'array in data , cosi che l'inserimento sia fatto con un solo push e i dati vengano caricati tutti in una volta 
*/
const { createApp } = Vue

createApp({
  data() {
    return {
      emails: []
    }
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res)=> {
          this.emails.push(res.data.response);
        })
    }
  }
}).mount('#app');

