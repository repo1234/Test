package com.agrostar.utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;

import org.apache.log4j.Logger;
import org.json.JSONObject;
import org.junit.Assert;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.jayway.restassured.response.Response;

public class Utils {

	public static JSONObject object = null;
	
	public static void verifyStatusCode(Response response, int expectedValue, int actualValue) {

		if (expectedValue == actualValue) {

		} else {

			Assert.fail("Expected Status Code is " + expectedValue + " but found " + actualValue + " \nResponseBody :"
					+ response.prettyPrint());
		}

	}
	
	public static void logTheRequestAndResponseDetails(Response response, Logger log) {

		log.info("Status Code----->" + response.statusCode());
		log.info("Response-------->" + response.asString());
		log.info("Response Headers-->" + response.getHeaders());
	}

	public static JSONObject getJsonObject(String jsonFileName, String objName) {

		object = null;
		JSONObject obj = reader(jsonFileName);
		object = obj.getJSONObject(objName);
		return object;
	}
	
	public static HashMap<String, String> getHeaderMap(String jsonString) {

		HashMap<String, String> map = new Gson().fromJson(jsonString, new TypeToken<HashMap<String, String>>() {
		}.getType());

		return map;
	}

	public static String getTestData(String jsonFileName, String objName, String key) {

		JSONObject obj = Utils.reader(jsonFileName);
		JSONObject commmon = obj.getJSONObject(objName);
		String data = commmon.getString(key);
		return data;
	}

	public static JSONObject reader(String jsonFileName) {
		String jsonData = "";

		BufferedReader br = null;
		try {
			String line;
			br = new BufferedReader(new FileReader("testData/" + jsonFileName));
			while ((line = br.readLine()) != null) {
				jsonData += line + "\n";
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)
					br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}

		JSONObject obj = new JSONObject(jsonData);
		return obj;
	}
}
