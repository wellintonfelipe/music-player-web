import coracao from "../public/img/coracao.svg";
import casa from "../public/img/casa.svg";
import procurar from "../public/img/procurar.svg";
import adicionar from "../public/img/adicionar.svg";

export function Section() {
  return `
  <section class='sadbar dark'>
    <button>
      <img class="logo vanilla" src="${coracao}"/>
    </button>

    <button>
      <img class="logo vanilla" src="${casa}"/>
    </button>

    <button>
    
      <img class="logo vanilla" src="${procurar}"/>
    </button>

    <button>
      <img class="logo vanilla" src="${adicionar}"/>
    </button>

  </section>
  `;
}
