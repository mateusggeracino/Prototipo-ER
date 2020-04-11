export function getMenu() {
  return [
    { name: 'Produtos', icon: 'mdi-layers-triple-outline', url: '/produtos/' },
    { name: 'Promoções', icon: 'mdi-account-tie-voice-outline', url: '/promocoes/' },
    { name: 'Analise Vendas', icon: 'mdi-book-search-outline', url: '/analise-vendas/' },
    { name: 'Concorrentes', icon: 'mdi-account-multiple-outline', url: '/concorrentes/' }
  ] as Menu[];
}


export interface Menu {
  name: string;
  icon: string;
  url: string;
}
