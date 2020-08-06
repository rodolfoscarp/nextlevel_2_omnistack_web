import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import './styles.css'

interface TeacherItemProps{

} 

const TeacherItem:React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/55282494?s=460&u=3f2508b25bdd5827b531c70981eb58725a539c9a&v=4"
          alt="Avatar"
        />
        <div>
          <strong>Rodolfo Scarp</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        cara maluco. <br />
        <br />
        Muito Louco, de verdade. esse cara não bate bem mesmo, se ver na rua
        corra porque pode ser contagioso.{" "}
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Icone do Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
