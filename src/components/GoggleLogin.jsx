import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login successful:", credentialResponse);
    // You can decode the JWT token here or send it to your backend
    // Example: send credentialResponse.credential to your server
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        useOneTap={false}
        theme="outline"
        size="large"
        text="signin_with"
        shape="rectangular"
        width="100%"
      />
    </div>
  );
};

export default GoogleLoginComponent;
