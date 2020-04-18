package edu.codigocode.controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.codigocode.modelo.Persona;

public class PersonaServlet extends HttpServlet {

	// manejo interno de java para poder ubicar la clase que exitende de http
	// servlet
	private static final long serialVersionUID = -4831117788711013629L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// Hola mundo pero por medio de un servlet
		// generacion dinamica entre java y la web

		List<Persona> listPersonas = new ArrayList<Persona>();

		listPersonas.add(new Persona("Pepito", "Gonzales", "12345"));
		listPersonas.add(new Persona("Peppa", "Pig", "84356"));
		listPersonas.add(new Persona("Fulana", "Mengana", "079809"));

		RequestDispatcher disp = req.getRequestDispatcher("persona.jsp");

		req.setAttribute("objPersona", listPersonas);
		disp.forward(req, resp);

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
}
