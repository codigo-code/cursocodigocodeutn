package edu.codigocode.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.codigocode.modelo.Persona;
import edu.codigocode.respositories.PersonaRepository;

@RestController
public class PersonaRestController {

//	@Autowired
//	private Persona persona;

	@Autowired
	private PersonaRepository pReps;

//	@GetMapping(value = "persona")
//	public Persona personita() {
//		persona.setNombre("Peppa");
//		persona.setApellido("Pig");
//		persona.setDni("12345");
//		return persona;
//	}

	@GetMapping(value = "listaPersonas")
	public List<Persona> getAllPersonas() {

		return pReps.findAll();
	}

}
