import { useState } from "react";
import "./App.css";
import {
  LoginSocialFacebook,
  LoginSocialInstagram,
} from "reactjs-social-login";
import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";

function App() {
  const [profile, setprofile] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(profile);
  // console.log(profile.picture.data.url);
  let accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);

  if (accessToken) {
    console.log("login");
  } else {
    console.log("logout");
  }
  return (
    <>
      <div>
        <LoginSocialFacebook
          appId="142034098827137"
          onResolve={(r) => {
            setprofile(r.data);
            localStorage.setItem("accessToken", r.data.accessToken);

            setLoading(false);
          }}
          onReject={(e) => {
            console.log(e);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>

      {loading ? null : (
        <div>
          <h1>{profile.name}</h1>
          <h1>{profile.email}</h1>
          <img src={profile.picture.data.url} />
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            logout
          </button>
        </div>
      )}
    </>
   
  );
}

export default App;
