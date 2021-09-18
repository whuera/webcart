import axios from 'axios';

export class UserService{
     baseUrl = "http://18.222.164.54:8080/api/customer/customers";
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