package br.com.ruralsabor.ruralsabor.model;

<<<<<<< HEAD
=======
import java.util.List;

import javax.persistence.CascadeType;
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.Table;
import javax.validation.constraints.Size;

=======
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	@Size(min = 3, max = 100)
	private String nome;

	@NotNull
	@Size(min = 3, max = 70)
	@Column(unique = true)
	private String email;

	@NotNull
<<<<<<< HEAD
	@Size(min = 8) //Corrigir (sistema encripitado permite entrada automatica)
	private String senha;
	
	@NotNull
	@Size(min= 3, max = 100)
	@Column(unique = true)
	private String usuario;
=======
	@Size(min = 8)
	private String senha;
	
	@NotNull
	@Size(min= 5, max = 100)
	@Column(unique = true)
	private String usuario;
		
	private String tipo;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("usuario")
	private List<Produto> produto;
>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

<<<<<<< HEAD
=======
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	

>>>>>>> aebb0cb1c43fccc84504a40baf027ab41984453f
	
}
