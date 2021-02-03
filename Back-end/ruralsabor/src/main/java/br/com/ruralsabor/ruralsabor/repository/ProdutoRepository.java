package br.com.ruralsabor.ruralsabor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.ruralsabor.ruralsabor.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	// public List<Produto> findAllById(Long id);

	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
	
	public List<Produto> findAllByRegiaoContainingIgnoreCase(String regiao);
	
	//public List<Produto> findAllByCategoriaContainingIgnoreCase(String categoria);
	
	@Query (value="select * from tb_produto where Regiao = :regiao", nativeQuery=true)
	public List<Produto> SearchByReg(@Param("regiao") String regiao);
}

