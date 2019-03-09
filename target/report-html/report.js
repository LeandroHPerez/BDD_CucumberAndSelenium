$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Alugar Filme",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 10
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 11
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 12
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 205072162,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 5508192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 9326898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 1185797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 126711,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 22,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 928426,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 99080,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 42632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 104211,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "#Scenario Outline"
    }
  ],
  "line": 25,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "#Examples"
    }
  ],
  "line": 35,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 38,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 39,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 40,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 136974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 99869,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 114080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 143685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 1769221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 207633,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 153948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 118422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 113685,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 159080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 153159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 661978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 147237,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 234081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 141316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 127106,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 125527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 91580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 446450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 140133,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 321712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 139737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 100659,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 114475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 161448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 427898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 126316,
  "status": "passed"
});
formatter.uri("aprender_cucumber.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Aprender Cucumber",
  "description": "Como um aluno\r\nEu quero aprender a utilizar cucumber\r\nPara que eu possa automatizar critérios de aceitação",
  "id": "aprender-cucumber",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve executar especificação",
  "description": "",
  "id": "aprender-cucumber;deve-executar-especificação",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "executá-lo",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "especificação deve finalizar com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "duration": 378555,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.executáLo()"
});
formatter.result({
  "duration": 37105,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.especificaçãoDeveFinalizarComSucesso()"
});
formatter.result({
  "duration": 59211,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@tipo1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "eu incrimentar em 3",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "o valor do contador será 18",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 156711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrimentarEm(int)"
});
formatter.result({
  "duration": 125527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "duration": 191844,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-na-entrega",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 19,
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "que a entrega é 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "a entrega será efetuada em 07/04/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2018",
      "offset": 16
    }
  ],
  "location": "AprenderCucumberSteps.queAEntregaÉ(Date)"
});
formatter.result({
  "duration": 1999749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "dias",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 249081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/04/2018",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 707373,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve calcular atraso na entrega da china",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-na-entrega-da-china",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 25,
      "name": "@tipo1"
    },
    {
      "line": 25,
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "que a entrega é 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "a entrega será efetuada em 05/06/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2018",
      "offset": 16
    }
  ],
  "location": "AprenderCucumberSteps.queAEntregaÉ(Date)"
});
formatter.result({
  "duration": 899216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "meses",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 232897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2018",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 358818,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "id": "aprender-cucumber;deve-criar-steps-genéricos-para-estes-passos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 35,
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.step({
  "line": 36,
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "Dado "
});
formatter.step({
  "line": 37,
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 38,
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "Dado "
});
formatter.step({
  "line": 39,
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AF345",
      "offset": 15
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 132632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230,45",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "duration": 234080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano da Silva",
      "offset": 28
    }
  ],
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 63553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999-9999",
      "offset": 31
    }
  ],
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 86448,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "duration": 35132,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "duration": 32369,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "id": "aprender-cucumber;deve-reaproveitar-os-steps-\"dado\"-do-cenário-anterior",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 43,
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 44,
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.step({
  "line": 46,
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 47,
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AB167",
      "offset": 15
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 141711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " especial",
      "offset": 12
    },
    {
      "val": "AB167",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 98291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1120,23",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "duration": 173290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cicrano de Oliveira",
      "offset": 28
    }
  ],
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 84474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9888-8888",
      "offset": 31
    }
  ],
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 83685,
  "status": "passed"
});
});