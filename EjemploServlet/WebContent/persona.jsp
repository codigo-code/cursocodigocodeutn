<%@page import="java.io.PrintWriter"%>
<%@page import="edu.codigocode.modelo.Persona"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>



	<%
		List<Persona> listPersonas = (List<Persona>) request.getAttribute("objPersona");
		PrintWriter outP = response.getWriter();
		for (Persona item : listPersonas) {
	%>
	<%
		outP.println(item.getNombre());
	%>
	<br />
	<%
		outP.println(item.getApellido());
	%>
	<br />

	<%
		outP.println(item.getDni());
	%>
	<br />

	<%
		}
	%>


</body>
</html>