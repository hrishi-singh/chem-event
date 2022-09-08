import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { getDatabase, ref, onValue } from "firebase/database";
import './Profile.css'

function Profile() {


  const [userData, setUserData] = useState({});
  const currentUser = useAuth();
  const db = getDatabase();
  useEffect(() => {
    try {
      //getting previously saved data
      // console.log({ SelectedCaseDetails });
      const getData = async () => {
        const docRef = ref(
          db,
          'users/' + currentUser.currentUser.uid
        );
        //alert(docRef);
        onValue(docRef, (snapshot) => {
          const data = snapshot.val();
          //alert(JSON.stringify(data));
          setUserData(data);
        }
          , (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          }
        );


      };
      getData();
    } catch (error) {
      console.log({ error });
    }


  }, []);

  return (
<div className='profilesection'> 
  {/* <div className="container profilecon">
    <div className="imgBx">
    <img src="https://i.pinimg.com/564x/2a/18/5a/2a185a09ddedd2db1a3d34b6ce211557.jpg" alt="" />
    </div>
    <div className="details">
      <div className="content">
        <div className="profile-box">

      <p> Username : {userData.name}</p>
      <p>Institute name : {userData.college}</p>
            <p>Accomodation : {userData.accomodation}</p>
            <p>Gender : {userData.gender}</p>
            <p>Phone no. : {userData.phone}</p>
            <p>Email : {userData.email}</p>
            <p>Enrolled In : {userData.enrolled}</p>
        </div>
      </div>

    </div>
  </div> */}
 {/* <Card>
        <Card.Img variant="top" src={"https://www.cumbria.ac.uk/media/staff-profile-images/staff_profile_-generic_350x350px.png"} />
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            <p>Username : {userData.name}</p>
            <p>Institute name : {userData.college}</p>
            <p>Accomodation : {userData.accomodation}</p>
            <p>Gender : {userData.gender}</p>
            <p>Phone no. : {userData.phone}</p>
            <p>Email : {userData.email}</p>
            <p>Enrolled In : {userData.enrolled}</p>
          </Card.Text>
        </Card.Body>
      </Card> */}
       <div class="profilecard" data-tilt>
                {/* <img src="" alt=""/> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IpIPYsZ4B04ZB632wIBmK1zBg1LzGCXMoN_W4E16GBV3fIxynzR7mRoSRQU2qkTYUXk&usqp=CAU" alt="" />
                <div className="profile-box">
      <p> Name : <spa>{userData? userData.name: 'Loading...'}</spa></p>
      <p>Institute name : { userData?  userData.college: 'Loading...'}</p>
            <p>Enrolled In : {userData? userData.enrolled: 'Loading...'}</p>
            <p>Email : {userData? userData.email: 'Loading...'}</p>
            <p>Accomodation : {userData? userData.accomodation: 'Loading...'}</p>
            <p>Phone no. : {userData? userData.phone: 'Loading...'}</p>
            <p>Gender : {userData? userData.gender: 'Loading...'}</p>
        </div>

            </div>
</div>
     
  );
}
export default Profile;

