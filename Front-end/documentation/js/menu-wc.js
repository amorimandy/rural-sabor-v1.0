'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projeto-integrador documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-03ed8836345936e7b3e9624db218d6f1"' : 'data-target="#xs-components-links-module-AppModule-03ed8836345936e7b3e9624db218d6f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-03ed8836345936e7b3e9624db218d6f1"' :
                                            'id="xs-components-links-module-AppModule-03ed8836345936e7b3e9624db218d6f1"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroCategoriaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastroCategoriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroProdutosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastroProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardapioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardapioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrinhoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarrinhoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriaDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriaDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriaEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriaEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContatoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContatoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuLogadoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuLogadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MissaoVisaoValoresComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MissaoVisaoValoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjetivoOdsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjetivoOdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PedidosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PedidosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutoDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProdutoDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutoEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProdutoEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreNosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SobreNosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Categoria.html" data-type="entity-link">Categoria</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produto.html" data-type="entity-link">Produto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link">UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriaService.html" data-type="entity-link">CategoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdutoService.html" data-type="entity-link">ProdutoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});