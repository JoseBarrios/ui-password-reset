const view = document.createElement("template");
view.innerHTML = `
  <link href="/common/fonts/fontawesome-pro/web-fonts-with-css/css/fontawesome-all.min.css" rel="stylesheet">

  <style>
		:host([hidden]) {
			display: none;
		}

    :host {
			box-sizing: content-box;
			--ui-password-reset-font-family: 'Roboto', sans-serif;
			--ui-password-reset-container-bg-color: #fff;
			--ui-password-reset-container-border-color: gray;

			--ui-password-reset-input-bg-color: #fff;
			--ui-password-reset-input-border-color: darkGray;

			--ui-password-reset-button-bg-color: #409ad7;
			--ui-password-reset-button-border-color: #409ad7;
			--ui-password-reset-button-text-color: #fff;

			--ui-password-reset-text-color: gray;
			--ui-password-reset-text-error-color: #CD5C5C;
		}

    .container{
      background-color: var(--ui-password-reset-container-bg-color);
			margin-top:1px;
			margin-left:1px;
			width:calc(100% - 1px);
			height:calc(100% - 1px);

			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			min-width:250px;
			max-width:350px;
			min-height:365px;
			height:365px;
			margin-left:auto;
			margin-right:auto;

		}

		.image-container {
			width:100%;
			box-sizing: border-box;
			padding:1em;
		}

		.instructions-container {
			font-family: var(--ui-password-reset-font-family);
			color: var(--ui-password-reset-text-color);
			box-sizing: border-box;
			padding-left:2em;
			padding-right:2em;
			width:100%;
			line-height:1.5;
		}

		.form-container {
			width:90%;
		}

    .password-reset-logo {
			display:block;
      margin:auto;
      height:75px;
      padding:0px;
    }

		.email-container {
			position:relative;
			height:52px;
		}

		.password-container {
			position:relative;
			height:102px;
		}


    .password-reset-email {
			box-sizing: content-box;
			position:absolute;
			z-index:1;
			display:block;
			font-size:1em;
			padding:1em;
      background-color: var(--ui-password-reset-input-bg-color);
			border:1px solid #a9a9a9;
			width:calc(100% - 30px - 4px);
			text-align:center;
			border-radius:5px;
    }

    .password-reset-password {
			box-sizing: content-box;
			position:absolute;
			z-index:1;
			display:block;
			font-size:1em;
			padding:1em;
      background-color: var(--ui-password-reset-input-bg-color);
			border:1px solid #a9a9a9;
			border-radius:5px 5px 0px 0px;
			width:calc(100% - 2em - 2px);
			text-align:center;
    }
		.password-reset-password:nth-child(2){
			border-radius:0px 0px 5px 5px;
			text-align:center;
			margin-top:50px;
		}
		.password-reset-password:focus{
			z-index:10;
		}


    .password-reset-button{
			width:100%;
			display:block;
			margin-top:1em;
			margin-left:auto;
			margin-right:auto;
			padding-bottom:0px;
      background-color: var(--ui-password-reset-button-bg-color);
      text-transform: uppercase;
      border:1px var(--ui-password-reset-button-border-color) solid;
      color: var(--ui-password-reset-button-text-color);
			line-height:2.5em;
			border-radius:6px;
			font-size:1.1em;
      cursor:pointer;
    }

    .password-reset-button:disabled {
      background-color: transparent;
			border:1px solid transparent;
			color:#8fb74e;
			cursor:default;
		}


		.error-container {
			width:100%;
			text-align:center;
			height:0.8em;
			margin-top:0.8em;
		}

    #error {
      font-size:0.8em;
      color: var(--ui-password-reset-text-error-color);
      font-weight:800;
      visibility: hidden;
			line-height:0.8em;
			margin:0px;
			padding:0px;
    }

    .attention-animation {
      visibility: visible;
      animation: attention 300ms linear both;
      animation-iteration-count: 2;
    }

    @keyframes attention {
      0.00% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1); }
      11.11% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.725, 0, 1, 1); }
      22.22% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10.113, 0, 1, 1); }
      33.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12, 0, 2, 1); }
      44.44% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.08, 0, 2, 1); }
      55.56% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -3.84, 0, 2, 1); }
      66.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -12, 0, 3, 1); }
      77.78% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -10.275, 0, 3, 1); }
      88.89% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1.887, 0, 3, 1); }
      100.00% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1); }
    }
  </style>

			<!--Email sent! Check your jose@cognilab.com inbox for instructions from us on how to reset your password.-->
			<!--You told us you forgot your password. If you really did, click here to choose a new one: XXX If you didn't mean to reset your password, then you can just ignore this email; your password will not change.-->


	<div class="container">
		<div class="image-container">
			<img id="logo" class="password-reset-logo" alt="logo"/>
		</div>
		<div class="instructions-container">
			<p id="instructions"> To reset your password, enter the email address you use to signin into your account. </p>
		</div>
		<div class="form-container">
			<form id="form" method="POST" action="">
				<input id="csrf" type="hidden" name="_csrf" class="form-control" value="">
				<div id="emailContainer" class="email-container">
					<input id="email" type="email" name="email" class="password-reset-email" placeholder="email@email.com">
				</div>
				<div id="passwordContainer" class="password-container" >
					<input id="password" type="password" name="password" class="password-reset-password" placeholder="••••••••••••••••" minlength="8" >
					<input id="passwordVerify" type="password" class="password-reset-password" placeholder="••••••••••••••••" minlenth="8" >
				</div>

				<button id="submitButton" type="submit" class="password-reset-button">
					<span id="emailButtonText">Get Reset Link</span>
					<span id="sentButtonText" ><span class="far fa-check"></span>&nbsp Email SENT</span>
					<span id="passwordResetButtonText" >Change password</span>
				</button>

				<div class="error-container">
					<p id="error"></p>
				</div>
			</form>
		</div>
	</div>
`;

export default view;
