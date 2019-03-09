package br.sp.lperez.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContasSteps {
	
	private WebDriver driver;
	
	@Dado("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		
		System.out.println("2: Verificar se há o driver do chrome em C:\\\\drivers_automacao\\\\chromedriver_win32_v2.40\\\\chromedriver.exe");
		
		//Caminho do driver
		String caminhoDriver = "C:\\drivers_automacao\\chromedriver_win32_v2.40\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", caminhoDriver);
		
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com");
		driver.findElement(By.id("email")).sendKeys("a@a");
		driver.findElement(By.name("senha")).sendKeys("a");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("Contas")).click();
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String arg1) throws Throwable {
		driver.findElement(By.id("nome")).sendKeys(arg1);
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String arg1) throws Throwable {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();// a classe inicia com 'alert alert-' para ficar genérico tanto para a mensagem de sucesso quanto para a de erro
	    Assert.assertEquals(arg1, texto);
	}
	
	
	/*conceito de hook - gancho */
	@After(order = 1, value = {"@funcionais"}) //esse after é o do cucumber (import do packge cucumber), não utilizar em uma classe cucumber o after do junit; o value é para executar apenas nos cenários com a tag @funcionais
	public void screenshot(Scenario cenario) { //a variavel cenario será injetada pelo cucumber automaticamente
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/"+cenario.getId()+".jpg")); //Classe FileUtils da commons-io da apache
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/*conceito de hook - gancho */
	@After(order = 0, value = {"@funcionais"}) //o order = 0 significa que será o último after a ser executado; o value é para executar apenas nos cenários com a tag @funcionais
	public void fecharBrowser() {
		driver.quit();
		System.out.println("terminando");
	}
	
}
