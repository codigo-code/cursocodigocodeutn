package edu.codigocode.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.codigocode.modelo.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Integer> {

}
