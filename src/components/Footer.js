import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="tnb">
				<div className="tnb-text">
					<p>
						Um projeto da <strong>Oracle + Alura</strong>
					</p>
					<p>
						Desenvolvido por <strong>Vitor Coelho</strong>
					</p>
				</div>
				<div className="tnb-icons">
					<span>
						<a href="http://github.com/thenextbunny" target="_blank" rel="noopener noreferrer">
							<img src="/github.svg" alt="Perfil do Vitor Coelho no GitHub" />
						</a>
					</span>

					<span>
						<a href="https://www.linkedin.com/in/vitorcoelhot/" target="_blank" rel="noopener noreferrer">
							<img src="/linkedin.svg" alt="Perfil do LinkedIn do Vitor Coelho" />
						</a>
					</span>
					<span>
						<a href="mailto:vitorcoelhosilvat@gmail.com" target="_blank" rel="noopener noreferrer">
							<img src="/email.svg" alt="Email do Vitor Coelho" />
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
