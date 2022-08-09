import "./Footer.css";

/* Images */
import GitHub from "../assets/images/github.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Email from "../assets/images/email.svg";

function Footer() {
	return (
		<footer>
			<div className="tnb">
				<div className="tnb-text">
					<p>
						Um projeto da <strong>Oracle Next Education + Alura</strong>
					</p>
					<p>
						Desenvolvido por <strong>Vitor Coelho</strong>
					</p>
				</div>
				<div className="tnb-icons">
					<span>
						<a href="http://github.com/thenextbunny" target="_blank" rel="noopener noreferrer">
							<img src={GitHub} alt="Perfil do Vitor Coelho no GitHub" />
						</a>
					</span>

					<span>
						<a href="https://www.linkedin.com/in/vitorcoelhot/" target="_blank" rel="noopener noreferrer">
							<img src={LinkedIn} alt="Perfil do LinkedIn do Vitor Coelho" />
						</a>
					</span>
					<span>
						<a href="mailto:vitorcoelhosilvat@gmail.com" target="_blank" rel="noopener noreferrer">
							<img src={Email} alt="Email do Vitor Coelho" />
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
