package br.com.ruralsabor.ruralsabor.model;

import java.math.BigDecimal;

<<<<<<< HEAD
=======


>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank
	@Size(min = 3, max = 20)
	private String nome;

	@NotBlank
	@Size(min = 3, max = 300)
	private String descricao;

	@NotNull
	private BigDecimal preco;

	private boolean disponibilidade;

	@NotNull
	private BigDecimal qtd;
<<<<<<< HEAD
=======
	
	private String foto;
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f

	@ManyToOne
	@JsonIgnoreProperties("produto")
	private Categoria categoria;
<<<<<<< HEAD
=======
	
	@ManyToOne
	@JsonIgnoreProperties("produto")
	private Usuario usuario;
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f

	@NotBlank
	@Size(min = 3, max = 30)
	private String regiao;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	public boolean isDisponibilidade() {
		return disponibilidade;
	}

	public void setDisponibilidade(boolean disponibilidade) {
		this.disponibilidade = disponibilidade;
	}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
	public BigDecimal getQtd() {
		return qtd;
	}

	public void setQtd(BigDecimal qtd) {
		this.qtd = qtd;
	}

	public String getRegiao() {
		return regiao;
	}

	public void setRegiao(String regiao) {
		this.regiao = regiao;
	}

<<<<<<< HEAD
>>>>>>> d56bd5c38ec72bf7b1798a7cd774a3dc5dcdb51a
=======
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
<<<<<<< HEAD
<<<<<<< HEAD
	
=======
>>>>>>> d56bd5c38ec72bf7b1798a7cd774a3dc5dcdb51a

=======

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
}
