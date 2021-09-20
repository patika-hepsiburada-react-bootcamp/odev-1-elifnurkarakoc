import getData from './lib/service.js';


(async () => {
   const user = await getData(1);
   console.log(user)
})()