const galleryItems = [
  {
    src: "assets/images/portable-house-exterior-yard.jpg",
    title: "Exterior residencial",
    alt: "Casa portátil gris instalada en exterior",
  },
  {
    src: "assets/images/portable-house-icecream-exterior.jpg",
    title: "Fachada comercial",
    alt: "Casa portátil adaptada como heladería",
  },
  {
    src: "assets/images/portable-house-shop-interior.jpg",
    title: "Interior tienda",
    alt: "Interior de casa portátil configurada como tienda",
  },
  {
    src: "assets/images/portable-house-cafe.jpg",
    title: "Interior café",
    alt: "Casa portátil configurada como café con vitrina y estación de bebidas",
  },
  {
    src: "assets/images/portable-house-bedroom-wide.jpg",
    title: "Dormitorio equipado",
    alt: "Interior de casa portátil con dormitorio equipado",
  },
  {
    src: "assets/images/portable-house-bedroom-minimal.jpg",
    title: "Dormitorio minimal",
    alt: "Interior minimal con cama en casa portátil",
  },
  {
    src: "assets/images/portable-house-meeting-room.jpg",
    title: "Sala de reunión",
    alt: "Casa portátil usada como sala de reunión",
  },
  {
    src: "assets/images/portable-house-gray-side.jpg",
    title: "Exterior lateral",
    alt: "Vista lateral gris de casa portátil",
  },
  {
    src: "assets/images/portable-house-production-line.jpg",
    title: "Línea de producción",
    alt: "Fila de casas portátiles en fábrica",
  },
  {
    src: "assets/images/portable-house-gray-front.jpg",
    title: "Frente gris",
    alt: "Frente gris de casa portátil con puerta y ventana",
  },
  {
    src: "assets/images/portable-house-gray-back.jpg",
    title: "Parte posterior gris",
    alt: "Parte posterior gris de casa portátil",
  },
];

