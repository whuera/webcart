import axios from 'axios';

export class UserService{
     baseUrl = "https://web-shopping-cart.azurewebsites.net/api/customer/customers";
     getAll(){
         console.log("dentro del servicio")
         return (
             axios.get(this.baseUrl)
             .then(resultado => resultado )
             .then(resultado => console.log('Api: ',resultado.data) )
         )
     }
}
export default UserService;