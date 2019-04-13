package com.mitocode.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitocode.model.Persona;

@RestController
//@CrossOrigin(origins = "http://localhost:9090/")
public class PersonaController {

	@GetMapping
	public Persona mostrar() {
		Persona per = new Persona();
		per.setIdPersona(1);
		per.setEdad(28);
		per.setNombre("Jaime");
		return per;
	}
}
