import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import axios from 'axios' ;
export const signOut = (props) =>{ 
      axios.post( serverURL() + props +"/logout/" ,{},TokenConfig() )
          .then(res =>{
              console.log(res);
            localStorage.removeItem('token');
            localStorage.removeItem('userType');
            localStorage.removeItem('username');
            //localStorage.removeItem('firstName');
            //localStorage.removeItem('lastName');

            window.location.href = "/signIn" ;
          })
          .catch(err =>{
            console.log(err);
          }) 
}