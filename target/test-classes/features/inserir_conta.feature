#language: pt
@funcionais
Funcionalidade: Cadastro de contas

	Como um usuário 
	Gostaria de cadastrar contas
	Para que eu possa distribuir meu dinheiro de uma forma mais organizada

#Background em inglês -> contexto são os passos inicias que precisam ser executados antes de cada teste, como o login, por exemplo. Esses passos saem no relatório de cada teste	
Contexto:
	Dado que desejo adicionar uma conta
	
Esquema do Cenário: Deve validar regras cadastro contas #basicamente 3 cenários foram condensados em 1 esquema de cenário
	Quando adiciono a conta "<conta>"
	Então recebo a mensagem "<mensagem>"
	
Exemplos:
   | conta 						| mensagem 														| 
   | Conta de Teste 	| Conta adicionada com sucesso! 			|
   |    							| Informe o nome da conta 						|
   | Conta mesmo nome | Já existe uma conta com esse nome! 	|
