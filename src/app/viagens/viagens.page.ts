import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
  viagens = [
    { 
      local: "Veneza",
      img: "https://s2.glbimg.com/qJoxjEJ2D2nbKxH9u4AeY9D9oBc=/0x0:7360x4912/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/c/M/SnZc2WRI2nrotTtNFVuw/000-1pz9c0-1-.jpg",
      descricao: "Veneza, a capital da região de Vêneto, no norte da Itália, é formada por mais de 100 pequenas ilhas em uma lagoa no Mar Adriático. A cidade não tem estradas, apenas canais (como a via Grand Canal), repletos de palácios góticos e renascentistas. Na praça central, Piazza San Marco, ficam a Basílica de São Marcos, coberta de mosaicos bizantinos, e o campanário, com vista para os telhados vermelhos da cidade.",
      data: "20/10/2019"
    },
    { 
      local: "Barcelona",
      img: "https://gd-barcelona.sfo2.cdn.digitaloceanspaces.com/2015/07/90-La-Sagrada-Familia-Barcelona.jpg",
      descricao: "Barcelona (em catalão: AFI: [bərsəˈɫonə]; em castelhano: AFI: [barθeˈlona]) é a capital da comunidade autônoma da Catalunha no Reino de Espanha, bem como o segundo município mais populoso do país, com uma população de 1,6 milhão dentro dos limites da cidade.[2] A sua área urbana se estende para além dos limites administrativos da cidade com uma população de cerca de 4,7 milhões de pessoas,[3] sendo a sexta área urbana mais populosa da União Europeia, depois de Paris, Londres, Madri, Ruhr e Milão.[4] É a maior metrópole do Mar Mediterrâneo, localizada na costa entre as foz dos rios Llobregat e Besòs, e limitada ao oeste pela Serra de Collserola, cujo pico mais alto é de 512 metros de altura.",
      data: "20/10/2019"
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
