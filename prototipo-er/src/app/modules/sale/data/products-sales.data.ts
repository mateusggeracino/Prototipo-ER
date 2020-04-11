import { ProductSales } from 'src/app/shared/product/product';

export function getProductsSales() {
  const productsSales = [
    {
      id: 1, title: 'Camiseta Cientista', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_cientistas_masculino_983_3_20190714005858.jpg',
    },
    {
      id: 2, title: 'Camiseta Fusca', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://images.tcdn.com.br/img/img_prod/737444/' +
        'camiseta_fusca_carros_antigos_volkswagen_masculina_25206351_1_20191130092942.jpg',
    },
    {
      id: 3, title: 'Camiseta Raglan', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://31270.cdn.simplo7.net/static/31270/sku/' +
        'camisetas-camiseta-raglan-branca-com-manga-preta-de-poliester-para-sublimacao--p-1569938167978.jpg',
    },
    {
      id: 4, title: 'Camiseta Marie', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://images.tcdn.com.br/img/img_prod/680735/' +
        'camiseta_marie_curie_1083_1_20190728160247.jpg',
    },
    {
      id: 5, title: 'Camiseta Simpson', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://www.opscamisetas.com.br/media/catalog/product' +
        '/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcamiseta-maggie' +
        '-simpson-bad-girl-ops-camisetas-min_1.jpg.pagespeed.ic.FHnMglLbL3.jpg',
    },
    {
      id: 6, title: 'Camiseta Baby Yoda', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://d26lpennugtm8s.cloudfront.net/stores/128/970/' +
        'products/img_20191124_181327_9061-8666bf4d5c4684d38f15746266392093-640-0.jpg',
    },
    {
      id: 7, title: 'Camiseta Pokémon', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://www.camisetasbichopreguica.com.br/media/product/1f0/camiseta-pokemon-go-pikachu-35b.jpg',
    },
    {
      id: 8, title: 'Camiseta Kiss', description: 'Sed pharetra fermentum massa, eu vestibulum ex sagittis venenatis',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNopbDOI7rzmlWCvmDfhYGPI5mn-eqqWT3PLEGcQ-nboN5wAti&usqp=CAU',
    },
  ] as ProductSales[];

  productsSales.forEach(x => {
    x.price = GenerateRandomPrice();
    x.priceOff = x.price - (x.price * 0.1);
  });

  return productsSales;
}

export function GenerateRandomPrice() {
  return Math.floor(Math.random() * (99 - 30)) + 30;
}
