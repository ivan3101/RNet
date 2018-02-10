import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredArticles = [
    {
      id: 0,
      title: 'El \'disc rot\', la inevitable amenaza para los coleccionistas de discos compactos',
      imageUrl: 'https://i.blogs.es/e19f6e/disc-rot-02/500_333.jpg'
    },
    {
      id: 1,
      title: 'El misterio de las esquinas de colores en los juegos de algunas consolas Nintendo: utilidad, variantes y excepciones',
      imageUrl: 'https://i.blogs.es/989cf3/esquinas-switch-02/500_333.jpg'
    },
    {
      id: 2,
      title: 'Uber acuerda pagar a Waymo (Google) 245 millones de dólares para cerrar su batalla legal ',
      imageUrl: 'https://i.blogs.es/e62a2b/uber-waymo/500_333.png'
    },
    {
      id: 3,
      title: 'New Horizons le ha arrebatado el récord de la foto tomada desde el lugar más alejado de la Tierra a Voyager 1 ',
      imageUrl: 'https://i.blogs.es/6eb429/new-horitzons/500_333.jpg'
    },
    {
      id: 4,
      title: 'Mi Box TV, análisis: la mejor calidad-precio si quieres ver contenido 4K en tu televisor',
      imageUrl: 'https://i.blogs.es/b96927/mi-box-tv/1024_682.jpg'
    },
  ];
  classGrid = ['gl', 'gc', 'gr', 'gl2', 'gr2'];
  constructor() { }

  ngOnInit() {
  }

}
