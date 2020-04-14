export function getMenu() {
  return [
    { name: 'Início', icon: 'mdi-home-outline', url: '/' },
    {
      name: 'Produtos',
      icon: 'mdi-layers-triple-outline',
      url: 'produtos/listar/',
      // menus: [
      //   { name: 'Listagem Produtos', icon: 'mdi-layers-triple-outline', url: 'produtos/listar/' },
      //   { name: 'Recomendações', icon: 'mdi-layers-triple-outline', url: 'listar/', }
      // ]
    },
    {
      name: 'Promoções',
      icon: 'mdi-account-tie-voice-outline',
      url: '',
      menus: [
        { name: 'Promoções Ativas', icon: 'mdi-checkbox-multiple-blank-circle-outline', url: 'promocoes/' },
        { name: 'Recomendações', icon: 'mdi-finance', url: 'promocoes/recomendacoes', },
        { name: 'Adicionar Promoção', icon: 'mdi-label-outline', url: 'promocoes/adicionar-promocao', }
      ]
    },
    { name: 'Analise Vendas', icon: 'mdi-book-search-outline', url: '/analise-vendas/' },
    { name: 'Concorrentes', icon: 'mdi-account-multiple-outline', url: '/concorrentes/listar' }
  ] as Menu[];
}


export interface Menu {
  name: string;
  icon: string;
  url: string;
  menus: Menu[];
  ativo: boolean;
}
