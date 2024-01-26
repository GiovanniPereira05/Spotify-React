import React from "react";
import './footer.css'

const Footer = () =>{
    return(
    <footer>
        <div className="disclaimer_premium">
            <div className="text">
                <p className="text title">testar o premium de graça</p>
                <p className="text subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios.
                    Não precisa de cartão de crédito</p>
            </div>
            <div className="disclaimer_button">
                <button>Inscreva-se grátis</button>
            </div>
        </div>
    </footer>
    )
}

export default Footer