import React from 'react';
import Link from "next/link";

export default function ListaAreas({ areas }) {

  const civilAreas = areas.data.attributes.civilLaw.civilLawServices;
	const laborAreas = areas.data.attributes.laborLaw.laborLawServices;
	const pensionAreas = areas.data.attributes.pensionLaw.pensionLawServices;
	const array = civilAreas.concat(laborAreas).concat(pensionAreas);
  array.splice(6, 1);
  array.splice(2, 1);
  array.splice(2, 1);

  const occAreas = [
    {
      "id": 1,
      "title": "Contratos de Trabalho",
      "slug": "contratos-de-trabalho",
      "description": "<p>Nosso escritório conta com equipe especializada na área do Direito do Trabalho, capacitada para atuar em todos os procedimentos que envolvam as relações de trabalho.</p><p>O contrato de trabalho gera direitos e deveres entre as partes, os quais devem ser cumpridos por elas.</p><p>Há, também, direitos previstos na legislação que, se o contrato silenciar em relação a eles, possivelmente, valerão as previsões da Lei.</p><p>Portanto, a elaboração do contrato de trabalho com a assessoria de um profissional capacitado para tanto, é muito importante para que o contratante e o contratado entendam cada detalhe desta forma contratual, bem como seus direitos e deveres.</p>",
      "createdAt": "2022-03-11T01:49:41.672Z",
      "updatedAt": "2022-03-11T01:53:04.592Z"
    },
    {
      "id": 2,
      "title": "Contratos de Prestação de Serviços",
      "slug": "contratos-de-prestacao-de-servicos",
      "description": "<p>Atuamos, também, na assessoria e elaboração de contratos de prestação de serviços aos prestadores de serviços autônomos.</p><p>A assessoria de um profissional especializado na negociação e elaboração de contratos de prestação de serviços é fundamental para que todas as pretensões sejam analisadas e os direitos sejam preservados, bem como para que se evite cláusulas abusivas ou prejudiciais.</p>",
      "createdAt": "2022-03-11T01:52:25.046Z",
      "updatedAt": "2022-03-11T01:52:25.046Z"
    },
    {
      "id": 8,
      "title": "Revisão de Contratos Bancários",
      "slug": "revisao-de-contratos-bancarios",
      "description": "<p>É comum a existência de cláusulas abusivas em contratos, especialmente contratos bancários de empréstimo ou financiamento de veículos, tais como</p><ul><li>juros abusivos;</li><li>cobrança de seguros;</li><li>taxas ilegais.</li></ul><p>Através da revisão do contrato é possível pedir a devolução dos valores pagos indevidamente pelas instituições bancárias.</p><p>O nosso escritório faz uma análise minuciosa do contrato, esclarecendo ao cliente se há vantagem no ajuizamento de ação judicial.</p>",
      "createdAt": "2022-03-11T01:55:01.646Z",
      "updatedAt": "2022-03-11T01:55:01.646Z"
    },
    {
      "id": 4,
      "title": "Verbas Rescisórias ",
      "slug": "verbas-rescisorias",
      "description": "<p>Nosso escritório presta assessoria na análise dos documentos relacionados à rescisão contratual.</p><p>No encerramento do contrato de trabalho, o empregado tem direito ao pagamento de verbas rescisórias, independentemente da forma de rescisão contratual.</p><p>Porém, cada forma de rescisão contratual dá direito a uma gama de verbas rescisórias, que não é igual para todos os tipos de rescisão.</p><p>Em geral, estas verbas devem ser calculadas sobre o valor da remuneração paga ou da sua média.</p><p>Também, por ocasião da rescisão contatual, o empregador deve pagar todas as verbas que tenham ficado pendentes durante a contratualidade, algumas delas até em dobro.</p>",
      "createdAt": "2022-03-11T01:53:41.431Z",
      "updatedAt": "2022-03-11T01:53:41.431Z"
    },
    {
      "id": 12,
      "title": "Beneficio Assistencial ",
      "slug": "beneficio-assistencial",
      "description": "<p>O benefício de prestação continuada (BPC) pode ser requerido por idosos com mais de 65 anos e pessoas com deficiência.</p><p>Sua concessão dependerá de determinados requisitos, tais como: renda familiar, idade e grau de deficiência.</p><p>O diferencial deste benefício é que não é necessário estar contribuindo para a previdência no momento de sua solicitação.</p>",
      "createdAt": "2022-03-11T01:56:14.648Z",
      "updatedAt": "2022-03-11T01:56:14.648Z"
    },
    {
      "id": 6,
      "title": "Consumidor",
      "slug": "consumidor",
      "description": "<p>O nosso escritório conta com profissionais especialistas em Direito do Consumidor.</p><p>Atuamos na proteção do consumidor nas relações do consumo, com o objetivo de coibir práticas abusivas, solucionar conflitos e buscar indenizações nos casos cabíveis.</p><p>Entre os nossos serviços estão:</p><ul><li>cancelamento de cobranças indevidas e indenização por danos morais;</li><li>indenizações por atrasos em voo e perda de bagagem;</li><li>rescisão de contrato por descumprimento contratual;</li><li>revisão de contratos;</li><li>resolução de problemas decorrentes de falha na prestação de serviço de telefonia;</li><li>entre outros.</li></ul>",
      "createdAt": "2022-03-11T01:54:25.824Z",
      "updatedAt": "2022-03-11T01:54:25.824Z"
    },
    {
      "id": 7,
      "title": "Inventários e Testamentos",
      "slug": "inventarios-e-testamentos",
      "description": "<p>Nosso escritório presta assessoria na área de sucessões, auxiliando em todos os trâmites para efetuar a transmissão de bens bens em caso de falecimento, através de inventário extrajudicial ou extrajudicial.</p><p>De acordo com a necessidade do cliente, o nosso escritório providencia toda a documentação para que o inventário ocorra de forma ágil, incluindo a busca de todas as certidões e documentos atualizados.</p><p>Além disso, também elaboramos testamento, o que permite ao cliente decidir como os seus bens serão distribuídos, garantindo que os seus termos estejam adequados à legislação vigente.</p>",
      "createdAt": "2022-03-11T01:54:43.262Z",
      "updatedAt": "2022-03-11T01:54:43.262Z"
    },
    {
      "id": 9,
      "title": "Direito da Saúde",
      "slug": "direito-da-saude",
      "description": "<p>Atuamos na defesa dos consumidores para a obtenção de tratamentos médicos negados pelos planos de saúdem, tais como:</p><ul><li>cirurgia, exames e procedimentos;</li><li>medicamento de alto custo;</li><li>internação e atendimento de urgência e emergência;</li><li>órtese ou prótese, entre outros.</li></ul>",
      "createdAt": "2022-03-11T01:55:18.090Z",
      "updatedAt": "2022-03-11T01:55:18.090Z"
    },
    {
      "id": 10,
      "title": "Elaboração de Contratos",
      "slug": "elaboracao-de-contratos",
      "description": "<p>O contrato gera direitos e deveres entre as partes, os quais devem ser cumpridos por elas.</p><p>Por isso, é importante ter um contrato bem redigido e que traga a previsão de todos os eventuais problemas que possam surgir durante a sua execução.</p><p>A elaboração do contrato através de um advogado irá garantir a sua validade e também que o objeto do contrato possa ser discutido posteriormente, garantido o cumprimento do que foi acordado no documento.</p>",
      "createdAt": "2022-03-11T01:55:32.015Z",
      "updatedAt": "2022-03-11T01:55:35.917Z"
    },
    {
      "id": 3,
      "title": "Acidente do Trabalho",
      "slug": "acidente-do-trabalho",
      "description": "<p>Nossa equipe da área trabalhista possui ampla experiência na atuação em questões relacionadas a acidente do trabalho e doença profissional.</p><p>Em razão da execução das suas funções, o trabalhador pode sofrer acidente do trabalho típico ou ser acometido de doença profissional, situações que podem lhe dar direito a indenizações.</p><p>O acidente do trabalho típico é um acontecimento que o trabalhador sofre durante a execução de suas atividades laborais, causando-lhe lesões.</p><p>A doença profissional, por sua vez, é provocada pelas condições de trabalho inadequadas e que causem doenças e lesões.</p><p>Em ambos os casos, o trabalhador pode ter direito ao pagamento de indenizações por danos, considerando-se a extensão dos efeitos do acidente do trabalho ou da doença profissional.</p>",
      "createdAt": "2022-03-11T01:53:25.084Z",
      "updatedAt": "2022-03-11T01:53:25.084Z"
    },
  ]

  const half1 = array.slice(0, occAreas.length / 2);
  const half2 = array.slice(occAreas.length / 2);

  return (
    <div className="text-white px-3">
      <span className="list-title d-block playfair fs-20 text-center text-lg-start">{'Áreas de Atuação'}</span>
      <div className="d-flex justify-content-center justify-content-lg-between">
        <ul className="first-col">
          {
            half1.map((area, index) => {
              return (
                <li className="area-item" key={`area-${index}`}>
                  <Link href={`/areas-de-atuacao/${area.slug}`}>
                    <a>{area.title}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>

        <ul>
          {
            half2.map((area, index) => {
              return (
                <li className="area-item" key={`area-${index}`}>
                  <Link href="#">
                    <a>{area.title}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}