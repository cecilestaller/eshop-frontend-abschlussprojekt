import { useContext, useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Products } from "../../context/Context";

const Login = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	const {
		users,
		setUsers,
		loggedIn,
		setLoggedIn,
		setUser,
		newUser,
		setNewUser,
	} = useContext(Products);
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPasswort, setLoginPasswort] = useState("");
	const [regEmail, setRegEmail] = useState("");
	const [regChecknEmail, setRegCheckEmail] = useState("");
	const [regPasswort, setRegPasswort] = useState("");
	const [regCheckPasswort, setRegCheckPasswort] = useState("");
	const [changeClassReg, setChangeClassReg] = useState(false);
	const [changeClassLogin, setChangeClassLogin] = useState(true);
	const navigate = useNavigate();

	//checking for correct login data
	const redirectLogin = () => {
		if (localStorage.getItem(loginEmail) == loginPasswort) {
			navigate("/home");
			localStorage.setItem("activeUser", loginEmail);
			setTimeout(() => window.location.reload(), 100);
		} else {
			alert("Please check your e-mail and password")
		}
	};

	//input login data into local storage
	const redirectRegistration = () => {
		if (regEmail !== regChecknEmail) {
			alert("e-mails don't match")
		} else if (regPasswort !== regCheckPasswort) {
			alert("passwords don't match")
		} else {
			setChangeClassReg(false);
			setChangeClassLogin(true);
			localStorage.setItem(regEmail, regPasswort);
			localStorage.setItem("cart" + regEmail, JSON.stringify([]));
			localStorage.setItem("fav" + regEmail, JSON.stringify([]));
			setNewUser(newUser++);
		}
	};

	return (
		<section className='loginContainer_Login'>
			<div className='loginDetails_Login'>
				<div className={`Login ${changeClassLogin ? "" : "hide"}`}>
					<form
						onSubmit={handleSubmit}
						className='LoginForm'>
						<button
							onClick={() => {
								setChangeClassReg(true);
								setChangeClassLogin(false);
							}}>
							Noch kein Kunde?
						</button>
						<label>
							E-Mail:
							<br />
							<input
								required
								type='text'
								onChange={(element) =>
									setLoginEmail(element.target.value)
								}
							/>
						</label>
						<label>
							Passwort:
							<br />
							<input
								required
								type='password'
								onChange={(element) =>
									setLoginPasswort(element.target.value)
								}
							/>
						</label>
						<input
							className='submitButton_Login'
							type='submit'
							value='Login'
							onClick={redirectLogin}
						/>
					</form>
				</div>
				<div className={`Register ${changeClassReg ? "" : "hide"}`}>
					<form
						onSubmit={handleSubmit}
						className='RegisterForm'>
						<button
							onClick={() => {
								setChangeClassReg(false);
								setChangeClassLogin(true);
							}}>
							Zurück zum Login?
						</button>
						<label>
							E-Mail:
							<br />
							<input
								required
								type='text'
								onChange={(element) =>
									setRegEmail(element.target.value)
								}
							/>
						</label>
						<label>
							E-Mail wiederholen:
							<br />
							<input
								required
								type='text'
								onChange={(element) =>
									setRegCheckEmail(element.target.value)
								}
							/>
						</label>
						<label>
							Passwort:
							<br />
							<input
								required
								type='password'
								onChange={(element) =>
									setRegPasswort(element.target.value)
								}
							/>
						</label>
						<label>
							Passwort wiederholen:
							<br />
							<input
								required
								type='password'
								onChange={(element) =>
									setRegCheckPasswort(element.target.value)
								}
							/>
						</label>
						<input
							className='submitButton_Login'
							type='submit'
							value='Registrieren'
							onClick={redirectRegistration}
						/>
					</form>
				</div>
			</div>
			<Navbar />
		</section>
	);
};

export default Login;
