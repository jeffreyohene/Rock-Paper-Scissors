import React from 'react';

function App() {
  return (
    <div>
        {/* Google Tag Manager */}
        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-KV647KJ')}
        </script>
        {/* End Google Tag Manager */}

      <div className='body'>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KV647KJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="left-pane">
          <div className="title-container">
            <h1>ABURI '2023</h1>
          </div>
          <p>
            Photo from{' '}
            <a href="https://images.unsplash.com/photo-1616312485781-2707a48b3af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80">
              Sven Ciupka
            </a>
          </p>
        </div>
        <div className="right-pane">
          <div className="sub-paragraph">
            <h1>E30 DRIFT KRAZE!!</h1>
            <p>
              Are you ready for this year's E30 Drift Kraze????!
            </p>
            <p>
              Join us this year, first Saturday in August as we drift
              along Aburi's mountain slopes in the best classic car
              ever!
            </p>
          </div>
          <div className="form">
            <h2>REGISTER NOW!</h2>
            <form action="#" method="post" id="sign-up">
              <div className="top-form">
                <div className="form-input">
                  <label htmlFor="first-name">Name</label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Jeff"
                    pattern="^([a-zA-Z]+)$"
                    required
                  />
                </div>
              </div>

              <div className="mid-form">
                <div className="form-input">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="jeff@bmw.de"
                    pattern="^([\w\.-_]+)@([\w-]+)\.([a-zA-Z]{2,5})([\.][a-zA-Z]{2,5})?$"
                    required
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="tel">Phone Number</label>
                  <input
                    type="tel"
                    id="tel"
                    placeholder="xxx-xxx-xxxx"
                    pattern="^([\d]{3})[\-]?([\d]{3})[\-]?([\d]{4})$"
                    required
                  />
                </div>
              </div>

              <div className="bottom-form">
                <div className="form-input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="passwordInput"
                    required
                  />
                  <span
                    id="pass_strength"
                    className="badge displayBadge"
                  >
                    Meh!
                  </span>
                  <p id="pass_requirements">
                    *Include at least one uppercase letter, number & special character... or else your BMW E30 will be confiscated!
                  </p>
                </div>

                <div className="form-input">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    id="password_confirm"
                    placeholder="********"
                    required
                  />
                  <p id="pass_match"></p>
                </div>
              </div>
              <div className="button-container">
                <div className="button-transform">
                  <button
                    type="submit"
                    form="sign-up"
                  >
                    Create Account
                  </button>
                </div>
                <p>
                  Already an E30 Drift Veteran?{' '}
                  <a
                    href="https://jeffreyohene.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log In Here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
