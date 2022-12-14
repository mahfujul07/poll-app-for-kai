import { GoogleOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Button } from "antd";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { UserSession } from "../firebase/UserProvider";
import Loader from "../Loader.gif";
import Vote from "../vote.webp";

const GoogleAuth = (props) => {
  const { user, loading } = UserSession();
  const handleLogin = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // var token = result.credential.accessToken;
        // var user = result.user;
        if (props.location.state) {
          if (!props.location.state.from) props.history.push("/");
          else props.history.push(`/${props.location.state.from}`);
        } else props.history.push("/");
      })
      .catch(function (error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
      });
  };
  useEffect(() => {
    if (user) {
      if (props.location.state) {
        if (!props.location.state.from) props.history.push("/");
        else props.history.push(`/${props.location.state.from}`);
      } else props.history.push("/");
    }
  }, [
    user && props.history && props.location.state ? props.history.push : null,
  ]);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "23444898429",
          }}
        >
          <img src={Loader} alt="loader" />
        </div>
      ) : (
        <div>
          <h2 className="animate__animated animate__pulse heading1">
            Poll Maker
          </h2>
          <div className="flex_home">
            <div style={{ flexGrow: "1" }} className="min_wide">
              <h1 className="google_head">Login to get Started!</h1>
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={handleLogin}
                className="login_btn"
              >
                <GoogleOutlined />
                Log in with Google
              </Button>
            </div>
            <div style={{ flexGrow: "1" }}>
              <img
                src={Vote}
                alt="vote"
                className="home_img1 animate__animated animate__fadeIn"
              />
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleAuth;
