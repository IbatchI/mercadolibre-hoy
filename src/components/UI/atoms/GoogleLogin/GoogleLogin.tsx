export const GoogleLogin = () => {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="272488292820-c57lkteo83iad88r273fajl5299talrf.apps.googleusercontent.com"
        data-callback="logInWithGoogle"
        // data-login_uri="http://localhost:8080/register"
        data-auto_prompt="false"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </>
  )
}
