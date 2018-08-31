const data = [
  {
    id: '1',
    brand_name: 'KIOMI',
    shape: 'Square',
    colors: ['rubberized navy', 'black', 'brown', 'silver'],
    variants: [{
      id: '1-1',
      name: ' Sunglasses - rubberized navy',
      color: 'rubberized navy',
      img: 'https://i.imgur.com/rTcISHZ.jpg',
      price: '69,00'
    }, {
      id: '1-2',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/P66AusB.jpg',
      price: '64,00'
    }, {
      id: '1-3',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/qi4QPHA.jpg',
      price: '67,00'
    }, {
      id: '1-4',
      name: ' Sunglasses - silver',
      color: 'silver',
      img: 'https://i.imgur.com/mrILDmw.jpg',
      price: '100,00'
    }]
  }, {
    id: '2',
    brand_name: 'KIOMI',
    shape: 'Square',
    colors: ['black', 'brown', 'brown', 'silver'],
    variants: [{
      id: '2-1',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/Cx3xwnp.jpg',
      price: '69,00',
    }, {
      id: '2-2',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/0YNxvkq.jpg',
      price: '64,00',
    }, {
      id: '2-3',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/1gNjLd4.jpg',
      price: '64,00',
    }, {
      id: '2-4',
      name: ' Sunglasses - silver',
      color: 'silver',
      img: 'https://i.imgur.com/6gONP4Y.jpg',
      price: '70,00',
    }]
  }, {
    id: '3',
    brand_name: 'YOURTURN',
    shape: 'Square',
    colors: ['black', 'brown', 'light brown', 'dark green'],
    variants: [{
      id: '3-1',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/7bulkk9.jpg',
      price: '75,00',
    }, {
      id: '3-2',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/o9wcc4f.jpg',
      price: '50,00',
    }, {
      id: '3-3',
      name: ' Sunglasses - light brown',
      color: 'light brown',
      img: 'https://i.imgur.com/xvgxQlA.jpg',
      price: '60,00',
    }, {
      id: '3-4',
      name: ' Sunglasses - dark green',
      color: 'dark green',
      img: 'https://i.imgur.com/Y9r8Vnj.jpg',
      price: '72,00',
    }]
  }, {
    id: '4',
    brand_name: 'Timberland',
    shape: 'Rectangle',
    colors: ['white', 'matte red', 'black', 'scarlet'],
    variants: [{
      id: '4-1',
      name: ' Sunglasses - white',
      color: 'white',
      img: 'https://i.imgur.com/EJ9go0W.jpg',
      price: '75,00',
    }, {
      id: '4-2',
      name: ' Sunglasses - matte red',
      color: 'matte red',
      img: 'https://i.imgur.com/fPJv2ih.jpg',
      price: '50,00',
    }, {
      id: '4-3',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/pmsmMvF.jpg',
      price: '80,00',
    }, {
      id: '4-4',
      name: ' Sunglasses - scarlet',
      color: 'scarlet',
      img: 'https://i.imgur.com/X3xFvRp.jpg',
      price: '100,00',
    }]
  }, {
    id: '5',
    brand_name: 'Carhartt WIP',
    shape: 'Round',
    colors: ['black', 'silver', 'brown', 'blue'],
    variants: [{
      id: '5-1',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/s3ihuZp.jpg',
      price: '72,00',
    }, {
      id: '5-2',
      name: ' Sunglasses - silver',
      color: 'silver',
      img: 'https://i.imgur.com/GuoEeqq.jpg',
      price: '50,00',
    }, {
      id: '5-3',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/Zwf8cNr.jpg',
      price: '50,00',
    }, {
      id: '5-4',
      name: ' Sunglasses - blue',
      color: 'blue',
      img: 'https://i.imgur.com/ClSkW9b.jpg',
      price: '69,00',
    }]
  }, {
    id: '6',
    brand_name: 'Diesel',
    shape: 'Square',
    colors: ['grey', 'crystal', 'light green', 'shiny beige'],
    variants: [{
      id: '6-1',
      name: ' Sunglasses - grey',
      color: 'grey',
      img: 'https://i.imgur.com/CsA5MdM.jpg',
      price: '150,00',
    }, {
      id: '6-2',
      name: ' Sunglasses - crystal',
      color: 'crystal',
      img: 'https://i.imgur.com/AKHBsw8.jpg',
      price: '180,00',
    }, {
      id: '6-3',
      name: ' Sunglasses - light green',
      color: 'light green',
      img: 'https://i.imgur.com/BNycMiz.jpg',
      price: '175,00',
    }, {
      id: '6-4',
      name: ' Sunglasses - shiny beige',
      color: 'shiny beige',
      img: 'https://i.imgur.com/4AQZOrm.jpg',
      price: '160,00',
    }]
  }, {
    id: '7',
    brand_name: 'YOURTURN',
    shape: 'Round',
    colors: ['brown', 'black', 'dark green', 'light brown'],
    variants: [{
      id: '7-1',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/liTpY1e.jpg',
      price: '58,00',
    }, {
      id: '7-2',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/V3Lc3Gq.jpg',
      price: '80,00',
    }, {
      id: '7-3',
      name: ' Sunglasses - dark green',
      color: 'dark green',
      img: 'https://i.imgur.com/Kul4S9i.jpg',
      price: '75,00',
    }, {
      id: '7-4',
      name: ' Sunglasses - light brown',
      color: 'light brown',
      img: 'https://i.imgur.com/eJ2ZDXW.jpg',
      price: '60,00',
    }]
  }, {
    id: '8',
    brand_name: 'KIOMI',
    shape: 'Round',
    colors: ['brown', 'black', 'blue', 'dark blue'],
    variants: [{
      id: '8-1',
      name: ' Sunglasses - brown',
      color: 'brown',
      img: 'https://i.imgur.com/HL3Hi6r.jpg',
      price: '59,00',
    }, {
      id: '8-2',
      name: ' Sunglasses - black',
      color: 'black',
      img: 'https://i.imgur.com/u7T5lZM.jpg',
      price: '79,00',
    }, {
      id: '8-3',
      name: ' Sunglasses - blue',
      color: 'blue',
      img: 'https://i.imgur.com/h5EXprR.jpg',
      price: '79,00',
    }, {
      id: '8-4',
      name: ' Sunglasses - dark blue',
      color: 'dark blue',
      img: 'https://i.imgur.com/EE5Vdqb.jpg',
      price: '69,00',
    }]
  }, {
    id: '9',
    brand_name: 'Nike Vision',
    shape: 'Square',
    colors: ['mate black', 'grey', 'khaki', 'blue'],
    variants: [{
      id: '9-1',
      name: 'Sunglasses - mate black',
      price: '84,00',
      color: 'mate black',
      img: 'https://i.imgur.com/sYJ45kj.jpg'
    }, {
      id: '9-2',
      name: 'Sunglasses - grey',
      price: '90,00',
      color: 'grey',
      img: 'https://i.imgur.com/gc1fDos.jpg'
    }, {
      id: '9-3',
      name: 'Sunglasses - khaki',
      price: '86,00',
      color: 'khaki',
      img: 'https://i.imgur.com/FR4fegb.jpg'
    }, {
      id: '9-4',
      name: 'Sunglasses - blue',
      price: '80,00',
      color: 'blue',
      img: 'https://i.imgur.com/umZ54jb.jpg'
    }
    ],
  },
  {
    id: '10',
    brand_name: 'Timberland',
    shape: 'Rectangle',
    colors: ['white', 'blue', 'dark green', 'black'],
    variants: [{
      id: '10-1',
      name: 'Sunglasses - white',
      price: '609,00',
      color: 'white',
      img: 'https://i.imgur.com/lymbBCi.jpg'
    }, {
      id: '10-2',
      name: 'Sunglasses - blue',
      price: '600,00',
      color: 'blue',
      img: 'https://i.imgur.com/NYX1Oiu.jpg'
    }, {
      id: '10-3',
      name: 'Sunglasses - dark green',
      price: '660,00',
      color: 'dark green',
      img: 'https://i.imgur.com/KE6g4cn.jpg'
    }, {
      id: '10-4',
      name: 'Sunglasses - black',
      price: '69,00',
      color: 'black',
      img: 'https://i.imgur.com/jh58SbX.jpg'
    }],
  }, {
    id: '11',
    brand_name: 'Lacoste',
    shape: 'Square',
    colors: ['shiny black', 'mate green', 'blue', 'purple'],
    variants: [{
      id: '11-1',
      name: ' Sunglasses - shiny black',
      price: '629,00',
      color: 'shiny black',
      img: 'https://i.imgur.com/9otQtfB.jpg'
    }, {
      id: '11-2',
      name: ' Sunglasses - mate green',
      price: '609,00',
      color: 'mate green',
      img: 'https://i.imgur.com/ECWZUBq.jpg'
    }, {
      id: '11-3',
      name: ' Sunglasses - blue',
      price: '600,00',
      color: 'blue',
      img: 'https://i.imgur.com/Hmw4KGC.jpg'
    }, {
      id: '11-4',
      name: ' Sunglasses - purple',
      price: '600,00',
      color: 'purple',
      img: 'https://i.imgur.com/1iEmdf1.jpg'
    }],
  }
];

export default data;