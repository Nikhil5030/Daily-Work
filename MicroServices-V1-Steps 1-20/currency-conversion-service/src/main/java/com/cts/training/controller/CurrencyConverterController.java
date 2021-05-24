package com.cts.training.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cts.training.bean.CurrencyConverter;

@RestController
public class CurrencyConverterController {
	
	@GetMapping("/currency-converter/from/{from}/to/{to}/quantity/{quantity}")
    public CurrencyConverter convertCurrency(@PathVariable String from,@PathVariable String to,@PathVariable BigDecimal quantity) {
		Map<String,String> uriVariables=new HashMap<>();
		uriVariables.put("from",from);
		uriVariables.put("to",to);
		ResponseEntity<CurrencyConverter> responseEntity=new RestTemplate().getForEntity("http://localhost:8000/currency-exchange/from/{from}/to/{to}",CurrencyConverter.class,uriVariables);
		CurrencyConverter response=responseEntity.getBody();
		return new CurrencyConverter(response.getId(),from,to,response.getConversionMultiple(),quantity,quantity.multiply(response.getConversionMultiple()),response.getPort());
	}
}
