import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbienteSelenium {
	
	public static void main(String args[]) {
		
		System.out.println("A: Verificar se há o driver do chrome em C:\\\\drivers_automacao\\\\chromedriver_win32_v2.40\\\\chromedriver.exe");
		
		String caminhoDriver = "C:\\drivers_automacao\\chromedriver_win32_v2.40\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", caminhoDriver);
		WebDriver driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com");
	}

}
