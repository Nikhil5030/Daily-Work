package com.cts.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.Configuration;
import com.cts.training.bean.LimitConfiguration;

@RestController
public class limitConfigurationController {
	
	@Autowired
	private Configuration configuration;
	
	@GetMapping("/limits")
	public LimitConfiguration getLimitsFromLimitConfiguration() {
		return new LimitConfiguration(configuration.getMinimum(),configuration.getMaximum());
	}

}
