import {useState, useEffect} from 'react'

const titulos = ['titulo 1', 'titulo 2', 'titulo 3']


function Title(){
    const [title, setTitle] = useState(0);

    useEffect(() => {
        document.title = titulos[title];
    }, [title]);

    const TituloAnterior = () => {
        setTitle(prevCont => (prevCont - 1 + titulos.length) % titulos.length);
    };

    const TituloProximo = () => {
        setTitle(prevCont => (prevCont + 1) % titulos.length);
    };

    return (
        <div>
            <h3>Altere o titulo da pagina:</h3>
            <button onClick={TituloAnterior}>Anterior</button>
            <button onClick={TituloProximo}>Próximo</button>
        </div>
    );
}
export default Title