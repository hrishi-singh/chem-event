import React, { useEffect,useState } from 'react';
import {useAuth} from '../contexts/AuthContext'
import { getDatabase,ref, onValue} from "firebase/database";
// import {doc,getDoc} from 'firebase/firestore'
// import Cards from '../Cards';

function Profile(){
 

    const  [userData, setUserData] = useState({});
    const currentUser = useAuth();
    const db = getDatabase();
    useEffect(() => {
        try {
          //getting previously saved data
          // console.log({ SelectedCaseDetails });
          const getData = async () => {
            const docRef = ref(
              db,
             'users/'+currentUser.currentUser.uid
            );
            //alert(docRef);
            onValue(docRef,(snapshot) => {
                const data = snapshot.val();
                //alert(JSON.stringify(data));
                setUserData(data);
                }
                , (errorObject) => {
                    console.log('The read failed: ' + errorObject.name);} 
            );
           
            
          };
          getData();
        } catch (error) {
          console.log({ error });
        }
        
        
         }, []);

    return(

        <div>
{/* <Cards title={"User Profile"} por={userData} colm={3} className={'teamcard my-3'}/> */}

        <h3>Username : {userData.username}</h3>
        <h3>Institute name : {userData.institute_name}</h3>
        <h3>Accomodation : {userData.accomodation}</h3>
        <h3>Phone no. : {userData.phone}</h3>
        <h3>Email : {userData.email}</h3>
        </div>
     );
}            
export default Profile;

