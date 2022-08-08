import Logo from "../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<h1>
				<img src={Logo} alt="Alura" />
				<span>en.de(crypt)</span>
			</h1>
		</header>
	);
};

export default Header;
