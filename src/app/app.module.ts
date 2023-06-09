import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// para controlar os formularios
import { ReactiveFormsModule } from '@angular/forms'; 

// serviços
import { Autenticacao } from './autenticacao.service';
import { AuthGuard } from './aut-guard.service';
import { Produto } from './produto.service';
import { Ofertas } from './ofertas.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';

import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './home/produtos/produtos.component';

import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';
import { Progresso } from './progresso.service';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import {CelularComponent} from './celular/celular.component';
import { TopoComponent } from './topo/topo.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { Favoritos } from './favoritos.service';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfertaComponent } from './oferta/oferta.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';

/*import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';*/





@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ProdutosComponent,
    IncluirPublicacaoComponent,
    EletronicosComponent,
    CelularComponent,
    TopoComponent,
    PesquisaComponent,
    MeusProdutosComponent,
    FavoritosComponent,
    OfertaComponent,
    PaginaUsuarioComponent,
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule    
    
  ],
  providers: [Autenticacao, AuthGuard, Produto, Progresso, Favoritos, Ofertas],
  bootstrap: [AppComponent]
})
export class AppModule { }
