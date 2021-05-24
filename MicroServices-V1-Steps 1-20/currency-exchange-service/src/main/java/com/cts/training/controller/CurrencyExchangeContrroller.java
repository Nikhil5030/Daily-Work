package com.cts.training.controller;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.bean.ExchangeCurrency;
import com.cts.training.repository.CurrencyRepository;

@RestController
public class CurrencyExchangeContrroller {
	
	@Autowired
	private Environment environment;
	
	@Autowired
	private CurrencyRepository repository;
	
	@GetMapping("/currency-exchange/from/{from}/to/{to}")
	public ExchangeCurrency retrieveExchangeValue(@PathVariable String from,@PathVariable String to) {
		ExchangeCurrency exchangeCurrency= repository.findByFromAndTo(from, to);
		exchangeCurrency.setPort(Integer.parseInt(environment.getProperty("local.server.port")));
		return exchangeCurrency;
	}

}
