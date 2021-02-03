package br.com.ruralsabor.ruralsabor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ruralsabor.ruralsabor.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
		// public List<Categoria> findAllByRegContainingIgnoreCase (String regiao);
	}


