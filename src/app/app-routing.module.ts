import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { AcessoComponent } from './acesso/acesso.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './acesso/login/login.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { AuthGuard } from './aut-guard.service';
import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';
import{EletronicosComponent} from './eletronicos/eletronicos.component';
import{CelularComponent} from './celular/celular.component'
import { TopoComponent } from './topo/topo.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';

import { FavoritosComponent } from './favoritos/favoritos.component';
import { OfertaComponent } from './oferta/oferta.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';



const routes: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'eletronicos', component: EletronicosComponent },
  { path: 'smartphones', component: CelularComponent },  
  { path: 'oferta', component: IncluirPublicacaoComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'meusprodutos', component: MeusProdutosComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard] },
  { path: 'topo', component: TopoComponent , canActivate: [AuthGuard] },
  { path: 'ofertas', component: OfertaComponent},  
  { path: 'teste', component: PaginaUsuarioComponent},  
  {path: 'produtos', component: ProdutosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
