import { useState } from "react";

function Main() {
    const [message, setMessage] = useState("");
    const [resultPalindrome, setResultPalindrome] = useState("");

    function palindromeCheck(textString) {
        textString = textString.toLowerCase().replace(/\s+/g, "");
        let reverseText = textString.split("").reverse().join("");
        textString === reverseText
            ? setResultPalindrome("El texto ingresado es palíndromo")
            : setResultPalindrome("El texto ingresado no es palíndromo");
    }

    return (
        <div>
            <input
                type="text"
                value={message}
                placeholder="Ingresa un texto"
                onChange={(e) => setMessage(e.target.value)}
            />
            <p>
                <strong>{message}</strong>
            </p>
            <button onClick={() => palindromeCheck(message)}>Analizar</button>
            <p>
                <strong>{resultPalindrome}</strong>
            </p>
        </div>
    );
}

export default Main;
