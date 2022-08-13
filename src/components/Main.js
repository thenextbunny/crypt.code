import { useState, useRef } from "react";

/* Style */
import "./Main.css";

/* Images */
import Girl from "../assets/images/girl search.svg";

// Data
import { cryption } from "../data/cryption";

const Main = () => {
	const replaceAll = require("string.prototype.replaceall");

	const [text, setText] = useState("");
	const [result, setResult] = useState("");
	const [copy, setCopy] = useState(false);
	const copyRef = useRef(null);

	const handleText = (event) => {
		setText(event.target.value);
	};

	const encrypt = () => {
		let encryptText = text;
		cryption.forEach((element) => {
			encryptText = replaceAll(encryptText, element[0], element[1]); // [0] = letter, [1] = code
		});
		return setResult(encryptText);
	};

	const decrypt = () => {
		let decrypText = text.concat(" ");

		for (let i = 0; i < cryption.length; i++) {
			decrypText = replaceAll(decrypText, cryption[i][1], cryption[i][0]); // [0] = letter, [1] = code
		}
		return setResult(decrypText);
	};

	const copyText = () => {
		copyRef.current.select();
		navigator.clipboard.writeText(copyRef.current.value);

		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3000);
	};

	console.log(text);

	return (
		<main>
			<div className="container">
				<div className="field-text-area">
					<textarea name="text" id="text" onChange={handleText} value={text} placeholder="Digite um texto para criptografar ou descriptografar"></textarea>
					<div className="box-button">
						<button id="encrypt" onClick={encrypt}>
							Criptografar
						</button>
						<button id="decrypt" onClick={decrypt}>
							Decriptografar
						</button>
						{text.length > 0 && text.trim() ? (
							<button
								id="clear-text"
								onClick={() => {
									setText("");
									setResult("");
								}}
							>
								Limpar
							</button>
						) : null}
					</div>
				</div>
				<div className="final-text-area">
					{!result.trim() ? (
						<div className="without-text">
							<img src={Girl} alt="Uma ilustração de uma pessoa segurando uma lupa observando um diamante" />
							<p>Nenhuma mensagem foi encontrada</p>
						</div>
					) : (
						<div className="with-text">
							<textarea name="final-text" id="final-text" readOnly value={result} ref={copyRef}></textarea>
							<div className="box-button">
								<button id="copy-text" onClick={copyText}>
									{copy ? "Copiado!" : "Copiar"}
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Main;
