package com.cts.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.bean.ExchangeCurrency;

public interface CurrencyRepository extends JpaRepository<ExchangeCurrency, Long>{
	
	ExchangeCurrency findByFromAndTo(String from,String to);

}
