    const Challenge = () => {

        const valor1 = 10;
        const valor2 = 20;

        return(
            <div>
                <p>valor1: {valor1}</p>
                <p>valor2: {valor2}</p>
                <button onClick={() => alert( valor1 + valor2)}>
                    Desafio 2 
                </button>
        
            </div>
        );

    };

    export default Challenge;   