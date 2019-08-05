package com.agrostar.pages;

import static com.jayway.restassured.RestAssured.given;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.http.client.ClientProtocolException;
import org.json.JSONObject;

import com.agrostar.utils.Utils;
import com.jayway.restassured.response.Response;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource.Builder;
import cucumber.api.DataTable;
public class MainPage {
	static String repoName="AgroStar3";
	static String fullUrl;
	public static Response response;
	private static ClientResponse response1;
	private static Builder requestBuilder;
	private static String entity;
	private static Map<String, String> headers = new HashMap<String, String>();
	public static String baseUrl = "https://api.github.com/";

	static String fileName = "Repo.json";
	

	//static Logger log = Logger.getLogger(MainPage.class.getName());
	
	

	public static Response GITPostCall(DataTable requestData) throws ClientProtocolException, IOException {

	
		List<List<String>> data = requestData.raw();
		fullUrl = baseUrl + "user/repos";
		JSONObject requsetBody = Utils.getJsonObject(fileName, data.get(1).get(1).toString());
		

		JSONObject headerObj = Utils.getJsonObject(fileName, data.get(1).get(0).toString());
		HashMap<String, String> headerMap = Utils.getHeaderMap(headerObj.toString());
		
		response = given().headers(headerMap).body(requsetBody.toString()).queryParam("access_token", "deb89cfd480118cd7af89fc3412519903d0f481e").when().post(fullUrl);

		
		Utils.verifyStatusCode(response, Integer.parseInt(data.get(1).get(2)), response.getStatusCode());

		return response;
	}

	public static Response StarREpoCall(DataTable requestData)
			throws ClientProtocolException, IOException {

		
		List<List<String>> data = requestData.raw();
		fullUrl = baseUrl + "user/starred/repo1234/"+repoName;
		
		response = given().queryParam("access_token", "deb89cfd480118cd7af89fc3412519903d0f481e").when().put(fullUrl);
         System.out.println("Verify resposne:"+ response);
		//Utils.logTheRequestAndResponseDetails(response, log);
		Utils.verifyStatusCode(response, Integer.parseInt(data.get(1).get(0)), response.getStatusCode());
        System.out.println(response.getStatusCode());
		return response;
	}

	

}