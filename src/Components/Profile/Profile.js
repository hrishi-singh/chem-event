import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Profile.css";

function Profile() {
  const [userData, setUserData] = useState({});
  const currentUser = useAuth();
  const db = getDatabase();
  useEffect(() => {
    try {
      //getting previously saved data
      // console.log({ SelectedCaseDetails });
      const getData = async () => {
        const docRef = ref(db, "users/" + currentUser.currentUser.uid);
        //alert(docRef);
        onValue(
          docRef,
          (snapshot) => {
            const data = snapshot.val();
            //alert(JSON.stringify(data));
            setUserData(data);
          },
          (errorObject) => {
            console.log("The read failed: " + errorObject.name);
          }
        );
      };
      getData();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    <div className="profilesection">
      <div class="profilecard" data-tilt>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IpIPYsZ4B04ZB632wIBmK1zBg1LzGCXMoN_W4E16GBV3fIxynzR7mRoSRQU2qkTYUXk&usqp=CAU"
          alt=""
        />
        <div className="profile-box">
          <p>
            {" "}
            Name : <span>{userData ? userData.name : "Loading..."}</span>
          </p>
          <p>Institute name : {userData ? userData.college : "Loading..."}</p>
          <p>Enrolled In : {userData ? userData.enrolled : "Loading..."}</p>
          <p>Email : {userData ? userData.email : "Loading..."}</p>
          <p>
            Accomodation : {userData ? userData.accomodation : "Loading..."}
          </p>
          <p>Phone no. : {userData ? userData.phone : "Loading..."}</p>
          <p>Gender : {userData ? userData.gender : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
