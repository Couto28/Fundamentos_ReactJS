const Events = () => {

    const handleMyEvent = (e) => { // a letra "e" representa um atributo especial que existe nas function de eventos / onClick

       console.log(e);

    }

    // criar uma function de renderização .

    const renderSomenthing = (x) => {
        if(x) {
            return <h2> Renderizando ... ! </h2>
        } else {
            return <h2> Também posso renderizar isso !</h2>
        }
    };

    return(
        <div>
            <div>
              <button onClick={handleMyEvent}> Clique Aqui ! </button>
            </div>
            <div>
                <button onClick={() => console.log("clicou!") }>Testando function de eventos inline ... </button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
    );
};

export default Events;