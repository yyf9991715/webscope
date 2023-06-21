import "./login.css"

export default function Login (){
    return (
        <>
             <title>eLearningHelper - Login Page</title>
        
            <div class="background-image"></div>
            <div class="overlay"></div>
            <h1>Login to eLearningHelper</h1>
            
            
            <div class="signup-link">
            Don't have an account? <a href="signup.html">Sign up</a> or
            </div>
            
        
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false">
            </div>
            <div class="login-buttons">
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
            </div>
            
        
            <div class="fb-login-container">
            <div class="fb-login-button" data-width="195" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
            </div>
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v17.0" nonce="oTtydwXL"></script>
            
        
        </>
       
    );
}