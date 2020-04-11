import { Product } from 'src/app/shared/product/product';

export function getProducts() {
  return [
    {
      id: 1, title: 'Camiseta Básica Cinza', imgUrl: 'https://cdn.awsli.com.br/600x1000/0/622/produto/16027843/7ef97ca3d4.jpg',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 2, title: 'Camiseta Originals', imgUrl: 'https://2098.cdn.simplo7.net/static/2098/sku/' +
        'masculino-tamanho-especial-camisetas-tamanhos-especiais-camiseta-the-originals-polo-usa-tamanho-especial-1542829193243.jpg',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 3, title: 'Camiseta Fusca', imgUrl: 'https://images.tcdn.com.br/img/img_prod/737444/' +
        'camiseta_fusca_carros_antigos_volkswagen_masculina_25206351_1_20191130092942.jpg',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 4, title: 'Camiseta Marie', imgUrl: 'https://images.tcdn.com.br/img/' +
        'img_prod/680735/camiseta_marie_curie_1083_1_20190728160247.jpg',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 5, title: 'Camiseta o Melhor', imgUrl: 'https://storage.googleapis.com/rock2you_smserver' +
        '/camiseta-faco-o-melhor-que-sou-capaz-los-hermanos-camisetas-rapido_d76e.jpeg',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 6, title: 'Camiseta Caveira 3D', imgUrl: 'https://13018.static.simplo7.net' +
        '/static/13018/sku/camisetas-camisetas-caveiras-camiseta-caveira-3d--p-1504707789926.jpg',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 7, title: 'Camiseta Oakley', imgUrl: 'https://centralsurf.vteximg.com.br/arquivos/' +
        'ids/298293-578-578/Camiseta-Manga-Longa-Oakley-Mark-II-Ls-Tee.jpg?v=637202234493170000',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
    {
      id: 8, title: 'Camiseta Von Dutch', imgUrl: 'https://cdn.shopify.com/s/files' +
        '/1/0036/7758/5526/products/IMG_4940_1_1024x1024.jpg?v=1542998991',
      description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis', price: 25
    },
  ] as Product[];
}
