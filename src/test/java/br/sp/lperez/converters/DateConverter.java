package br.sp.lperez.converters;
import java.text.DateFormat;

/* essa classe é usada para converter datas automaticamente quando são apssadas pelo cucumber
 * para usar é só anotar o método das classes de defenição de passos com @Transform ex:
 *
 @Dado("^que a entrega é (.*)$")
	public void queAEntregaÉ(@Transform(DateConverter.class) Date data) throws Throwable {
		entrega = data;
		System.out.println("Data convertida " + entrega);
	}
 * 
 * 
 */
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import cucumber.api.Transform;
import cucumber.api.Transformer;
import cucumber.api.java.pt.Dado;

public class DateConverter extends Transformer<Date> {

	@Override
	public Date transform(String value) {
		DateFormat formatador = new SimpleDateFormat("dd/MM/yyy");
		try {
			Date dataRetorno = formatador.parse(value);
			return dataRetorno;
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
		
	}

}
