import "./Main.css";

/* Images */
import Girl from "../assets/images/girl search.svg";

function Main() {
	const replaceAll = require("string.prototype.replaceall");

	const alphabetAndEncryption = [
		["a", "001 "],
		["b", "010 "],
		["c", "012 "],
		["d", "020 "],
		["e", "035 "],
		["f", "050 "],
		["g", "067 "],
		["h", "077 "],
		["i", "091 "],
		["j", "031 "],
		["k", "011 "],
		["l", "023 "],
		["m", "032 "],
		["n", "040 "],
		["o", "053 "],
		["p", "060 "],
		["q", "070 "],
		["r", "080 "],
		["s", "090 "],
		["t", "000 "],
		["u", "017 "],
		["v", "094 "],
		["w", "033 "],
		["x", "044 "],
		["y", "057 "],
		["z", "065 "],
		["A", "123 "],
		["B", "153 "],
		["C", "167 "],
		["D", "173 "],
		["E", "179 "],
		["F", "181 "],
		["G", "191 "],
		["H", "193 "],
		["I", "197 "],
		["J", "199 "],
		["K", "165 "],
		["L", "143 "],
		["M", "147 "],
		["N", "149 "],
		["O", "151 "],
		["P", "157 "],
		["Q", "159 "],
		["R", "161 "],
		["S", "125 "],
		["T", "127 "],
		["U", "131 "],
		["V", "137 "],
		["W", "139 "],
		["X", "111 "],
		["Y", "163 "],
		["Z", "124 "],
		["á", "241 "],
		["Á", "246 "],
		["ã", "240 "],
		["Ã", "245 "],
		["â", "242 "],
		["Â", "247 "],
		["é", "243 "],
		["É", "248 "],
		["ê", "244 "],
		["Ê", "249 "],
		["í", "251 "],
		["Í", "252 "],
		["ó", "253 "],
		["Ó", "254 "],
		["õ", "255 "],
		["Õ", "256 "],
		["ô", "250 "],
		["Ô", "257 "],
		["ú", "259 "],
		["Ú", "260 "],
		["ü", "258 "],
		["Ü", "261 "],
		["ç", "263 "],
		["Ç", "264 "],
		["ñ", "265 "],
		["Ñ", "266 "],
		["Ý", "267 "],
		["ý", "268 "],
		["ÿ", "269 "],
		["Ÿ", "270 "],
		[" ", " "],
	];

	const encrypt = () => {
		let text = document.getElementById("text").value;

		alphabetAndEncryption.forEach((element) => {
			let replaceText = element[1];

			text = replaceAll(text, element[0], replaceText);
		});
		return showText(text);
	};

	const decrypt = () => {
		let text = document.getElementById("text").value;

		for (let i = 0; i < alphabetAndEncryption.length; i++) {
			let replaceText = alphabetAndEncryption[i][1];

			text = replaceAll(text, replaceText, alphabetAndEncryption[i][0]);
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
			<div className="text-area">
				<div className="container">
					<textarea name="text" id="text" placeholder="Digite um texto que você deseja criptografar ou descriptografar"></textarea>
					<div className="box-button">
						<button id="encrypt" onClick={encrypt}>
							Criptografar
						</button>
						<button id="decrypt" onClick={decrypt}>
							Decriptografar
						</button>
					</div>
				</div>
			</div>
			<div className="final-text-area">
				<div className="container without-text">
					<img src={Girl} />
					<p>Nenhuma mensagem foi encontrada</p>
				</div>
				<div className="container with-text">
					<textarea name="final-text" id="final-text" readOnly></textarea>
					<div className="box-button">
						<button id="copyText" onClick={copyText}>
							Copiar
						</button>
					</div>
				</div>
			</div>
		</main>
	);
	/*<main>
			<div className="text-area">
				<div className="container">
					<textarea name="text" id="text" placeholder="Digite um texto para criptografar ou descriptografar" required></textarea>
					<div className="field-button">
						<button id="encrypt" onClick={encrypt}>
							Criptografar
						</button>
						<button id="decrypt" onClick={decrypt}>
							Descriptografar
						</button>
					</div>
				</div>
			</div>
			<div className="final-text-area">
				<div className="container">
					<div className="without-text">
						
					</div>
					<div className="with-text">
						<textarea name="final-text" id="final-text" readOnly></textarea>
					</div>
				</div>
			</div> */
}

export default Main;
