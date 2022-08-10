import { useState } from "react";

/* Style */
import "./Main.css";

/* Images */
import Girl from "../assets/images/girl search.svg";

/* Data */
import { cryption } from "../data/cryption";

function Main() {
	const replaceAll = require("string.prototype.replaceall");

	const [text, setText] = useState("");
	const [result, setResult] = useState("");

	const encrypt = () => {
		let normalText = text;
		cryption.forEach((element) => {
			normalText = replaceAll(normalText, element[0], element[1]); // [0] = letter, [1] = code
		});
		return setResult(normalText);
	};

	const decrypt = () => {
		let encryptedText = text.concat(" ");

		for (let i = 0; i < cryption.length; i++) {
			encryptedText = replaceAll(encryptedText, cryption[i][1], cryption[i][0]); // [0] = letter, [1] = code
		}
		return setResult(encryptedText);
	};

	const copy = () => {
		const copyText = document.getElementById("final-text");
		copyText.select();
		document.execCommand("copy");
	};

	return (
		<main>
			<div className="container">
				<div className="field-text-area">
					<textarea
						name="text"
						id="text"
						placeholder="Digite um texto para criptografar ou descriptografar"
						onChange={(event) => {
							setText(event.target.value);
						}}
						value={text}
					></textarea>
					<div className="box-button">
						<button id="encrypt" onClick={encrypt}>
							Criptografar
						</button>
						<button id="decrypt" onClick={decrypt}>
							Decriptografar
						</button>
					</div>
				</div>
				<div className="final-text-area">
					{!result.trim() ? (
						<div className="without-text">
							<img src={Girl} alt="Uma ilustração de uma pessoa segurando uma lupa para visualizar um diamante." />
							<p>Nenhuma mensagem foi encontrada</p>
						</div>
					) : (
						<div className="with-text">
							<textarea name="final-text" id="final-text" readOnly value={result}></textarea>
							<div className="box-button">
								<button id="copyText" onClick={copy}>
									Copiar
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

export default Main;