const screwFamilies = [
  {
    name: "Lenteja golilla punta broca",
    detail: "Zincado brillante",
    items: [
      ["8x1/2", "3.36", "16000 U", "$53,760", "$63,974"],
      ["8x3/4", "4.33", "13000 U", "$56,290", "$66,985"],
      ["8x1", "5.20", "10000 U", "$52,000", "$61,880"],
      ["8x1.1/4", "6.25", "8000 U", "$50,000", "$59,500"],
      ["8x1.5/8", "7.70", "6000 U", "$46,200", "$54,978"],
      ["8x2", "8.91", "5000 U", "$44,550", "$53,015"],
    ],
  },
  {
    name: "Lenteja golilla punta fina",
    detail: "Zincado brillante",
    items: [
      ["8x1/2", "3.12", "16000 U", "$49,920", "$59,405"],
      ["8x3/4", "3.80", "13000 U", "$49,400", "$58,786"],
      ["8x1", "4.30", "10000 U", "$43,000", "$51,170"],
      ["8x1.1/4", "5.86", "8000 U", "$46,880", "$55,787"],
      ["8x1.1/2", "6.34", "8000 U", "$50,720", "$60,357"],
      ["8x2", "8.03", "5000 U", "$40,150", "$47,779"],
    ],
  },
  {
    name: "Volcanita punta fina",
    detail: "Zincado brillante",
    items: [
      ["6x1", "2.66", "20000 U", "$53,200", "$63,308"],
      ["6x1.1/4", "3.15", "16000 U", "$50,400", "$59,976"],
      ["6x1.5/8", "4.06", "12000 U", "$48,720", "$57,977"],
      ["6x2", "4.97", "8000 U", "$39,760", "$47,314"],
    ],
  },
  {
    name: "Volcanita punta broca",
    detail: "Zincado brillante",
    items: [
      ["6x1", "3.12", "20000 U", "$62,400", "$74,256"],
      ["6x1.1/4", "3.89", "15000 U", "$58,350", "$69,437"],
      ["6x1.5/8", "4.70", "12000 U", "$56,400", "$67,116"],
      ["6x2", "5.68", "8000 U", "$45,440", "$54,074"],
      ["8x2.1/2", "11.00", "5000 U", "$55,000", "$65,450"],
      ["8x3", "11.22", "4000 U", "$44,880", "$53,407"],
    ],
  },
  {
    name: "CRS rosca gruesa",
    detail: "Zincado brillante",
    items: [
      ["6x5/8", "2.11", "25000 U", "$52,750", "$62,773"],
      ["6x3/4", "2.25", "25000 U", "$56,250", "$66,938"],
      ["6x1", "2.66", "20000 U", "$53,200", "$63,308"],
      ["6x1.1/4", "3.15", "16000 U", "$50,400", "$59,976"],
      ["6x1.5/8", "4.06", "12000 U", "$48,720", "$57,977"],
      ["6x2", "4.97", "8000 U", "$39,760", "$47,314"],
      ["6x3 1/2", "12.17", "3000 U", "$36,510", "$43,447"],
      ["8x2.1/2", "8.22", "5500 U", "$45,210", "$53,800"],
      ["8x3", "9.80", "4000 U", "$39,200", "$46,648"],
      ["8x4", "13.65", "2500 U", "$34,125", "$40,609"],
    ],
  },
  {
    name: "CRS rosca gruesa",
    detail: "Fosfatado",
    items: [
      ["6x5/8", "2.11", "25000 U", "$52,750", "$62,773"],
      ["6x3/4", "2.25", "22000 U", "$49,500", "$58,905"],
      ["6x1", "2.66", "20000 U", "$53,200", "$63,308"],
      ["6x1.1/4", "3.15", "16000 U", "$50,400", "$59,976"],
      ["6x1.5/8", "4.06", "12000 U", "$48,720", "$57,977"],
      ["6x2", "4.97", "8000 U", "$39,760", "$47,314"],
      ["8x2.1/2", "8.22", "5500 U", "$45,210", "$53,800"],
      ["8x3", "9.80", "4000 U", "$39,200", "$46,648"],
      ["8x4", "13.65", "2500 U", "$34,125", "$40,609"],
    ],
  },
  {
    name: "CRS cajitas",
    detail: "Cajas de 100 unidades",
    items: [
      ["6x3/4", "2.47", "16000 U", "$39,520", "$47,029"],
      ["6x1", "3.25", "16000 U", "$52,000", "$61,880"],
      ["6x1.1/4", "4.10", "16000 U", "$65,600", "$78,064"],
      ["6x1.5/8", "4.80", "7200 U", "$34,560", "$41,126"],
      ["6x2", "5.70", "8000 U", "$45,600", "$54,264"],
      ["8x2.1/2", "9.20", "3600 U", "$33,120", "$39,413"],
      ["8x3", "11.10", "3600 U", "$39,960", "$47,552"],
      ["8x4", "16.10", "3600 U", "$57,960", "$68,972"],
    ],
  },
  {
    name: "Hexagonal punta broca con golilla",
    detail: "Zincado brillante",
    items: [
      ["10x3/4", "9.20", "6000 U", "$55,200", "$65,688"],
      ["10x1", "10.50", "5000 U", "$52,500", "$62,475"],
      ["12x3/4", "9.60", "6000 U", "$57,600", "$68,544"],
      ["12x1", "11.10", "5000 U", "$55,500", "$66,045"],
      ["12x1.1/2", "15.10", "4000 U", "$60,400", "$71,876"],
      ["12x2", "18.50", "3000 U", "$55,500", "$66,045"],
      ["12x2.1/2", "22.50", "2500 U", "$56,250", "$66,938"],
      ["12x3", "23.30", "2000 U", "$46,600", "$55,454"],
      ["12x3 1/2", "29.99", "1500 U", "$44,985", "$53,532"],
      ["12x4", "32.98", "1500 U", "$49,470", "$58,869"],
      ["14x3.1/2", "39.90", "1000 U", "$39,900", "$47,481"],
      ["14x4", "48.40", "1000 U", "$48,400", "$57,596"],
      ["14x4.1/2", "50.20", "1000 U", "$50,200", "$59,738"],
    ],
  },
  {
    name: "Hexagonal punta broca sin golilla",
    detail: "Zincado brillante",
    items: [
      ["10x5/8", "6.70", "10000 U", "$67,000", "$79,730"],
      ["10x3/4", "7.50", "8000 U", "$60,000", "$71,400"],
      ["10x1", "8.37", "7000 U", "$58,590", "$69,722"],
      ["12x3/4", "7.83", "8000 U", "$62,640", "$74,542"],
      ["12x1", "9.63", "6000 U", "$57,780", "$68,758"],
      ["12x1.1/2", "12.96", "5000 U", "$64,800", "$77,112"],
      ["12x2", "14.40", "4000 U", "$57,600", "$68,544"],
    ],
  },
  {
    name: "Hexagonal punta broca con golilla",
    detail: "Cajitas",
    items: [
      ["10x3/4", "9.20", "4000 U", "$36,800", "$43,792"],
      ["12x3/4", "12.30", "4000 U", "$49,200", "$58,548"],
      ["12x1", "14.50", "4000 U", "$58,000", "$69,020"],
      ["12x1.1/2", "19.00", "3000 U", "$57,000", "$67,830"],
      ["12x2", "23.30", "3000 U", "$69,900", "$83,181"],
      ["12x2.1/2", "23.80", "3000 U", "$71,400", "$84,966"],
      ["12x3", "26.78", "3000 U", "$80,340", "$95,605"],
    ],
  },
  {
    name: "Hexagonal punta espada con golilla",
    detail: "Zincado brillante",
    items: [
      ["10x1", "11.30", "5000 U", "$56,500", "$67,235"],
      ["10x1.1/2", "14.40", "4000 U", "$57,600", "$68,544"],
      ["10x2", "16.50", "3000 U", "$49,500", "$58,905"],
      ["10x2.1/2", "19.10", "2500 U", "$47,750", "$56,823"],
      ["10x3", "24.20", "2000 U", "$48,400", "$57,596"],
    ],
  },
  {
    name: "Tapfast punta fina",
    detail: "Zincado",
    items: [
      ["10x1", "10.20", "5000 U", "$51,000", "$60,690"],
      ["10x1.1/2", "12.80", "5000 U", "$64,000", "$76,160"],
      ["10x2", "15.50", "3000 U", "$46,500", "$55,335"],
      ["10x2.1/2", "18.50", "2500 U", "$46,250", "$55,038"],
      ["10x3", "21.50", "2000 U", "$43,000", "$51,170"],
    ],
  },
  {
    name: "Tarugo de plastico",
    detail: "Fijacion liviana",
    items: [
      ["6x30", "2.24", "12000 U", "$26,880", "$31,987"],
      ["8x40", "4.00", "6000 U", "$24,000", "$28,560"],
      ["10x50", "7.20", "4000 U", "$28,800", "$34,272"],
      ["12x60", "11.50", "2000 U", "$23,000", "$27,370"],
      ["14x75", "13.60", "1000 U", "$13,600", "$16,184"],
    ],
  },
  {
    name: "Tarugo paloma",
    detail: "Fijacion especial",
    items: [["10x38", "7.65", "3000 U", "$22,950", "$27,311"]],
  },
  {
    name: "Clavo con tarugo",
    detail: "Fijacion rapida",
    items: [
      ["6x40", "8.17", "7000 U", "$57,190", "$68,056"],
      ["6x60", "12.80", "7000 U", "$89,600", "$106,624"],
      ["6x70", "14.63", "6000 U", "$87,780", "$104,458"],
      ["6x80", "16.15", "6000 U", "$96,900", "$115,311"],
      ["8x60", "19.00", "3750 U", "$71,250", "$84,788"],
      ["8x80", "23.50", "3000 U", "$70,500", "$83,895"],
      ["8x100", "28.31", "2500 U", "$70,775", "$84,222"],
      ["8x120", "34.20", "2000 U", "$68,400", "$81,396"],
    ],
  },
  {
    name: "Anclaje",
    detail: "Perno de expansion",
    items: [
      ["5/16 x 2.3/4", "83.60", "800 U", "$66,880", "$79,587"],
      ["5/16 x 3.1/2", "99.75", "720 U", "$71,820", "$85,466"],
      ["5/16 x 4", "109.25", "640 U", "$69,920", "$83,205"],
      ["3/8 x 2.3/4", "85.50", "640 U", "$54,720", "$65,117"],
      ["3/8 x 3", "95.00", "480 U", "$45,600", "$54,264"],
      ["3/8 x 3.3/4", "114.00", "400 U", "$45,600", "$54,264"],
      ["3/8 x 4.1/4", "123.50", "400 U", "$49,400", "$58,786"],
      ["3/8 x 5", "142.50", "400 U", "$57,000", "$67,830"],
      ["3/8 x 6.1/2", "169.10", "320 U", "$54,112", "$64,393"],
      ["1/2 x 2.3/4", "171.00", "360 U", "$61,560", "$73,256"],
      ["1/2 x 3.1/4", "198.80", "280 U", "$55,664", "$66,240"],
      ["1/2 x 3.3/4", "220.30", "240 U", "$52,872", "$62,918"],
      ["1/2 x 4.1/4", "240.73", "240 U", "$57,775", "$68,752"],
      ["1/2 x 5.1/2", "293.36", "200 U", "$58,672", "$69,820"],
      ["1/2 x 7", "379.05", "160 U", "$60,648", "$72,171"],
      ["1/2 x 10", "639.00", "100 U", "$63,900", "$76,041"],
      ["5/8 x 6", "522.00", "120 U", "$62,640", "$74,542"],
      ["5/8 x 8", "667.00", "80 U", "$53,360", "$63,498"],
      ["5/8 x 8 1/2", "701.00", "80 U", "$56,080", "$66,735"],
      ["5/8 x 10", "816.00", "60 U", "$48,960", "$58,262"],
      ["3/4 x 7", "844.55", "60 U", "$50,673", "$60,301"],
      ["3/4 x 8 1/2", "1055.00", "60 U", "$63,300", "$75,327"],
      ["3/4 x 10", "1225.00", "40 U", "$49,000", "$58,310"],
    ],
  },
  {
    name: "Turbo",
    detail: "Tornillo turbo",
    items: [
      ["10 (5.0) x 50/50 mm", "10.30", "6000 U", "$61,800", "$73,542"],
      ["10 (5.0) x 60/60 mm", "12.20", "5000 U", "$61,000", "$72,590"],
      ["10 (5.0) x 70/60 mm", "14.50", "3800 U", "$55,100", "$65,569"],
      ["10 (5.0) x 80/60 mm", "17.80", "3000 U", "$53,400", "$63,546"],
      ["10 (5.0) x 100/60 mm", "22.00", "2500 U", "$55,000", "$65,450"],
      ["14 (6.0) x 70/60 mm", "21.10", "3000 U", "$63,300", "$75,327"],
      ["14 (6.0) x 80/60 mm", "23.60", "2200 U", "$51,920", "$61,785"],
      ["14 (6.0) x 100/60 mm", "29.30", "1500 U", "$43,950", "$52,301"],
      ["14 (6.0) x 120/72 mm", "35.40", "1100 U", "$38,940", "$46,339"],
      ["14 (6.0) x 140/72 mm", "41.80", "900 U", "$37,620", "$44,768"],
      ["14 (6.0) x 160/72 mm", "46.70", "600 U", "$28,020", "$33,344"],
      ["14 (6.0) x 180/72 mm", "53.10", "500 U", "$26,550", "$31,595"],
      ["14 (6.0) x 200/72 mm", "57.70", "400 U", "$23,080", "$27,465"],
    ],
  },
  {
    name: "Tornillos para concretos",
    detail: "Recubrimiento Ruspert en cajita",
    items: [
      ["7.5x60", "30.10", "2000 U", "$60,200", "$71,638"],
      ["7.5x70", "35.00", "2000 U", "$70,000", "$83,300"],
      ["7.5x80", "39.60", "1600 U", "$63,360", "$75,398"],
      ["7.5x100", "48.40", "1000 U", "$48,400", "$57,596"],
      ["7.5x120", "58.10", "1000 U", "$58,100", "$69,139"],
    ],
  },
  {
    name: "Autoavellanante fibrocemento",
    detail: "Punta fina y punta broca",
    items: [
      ["6 x 1 1/4 PF 0301", "3.99", "17000 U", "$67,830", "$80,718"],
      ["6 x 1 1/4 PB 0302", "3.99", "17000 U", "$67,830", "$80,718"],
    ],
  },
  {
    name: "Tornillo soberbio",
    detail: "Zincado brillante, cajitas",
    items: [
      ["3/16 x 1.1/2", "10.45", "4000 U", "$41,800", "$49,742"],
      ["3/16 x 2", "13.30", "4000 U", "$53,200", "$63,308"],
    ],
  },
  {
    name: "Tirafondo",
    detail: "Zincado",
    items: [
      ["1/4 x 2", "20.60", "1000 U", "$20,600", "$24,514"],
      ["1/4 x 2 1/2", "24.73", "2000 U", "$49,460", "$58,857"],
      ["1/4 x 3", "31.50", "1000 U", "$31,500", "$37,485"],
      ["1/4 x 3 1/2", "36.83", "1000 U", "$36,830", "$43,828"],
      ["1/4 x 4", "40.90", "950 U", "$38,855", "$46,237"],
      ["1/4 x 4 1/2", "46.84", "1000 U", "$46,840", "$55,740"],
    ],
  },
  {
    name: "Pernos coche",
    detail: "Zincado",
    items: [
      ["1/4 x 1.1/4", "17.00", "2600 U", "$44,200", "$52,598"],
      ["1/4 x 1.1/2", "17.40", "2400 U", "$41,760", "$49,694"],
      ["1/4 x 2", "22.80", "1900 U", "$43,320", "$51,551"],
      ["1/4 x 2.1/2", "26.30", "1700 U", "$44,710", "$53,205"],
    ],
  },
  {
    name: "Tuerca hexagonal",
    detail: "Zincado",
    items: [["1/4 - 20", "3.18", "8000 U", "$25,440", "$30,274"]],
  },
  {
    name: "Tuerca hexagonal",
    detail: "Fosfatizada",
    items: [["1/4 - 20", "5.30", "8000 U", "$42,400", "$50,456"]],
  },
  {
    name: "Golilla negra",
    detail: "Fijacion",
    items: [["1/4", "2.09", "20000 U", "$41,800", "$49,742"]],
  },
  {
    name: "Taco de anclaje rosca UNG",
    detail: "Zincado",
    items: [
      ["5/16 - 18", "14.25", "2000 U", "$28,500", "$33,915"],
      ["3/8 -16", "48.00", "1000 U", "$48,000", "$57,120"],
      ["1/2 - 13", "51.30", "500 U", "$25,650", "$30,524"],
    ],
  },
];

