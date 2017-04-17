<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Login Form</title>
        <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
          <section class="container">
            <div class="login">
              <h1>Login</h1>
              <form method="post" action="validate.jsp">
                <p>
                  <input type="text" name="login" value="" placeholder="Username">
                  </p>
                  <p>
                    <input type="password" name="password" value="" placeholder="Password">
                    </p>
                    <p class="remember_me">
                      <label>
                        <input type="checkbox" name="remember_me" id="remember_me">
            Save account?
          
                        </label>
                      </p>
                      <p class="submit">
                        <input type="submit" name="commit" value="Login">
                        </p>
                      </form>
                    </div>
                    <div class="login-help">
                      <p>
                        <a href="index.html">Forgot your password?</a>
                      </p>
                    </div>
                  </section>
                </body>
              </html>
