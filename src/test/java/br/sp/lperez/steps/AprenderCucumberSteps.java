package br.sp.lperez.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.sp.lperez.converters.DateConverter;
import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumberSteps {

	// como mudar enconding do eclipse para aceitar acentuação em português
	// https://www.evernote.com/shard/s3/sh/9f1d214f-e602-4825-a9f9-a1eea63f8a32/e94d14eff795b81404f76f7499687666
	
	/* sites de regex:
	   https://regex101.com/
	   https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24
	 */


	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("qualquer coisa");
	}

	@Quando("^executá-lo$")
	public void executáLo() throws Throwable {

	}

	@Então("^especificação deve finalizar com sucesso$")
	public void especificaçãoDeveFinalizarComSucesso() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// throw new PendingException();
	}

	// Cenário: Deve incrementar contador

	int contador = 0;

	@Dado("^que o valor do contador é (\\d+)$")
	public void queOValorDoContadorÉ(int arg1) throws Throwable {
		contador = arg1;
	}

	@Quando("^eu incrimentar em (\\d+)$")
	public void euIncrimentarEm(int arg1) throws Throwable {
		contador = contador + arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int arg1) throws Throwable {
		Assert.assertEquals(arg1, contador);
	}


	Date entrega = new Date();


	//Cenário: Deve calcular atraso na entrega
	/* old usando regex
	@Dado("^que a entrega é (\\d+)/(\\d+)/(\\d+)$")
	public void queAEntregaÉ(int dia, int mes, int ano) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, dia);
		cal.set(Calendar.MONTH, mes -1); //é assim (mes - 1) porque quando a feure é lida, janeiro é 0, fevereiro é 01, março é 02
		cal.set(Calendar.YEAR, ano);

		entrega = cal.getTime();
	}
	*/
	
	@Dado("^que a entrega é (.*)$")
	public void queAEntregaÉ(@Transform(DateConverter.class) Date data) throws Throwable {
		entrega = data;
		System.out.println("Data convertida " + entrega);
	}

	@Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int dia, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, dia);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, dia);
		}
		

		entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String data) throws Throwable {
		DateFormat formatador = new SimpleDateFormat("dd/MM/yyy");
		String dataFormatada = formatador.format(entrega);
		Assert.assertEquals(data, dataFormatada);
	}
	
	
	
	
	
	//Cenários desafio 01
	@Dado("^que o ticket( especial)? é (A.\\d{3})$")
	public void queOTicketÉAF(String tipo, String arg1) throws Throwable {

	}

	@Dado("^que o valor da passagem é R\\$ (.*)$")
	public void queOValorDaPassagemÉR$(Double numero) throws Throwable {
		System.out.println("numero: " + numero);
	}

	@Dado("^que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroÉ(String arg1) throws Throwable {

	}

	@Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroÉ(String telefone) throws Throwable {

	}

	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

	}

	@Então("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {

	}
}