const saleItems = [
  {
    name: "Lona de toldo 3.3 x 5 m",
    eyebrow: "Final sale",
    price: "$20.000",
    stock: "60 unidades disponibles",
    description:
      "Lona azul impermeable e ignifuga para cubrir mercancias, cargas de camion, almacenaje y uso temporal al aire libre.",
    specs: ["Medida 3.3 x 5 m", "Bordes reforzados", "Ojales de aluminio", "Proteccion UV"],
    images: [
      {
        src: "assets/images/sale/lona-toldo-canva.jpeg",
        alt: "Ficha de lona de toldo azul 3.3 por 5 metros",
      },
      {
        src: "assets/images/sale/lona-toldo-detalle.jpeg",
        alt: "Detalle de lona azul con etiqueta y ojal",
      },
      {
        src: "assets/images/sale/lona-toldo-stock-1.jpeg",
        alt: "Stock de lonas azules dobladas",
      },
      {
        src: "assets/images/sale/lona-toldo-stock-2.jpeg",
        alt: "Lonas azules apiladas en bodega",
      },
    ],
  },
];

const toolProducts = [
  {
    category: "Alicates",
    name: "Linea de alicates aislados",
    detail: "Universal, tipo pinza y cortante",
    items: ["Universal 8 in desde $2.400", "Tipo pinza 6 in y 8 in desde $2.100", "Alicate cortante 6 in $2.200"],
  },
  {
    category: "Medicion",
    name: "Cintas metricas o guinchas",
    detail: "Guinchas compactas",
    items: ["3 mts $750", "5 mts $1.100"],
  },
  {
    category: "Manual",
    name: "Destornilladores",
    detail: "Plano y estrella",
    items: ["Plano 4, 5, 6 y 8 in desde $400", "Estrella 4, 5, 6 y 8 in desde $400"],
  },
  {
    category: "Seguridad",
    name: "Mascara, casco y protector",
    detail: "Proteccion personal para obra",
    items: ["Mascara soldar fotosensible $10.000 + IVA", "Protector facial $1.000 + IVA", "Casco amarillo $500", "Casco rojo $750"],
  },
  {
    category: "Pintura",
    name: "Brochas y espatulas",
    detail: "Medidas surtidas para terminaciones",
    items: ["Brochas 1 a 4 in desde $60", "Espatulas 1 a 6 in desde $180"],
  },
  {
    category: "Corte",
    name: "Discos y cuchillos",
    detail: "Consumibles de corte",
    items: ["Disco 4 1/2 $170", "Cuchillo cartonero $250", "Repuesto cuchillo cartonero $30", "Raspador 6, 8 y 15 in desde $160"],
  },
  {
    category: "Ferreteria",
    name: "Bisagras y embalaje",
    detail: "Accesorios y materiales de apoyo",
    items: ["Bisagras desde $240", "Film transparente, azul y negro $6.000 c/u", "Cinta de embalaje $1.260"],
  },
  {
    category: "Llaves",
    name: "Llave punta corona con chicharra",
    detail: "Precios con IVA",
    items: ["Medidas 8 a 32 mm desde $1.700", "Llaves dobles 8 a 24 mm desde $2.700"],
  },
  {
    category: "Corte pesado",
    name: "Cizallas o napoleon",
    detail: "Corte de pernos y fierro",
    items: ["18 in $8.000", "20 in $11.000", "30 in $17.000", "36 in $18.000", "42 in $26.000", "48 in $27.000"],
  },
  {
    category: "Levante",
    name: "Gatas caiman y tijera",
    detail: "2.0 a 4.0 toneladas",
    items: ["Gata tijera 2.0 toneladas $12.000", "Gata caiman 2.0 toneladas $27.000", "Gata caiman 3.0 toneladas $100.000", "Gata caiman 4.0 toneladas $120.000"],
  },
];

