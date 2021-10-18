export default class SwapiService {

     async searchId() {
        const res = await fetch('https://front-test.beta.aviasales.ru/search')
        const body = await res.json()
        return body.searchId;
     }

     async getTickets(id) {
            const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
            if(res.ok) {
               const body = await res.json()
               return body;
            }else  {
               return {tickets: [], stop: false}
            }
    }
}
