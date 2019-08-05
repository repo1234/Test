package com.agrostar.pages;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class UiMainPage {

	static WebDriver driver;
	static String title;
	static String expected="GitHub";
	static HashMap<String,Integer> repo=new HashMap<String,Integer>();
	/**
	 * @throws InterruptedException
	 * Launch browser 
	 */
	public static void launch() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") +"\\chromedriver.exe");
		//System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") +"/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized"); 
	    driver = new ChromeDriver(options);
		driver.get("https://github.com/login");
		 System.out.println("Current Url:" + driver.getCurrentUrl());
	}
	
	/**
	 * @param userName
	 * @param Pwd
	 * @enter username and pwd in Git url
	 */
	public static String enterCredential(String userName,String Pwd) {
		//[@id="login_field"]
		  driver.findElement(By.id("login_field")).sendKeys(userName);
		  driver.findElement(By.id("password")).sendKeys(Pwd);	
		  driver.findElement(By.name("commit")).click();
		  title=driver.getTitle();
		  System.out.println("Title:"+ driver.getTitle());
		  return title;
		
	}
	
	public static void verifyGitUrl() {
		Assert.assertTrue("Title is same ", title.contains(expected));
	}
	
	public static void serachRepo(String lang) {
		driver.findElement(By.name("q")).sendKeys(lang);
		driver.findElement(By.name("q")).sendKeys(Keys.RETURN);
		
	List<WebElement> findElements = driver.findElements(By.xpath("//div[3]/div/ul/li/div[1]/h3/a"));
		for(WebElement link :findElements) {
			System.out.println(link.getSize());
			System.out.println(link.getText() + " - " + link.getAttribute("href"));
		}
		
		for(int i=1;i<=5;i++) {
			
			String text=driver.findElement(By.xpath("//div[3]/div/ul/li[" + (i) +"]/div[1]/h3/a")).getText();
			repo.put(text, i);
			Set<String> keySet = repo.keySet();
	        
	        for(String key : keySet)
	        {
	            System.out.println("Key : "+key+"   Value : "+repo.get(key));
	        }
	    }
			//System.out.println( "Print repo name :"+ text);
		}
	
	public static void forkRepo() {
		
		for(int i=1;i<=5;i++) {
		driver.findElement(By.xpath("//div[3]/div/ul/li[" + (i) +"]/div[1]/h3/a")).click();
		driver.findElement(By.className("btn btn-sm btn-with-count")).click();
		
		String t1=driver.findElement(By.tagName("a")).getAttribute("href");
		System.out.println("t1:" +t1);
		boolean repoSame=repo.containsKey(t1);
		System.out.println("Repo is fork now:" +repoSame);
	}
}
	
	public static void validateRepo() {
		
	}
}

