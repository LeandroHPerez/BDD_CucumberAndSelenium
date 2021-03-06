package br.sp.lperez.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//plugin="pretty", //sai informações mais completas no console
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, // com exportação do resultado da excução em html e json
		monochrome = true,  //retira algumas formatações textuais que em alguns consoles são interpretadas em em outros apenas polui a saída
		snippets = SnippetType.CAMELCASE, //quando gera a estrutura dos testes é feito com camelcase ao invés de separação de palavras por _ (underline)
		dryRun = false, //se for true - serve apenas para ver se as definições de nomes de testes estão ok sem rodar o miolo dos testes - útil para dev - só colocar true para pegar os esqueletos
		strict = true, // se for o padrão FALSE passos novos indefinidos fazem o cenário passar no relatóri. Com true aquele passo indefinido falha
		//features = "src/test/resources/features/aprender_cucumber.feature", //caminho das features
		//features = "src/test/resources/features/alugar_filme.feature", //caminho das features
		//features = "src/test/resources/features/inserir_conta.feature", //caminho das features
				features = "src/test/resources/features/", //caminho das features
		glue = "br.sp.lperez.steps", //caminho das steps defenitions
		tags = {"@unitários", "~@ignore"} //não executar cenários com tag ignore
		)

public class RunnerTest {
	
	
}







