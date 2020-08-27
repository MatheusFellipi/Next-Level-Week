import React from 'react';

import whatsappIcon from '../../assests/img/icons/whatsapp.svg'

import './style.css'
    


function TeacherItem() {
    return(
        <article className="teacher-item">
          
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="diego"
          />
        
          <div>
            <strong>Diego</strong>
            <span>Quimica</span>
          </div>
        
        </header>
        <p>
          Entusiasta das melhores tecnologias de química avançada. <br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200.000 pessoas já passaram
          por uma das minhas explosões.
        </p>

        <footer>
          
          <p>
            preço/hora
            <strong>R$ 80,00 </strong>
          </p>

          <button type="button">
            <img src={whatsappIcon} alt="whatsapp" />
            Entra em contato        
          </button>
  
        </footer>
      
      </article>
    )
    
}

export default TeacherItem;