const glassProducts = [
  {
    category: "Rollo",
    name: "Lana de vidrio con foil de aluminio",
    detail: "Codigo 8001",
    price: "$16.200 + IVA",
    items: ["Espesor 50 mm", "Rendimiento 14.4 m2", "Ancho 1.2 m x largo 12 m"],
  },
  {
    category: "Rollo",
    name: "Lana de vidrio en rollo",
    detail: "Codigo 8002",
    price: "$12.500 + IVA",
    items: ["Espesor 50 mm", "Rendimiento 14.4 m2", "Ancho 1.2 m x largo 12 m"],
  },
  {
    category: "Paneles",
    name: "Lana de vidrio en paneles",
    detail: "Codigo 8003",
    price: "$9.870 + IVA",
    items: ["Espesor 50 mm", "Rendimiento 6.48 m2", "Ancho 0.6 m x 1.2 m", "9 unidades"],
  },
  {
    category: "Paneles",
    name: "Lana de vidrio con foil de aluminio en paneles",
    detail: "Codigo 8004",
    price: "$11.440 + IVA",
    items: ["Espesor 50 mm", "Rendimiento 6.48 m2", "Ancho 0.6 m x largo 1.2 m", "9 unidades"],
  },
];

const screwImageRules = [
  {
    src: "assets/images/screws/pdf-product-p1-03.png",
    alt: "Tornillo lenteja golilla punta broca",
    match: (name) => name.includes("lenteja") && name.includes("broca"),
  },
  {
    src: "assets/images/screws/pdf-product-p1-04.jpg",
    alt: "Tornillo lenteja golilla punta fina",
    match: (name) => name.includes("lenteja") && name.includes("fina"),
  },
  {
    src: "assets/images/screws/pdf-product-p1-05.jpg",
    alt: "Tornillo volcanita zincado",
    match: (name) => name.includes("volcanita") && name.includes("fina"),
  },
  {
    src: "assets/images/screws/pdf-product-p1-06.jpg",
    alt: "Tornillo volcanita punta broca",
    match: (name) => name.includes("volcanita") && name.includes("broca"),
  },
  {
    src: "assets/images/screws/w=1200,h=1200,fit=pad.jpeg",
    alt: "Tornillo CRS rosca gruesa",
    match: (name, detail) => name.includes("crs") && detail.includes("zincado"),
  },
  {
    src: "assets/images/screws/pdf-product-p1-10.png",
    alt: "Tornillo CRS fosfatado",
    match: (name, detail) => name.includes("crs") && detail.includes("fosfatado"),
  },
  {
    src: "assets/images/screws/pdf-product-p2-10.png",
    alt: "Tornillos CRS en cajitas",
    match: (name) => name.includes("crs cajitas"),
  },
  {
    src: "assets/images/screws/pdf-product-p2-04.png",
    alt: "Tornillo hexagonal punta broca con golilla",
    match: (name, detail) =>
      name.includes("hexagonal") && name.includes("broca") && name.includes("con golilla") && !detail.includes("cajitas"),
  },
  {
    src: "assets/images/screws/pdf-product-p2-06.png",
    alt: "Tornillo hexagonal punta broca sin golilla",
    match: (name) => name.includes("hexagonal") && name.includes("sin golilla"),
  },
  {
    src: "assets/images/screws/pdf-product-p2-11.png",
    alt: "Tornillo hexagonal en cajitas",
    match: (name, detail) => name.includes("hexagonal") && detail.includes("cajitas"),
  },
  {
    src: "assets/images/screws/pdf-product-p2-08.jpg",
    alt: "Tornillo hexagonal punta espada con golilla",
    match: (name) => name.includes("espada"),
  },
  {
    src: "assets/images/screws/pdf-product-p2-09.jpg",
    alt: "Tornillo tapfast punta fina",
    match: (name) => name.includes("tapfast"),
  },
  {
    src: "assets/images/screws/pdf-product-p3-03.png",
    alt: "Tarugo de plastico",
    match: (name) => name.includes("tarugo de plastico"),
  },
  {
    src: "assets/images/screws/pdf-product-p3-04.jpg",
    alt: "Tarugo paloma",
    match: (name) => name.includes("tarugo paloma"),
  },
  {
    src: "assets/images/screws/pdf-product-p3-02.jpg",
    alt: "Clavo con tarugo",
    match: (name) => name.includes("clavo con tarugo"),
  },
  {
    src: "assets/images/screws/pdf-product-p3-06.jpg",
    alt: "Anclaje de expansion",
    match: (name) => name.includes("anclaje") && !name.includes("taco"),
  },
  {
    src: "assets/images/screws/pdf-product-p3-05.jpg",
    alt: "Tornillo turbo",
    match: (name) => name.includes("turbo"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-09.jpg",
    alt: "Tornillo para concreto",
    match: (name) => name.includes("concretos"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-07.png",
    alt: "Tornillo autoavellanante fibrocemento",
    match: (name) => name.includes("autoavellanante"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-02.png",
    alt: "Tornillo soberbio",
    match: (name) => name.includes("soberbio"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-03.jpg",
    alt: "Tirafondos",
    match: (name) => name.includes("tirafondo"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-04.jpg",
    alt: "Pernos coche",
    match: (name) => name.includes("pernos coche"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-05.jpg",
    alt: "Tuerca hexagonal zincada",
    match: (name, detail) => name.includes("tuerca") && detail.includes("zincado"),
  },
  {
    src: "assets/images/screws/pdf-product-p4-06.jpg",
    alt: "Tuerca hexagonal fosfatizada",
    match: (name, detail) => name.includes("tuerca") && detail.includes("fosfatizada"),
  },
  {
    src: "assets/images/screws/pdf-product-p5-02.jpg",
    alt: "Golilla negra",
    match: (name) => name.includes("golilla negra"),
  },
  {
    src: "assets/images/screws/pdf-product-p5-03.jpg",
    alt: "Taco de anclaje rosca UNG",
    match: (name) => name.includes("taco de anclaje"),
  },
];

let currentIndex = 0;

const mainImage = document.querySelector("#gallery-main");
const galleryTitle = document.querySelector("#gallery-title");
const galleryCount = document.querySelector("#gallery-count");
const thumbs = Array.from(document.querySelectorAll(".thumb"));
const prevButton = document.querySelector(".gallery-control.prev");
const nextButton = document.querySelector(".gallery-control.next");
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("#nav-menu");
const searchInput = document.querySelector("#screw-search");
const catalogueRoot = document.querySelector("#catalogue-root");
const catalogCount = document.querySelector("#catalog-count");
const saleRoot = document.querySelector("#sale-root");
const toolsRoot = document.querySelector("#tools-root");
const glassRoot = document.querySelector("#glass-root");
const catalogLayout = document.querySelector(".catalog-layout");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarRailToggle = document.querySelector(".sidebar-rail-toggle");

function setSidebarCollapsed(isCollapsed) {
  catalogLayout.classList.toggle("sidebar-collapsed", isCollapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarRailToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggle.textContent = isCollapsed ? "Mostrar" : "Ocultar";
}

function productMatches(item, family, query) {
  const haystack = [family.name, family.detail, ...item].join(" ").toLowerCase();
  return haystack.includes(query);
}

function getScrewImage(family) {
  const name = family.name.toLowerCase();
  const detail = family.detail.toLowerCase();
  return (
    screwImageRules.find((rule) => rule.match(name, detail)) || {
      src: "assets/images/screws/pdf-product-p1-01.jpg",
      alt: "Tornillos y fijaciones",
    }
  );
}

function buildProductTable(items, family) {
  const image = getScrewImage(family);
  const wrap = document.createElement("div");
  wrap.className = "product-table-wrap";

  const table = document.createElement("table");
  table.className = "product-table";

  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  ["Foto", "Medida", "Precio unit.", "Embalaje", "Neto caja", "Con IVA"].forEach((label) => {
    const th = document.createElement("th");
    th.textContent = label;
    headRow.append(th);
  });
  head.append(headRow);
  table.append(head);

  const body = document.createElement("tbody");
  items.forEach((item) => {
    const row = document.createElement("tr");
    const imageCell = document.createElement("td");
    imageCell.className = "product-photo-cell";
    const thumb = document.createElement("img");
    thumb.className = "product-thumb";
    thumb.src = image.src;
    thumb.alt = image.alt;
    imageCell.append(thumb);
    row.append(imageCell);

    item.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    body.append(row);
  });
  table.append(body);
  wrap.append(table);
  return wrap;
}

function productLabel(count) {
  return count === 1 ? "1 producto" : `${count} productos`;
}

function buildSpecList(items) {
  const list = document.createElement("ul");
  list.className = "spec-list";
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.append(listItem);
  });
  return list;
}

function renderSaleItems() {
  saleRoot.textContent = "";

  saleItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "sale-card";

    const media = document.createElement("div");
    media.className = "sale-media";
    item.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      if (index === 0) {
        img.className = "sale-media-main";
      }
      media.append(img);
    });

    const copy = document.createElement("div");
    copy.className = "sale-copy";

    const eyebrow = document.createElement("span");
    eyebrow.className = "product-pill";
    eyebrow.textContent = item.eyebrow;

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const meta = document.createElement("div");
    meta.className = "sale-meta";
    const price = document.createElement("strong");
    price.textContent = item.price;
    const stock = document.createElement("span");
    stock.textContent = item.stock;
    meta.append(price, stock);

    copy.append(eyebrow, title, description, meta, buildSpecList(item.specs));
    card.append(media, copy);
    saleRoot.append(card);
  });
}

function buildProductCard(product) {
  const card = document.createElement("article");
  card.className = "info-card";

  const category = document.createElement("span");
  category.className = "product-pill";
  category.textContent = product.category;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const detail = document.createElement("p");
  detail.textContent = product.detail;

  card.append(category, title, detail);

  if (product.price) {
    const price = document.createElement("strong");
    price.className = "card-price";
    price.textContent = product.price;
    card.append(price);
  }

  card.append(buildSpecList(product.items));
  return card;
}

function renderProductCards(root, products) {
  root.textContent = "";
  products.forEach((product) => {
    root.append(buildProductCard(product));
  });
}

function renderScrewCatalog() {
  const query = searchInput.value.trim().toLowerCase();
  catalogueRoot.textContent = "";

  const visibleFamilies = screwFamilies
    .map((family) => ({
      ...family,
      items: query ? family.items.filter((item) => productMatches(item, family, query)) : family.items,
    }))
    .filter((family) => family.items.length > 0);

  const visibleCount = visibleFamilies.reduce((sum, family) => sum + family.items.length, 0);
  const totalCount = screwFamilies.reduce((sum, family) => sum + family.items.length, 0);
  catalogCount.textContent = `${visibleCount} de ${totalCount} productos visibles`;

  if (visibleFamilies.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-catalog";
    empty.textContent = "No hay productos que coincidan con esa busqueda.";
    catalogueRoot.append(empty);
    return;
  }

  visibleFamilies.forEach((family, index) => {
    const image = getScrewImage(family);
    const isOpen = index === 0;
    const panelId = `family-panel-${index}`;
    const article = document.createElement("article");
    article.className = "family-card";
    article.classList.toggle("open", isOpen);

    const head = document.createElement("button");
    head.className = "family-head";
    head.type = "button";
    head.setAttribute("aria-expanded", String(isOpen));
    head.setAttribute("aria-controls", panelId);

    const familyImage = document.createElement("img");
    familyImage.className = "family-image";
    familyImage.src = image.src;
    familyImage.alt = image.alt;

    const copy = document.createElement("div");
    copy.className = "family-copy";
    const title = document.createElement("h3");
    title.textContent = family.name;
    const detail = document.createElement("p");
    detail.textContent = family.detail;
    copy.append(title, detail);

    const badge = document.createElement("span");
    badge.className = "family-count";
    badge.textContent = productLabel(family.items.length);

    const chevron = document.createElement("span");
    chevron.className = "family-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = isOpen ? "-" : "+";

    const panel = buildProductTable(family.items, family);
    panel.id = panelId;
    panel.hidden = !isOpen;

    head.append(familyImage, copy, badge, chevron);
    head.addEventListener("click", () => {
      const nextOpen = panel.hidden;
      panel.hidden = !nextOpen;
      article.classList.toggle("open", nextOpen);
      head.setAttribute("aria-expanded", String(nextOpen));
      chevron.textContent = nextOpen ? "-" : "+";
    });

    article.append(head, panel);
    catalogueRoot.append(article);
  });
}

function showGalleryItem(index) {
  currentIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentIndex];

  mainImage.src = item.src;
  mainImage.alt = item.alt;
  galleryTitle.textContent = item.title;
  galleryCount.textContent = `${currentIndex + 1} / ${galleryItems.length}`;

  thumbs.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("active", thumbIndex === currentIndex);
  });
}

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    showGalleryItem(Number(thumb.dataset.index));
  });
});

prevButton.addEventListener("click", () => {
  showGalleryItem(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showGalleryItem(currentIndex + 1);
});

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!catalogLayout.classList.contains("sidebar-collapsed"));
});

sidebarRailToggle.addEventListener("click", () => {
  setSidebarCollapsed(false);
});

searchInput.addEventListener("input", renderScrewCatalog);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (document.activeElement === mainImage || document.activeElement === document.body) {
    if (event.key === "ArrowLeft") {
      showGalleryItem(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      showGalleryItem(currentIndex + 1);
    }
  }
});

renderSaleItems();
renderProductCards(toolsRoot, toolProducts);
renderProductCards(glassRoot, glassProducts);
renderScrewCatalog();
