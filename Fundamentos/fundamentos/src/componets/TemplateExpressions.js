const TemplateExpression = () => {

    const name = " Diogo ";
    const data = {
        age: 36,
        job: " Programmer ",
    };
    
    return (
        <div>
            <h1>Olá {name}, tudo bem ? </h1>
            <p> você atua como {data.job}</p>
        </div>
        
        );
    };

    export default TemplateExpression;

    