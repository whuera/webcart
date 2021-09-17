import axios from 'axios';

export class UserService{
     baseUrl = "http://3.14.152.199:8080/api/customer/customers";
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