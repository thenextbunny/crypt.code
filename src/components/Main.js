import { useState } from "react";

/* Style */
import "./Main.css";

/* Images */
import Girl from "../assets/images/girl search.svg";

/* Data */
import { cryption } from "../data/cryption";

function Main() {
	const replaceAll = require("string.prototype.replaceall");

	const [textEntry, settextEntry] = useState("");

	const handleText = (event) => {
		settextEntry(event.target.value);
	};

	let text = textEntry;

	const encrypt = () => {
		cryption.forEach((element) => {
			text = replaceAll(text, element[0], element[1]); // [0] = letter, [1] = code
		});
		return showText(text);
	};

	const decrypt = () => {
		text = text.concat(" ");

		for (let i = 0; i < cryption.length; i++) {
			text = replaceAll(text, cryption[i][1], cryption[i][0]); // [0] = letter, [1] = code
		}
		return showText(text);
	};

	const showText = (text) => {
		const withoutMessage = document.querySelector(".without-text");
		const withMessage = document.querySelector(".with-text");
		const message = document.querySelector("#final-text");

		if (text.trim()) {
			withoutMessage.style.display = "none";
			withMessage.style.display = "flex";
			message.value = text;
		} else {
			withoutMessage.style.display = "flex";
			withMessage.style.display = "none";
		}
	};

	const copyText = () => {
		const text = document.getElementById("final-text");
		text.select();
		document.execCommand("copy");
	};

	return (
		<main>
			<div className="container">
				<div className="field-text-area">
					<textarea name="text" id="text" placeholder="Digite um texto para criptografar ou descriptografar" onChange={handleText} value={textEntry}></textarea>
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
					<div className="without-text">
						<img src={Girl} alt="Uma ilustração de uma pessoa segurando uma lupa para visualizar um diamante." />
						<p>Nenhuma mensagem foi encontrada</p>
					</div>
					<div className="with-text">
						<textarea name="final-text" id="final-text" readOnly></textarea>
						<div className="box-button">
							<button id="copyText" onClick={copyText}>
								Copiar
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
