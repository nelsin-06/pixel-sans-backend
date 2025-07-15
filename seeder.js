// MongoDB Seeder Script for Posts Collection
// Run this script with mongosh: mongosh your_database_name < seeder.js

// Switch to your database (replace 'your_database_name' with your actual database name)
use('your_database_name');

// Clear existing posts (optional - remove this line if you want to keep existing data)
// db.posts.deleteMany({});

// Insert sample posts
db.posts.insertMany([
  {
    title: "métodos infalibles para ganar más robux",
    category:"roblox",
    active: true,
    image: "https://image.com/robux-guide.jpg",
    secciones: [
      {
        titulo: "¿Cuáles son los riesgos de que los niños jueguen a Free Fire?",
        contenido: "Los riesgos de que los niños jueguen a Free Fire son motivo de preocupación para muchos padres. El juego puede generar adicción, exposición a contenido violento y gastos excesivos en compras dentro del juego."
      },
      {
        titulo: "Métodos seguros para obtener Robux gratis",
        contenido: "Existen formas legítimas de obtener Robux sin gastar dinero real, como participar en eventos oficiales, usar aplicaciones de recompensas verificadas y completar encuestas en plataformas autorizadas por Roblox."
      },
      {
        titulo: "Cuidado con las estafas",
        contenido: "Nunca compartas tu información personal o contraseña de Roblox. Las páginas que prometen Robux gratis ilimitados suelen ser estafas que pueden comprometer tu cuenta."
      }
    ],
    createdAt: new Date("2025-06-26T22:41:39.746Z"),
    updatedAt: new Date("2025-06-26T22:41:39.746Z")
  },
  {
    title: "guía completa de minecraft para principiantes",
    category:"roblox",
    active: true,
    image: "https://image.com/minecraft-guide.jpg",
    secciones: [
      {
        titulo: "Primeros pasos en Minecraft",
        contenido: "Minecraft es un juego de construcción y supervivencia donde puedes crear mundos infinitos. Lo primero que debes hacer es recolectar madera para crear herramientas básicas."
      },
      {
        titulo: "Recursos esenciales para sobrevivir",
        contenido: "Los recursos más importantes son: madera, piedra, carbón, hierro y comida. Asegúrate de construir un refugio antes de que llegue la noche para protegerte de los monstruos."
      },
      {
        titulo: "Construcciones avanzadas",
        contenido: "Una vez que domines lo básico, puedes crear castillos, ciudades enteras y mecanismos complejos usando redstone. La creatividad es el límite en Minecraft."
      }
    ],
    createdAt: new Date("2025-06-25T15:30:22.123Z"),
    updatedAt: new Date("2025-06-25T15:30:22.123Z")
  },
  {
    title: "estrategias pro para among us",
    category:"roblox",
    active: true,
    image: "https://image.com/among-us-strategies.jpg",
    secciones: [
      {
        titulo: "Cómo ser un impostor exitoso",
        contenido: "Para ser un buen impostor en Among Us, debes actuar natural, crear coartadas convincentes y eliminar a los tripulantes de manera estratégica sin levantar sospechas."
      },
      {
        titulo: "Técnicas de detección para tripulantes",
        contenido: "Como tripulante, observa los patrones de movimiento, verifica las tareas visuales y mantente en grupo. Presta atención a quién está cerca cuando ocurre un sabotaje."
      },
      {
        titulo: "Comunicación efectiva en las reuniones",
        contenido: "En las reuniones de emergencia, presenta evidencia clara y específica. Evita hacer acusaciones sin fundamento y escucha atentamente las explicaciones de otros jugadores."
      }
    ],
    createdAt: new Date("2025-06-24T10:15:45.987Z"),
    updatedAt: new Date("2025-06-24T10:15:45.987Z")
  },
  {
    title: "mejores builds para fortnite temporada actual",
    category:"roblox",
    active: true,
    image: "https://image.com/fortnite-builds.jpg",
    secciones: [
      {
        titulo: "Builds defensivos básicos",
        contenido: "Los builds defensivos son fundamentales en Fortnite. Aprende a crear muros, rampas y techos rápidamente para protegerte del fuego enemigo y ganar altura estratégica."
      },
      {
        titulo: "Técnicas de construcción avanzada",
        contenido: "Domina el 90s, el double edit y el cone jump para superar a tus oponentes. Estas técnicas requieren práctica constante pero te darán una ventaja significativa."
      },
      {
        titulo: "Builds agresivos para eliminar enemigos",
        contenido: "Usa el boxfighting y las ramp rushes para presionar a tus oponentes. La clave está en mantener la presión constante mientras conservas materiales para defenderte."
      }
    ],
    createdAt: new Date("2025-06-23T18:45:12.456Z"),
    updatedAt: new Date("2025-06-23T18:45:12.456Z")
  },
  {
    title: "consejos para mejorar en call of duty warzone",
    category:"roblox",
    active: true,
    image: "https://image.com/warzone-tips.jpg",
    secciones: [
      {
        titulo: "Configuración óptima de controles",
        contenido: "Ajusta la sensibilidad de tu mira según tu estilo de juego. Una sensibilidad baja es mejor para francotiradores, mientras que una alta favorece el combate cuerpo a cuerpo."
      },
      {
        titulo: "Estrategias de posicionamiento",
        contenido: "El posicionamiento es clave en Warzone. Mantente en la zona segura, usa el terreno a tu favor y evita los espacios abiertos donde puedes ser emboscado fácilmente."
      },
      {
        titulo: "Mejores configuraciones de armas",
        contenido: "Experimenta con diferentes configuraciones de armas. Las armas automáticas son versátiles, mientras que los rifles de francotirador son letales a larga distancia."
      }
    ],
    createdAt: new Date("2025-06-22T14:20:33.789Z"),
    updatedAt: new Date("2025-06-22T14:20:33.789Z")
  },
  {
    title: "guía de pokémon go para eventos especiales",
    category:"roblox",
    active: true,
    image: "https://image.com/pokemon-go-events.jpg",
    secciones: [
      {
        titulo: "Cómo aprovechar al máximo los eventos",
        contenido: "Durante los eventos especiales de Pokémon GO, las tasas de aparición de ciertos Pokémon aumentan. Planifica tu tiempo de juego durante estos períodos para maximizar las capturas."
      },
      {
        titulo: "Estrategias para días comunitarios",
        contenido: "Los días comunitarios ofrecen movimientos exclusivos y Pokémon shiny. Usa inciensos, camina en áreas con muchas Pokéstops y ten suficientes Pokéballs preparadas."
      },
      {
        titulo: "Raids y batallas en gimnasios",
        contenido: "Coordínate con otros entrenadores para raids de nivel alto. Conoce las debilidades de los jefes de raid y prepara un equipo diverso con los tipos de Pokémon adecuados."
      }
    ],
    createdAt: new Date("2025-06-21T09:10:18.654Z"),
    updatedAt: new Date("2025-06-21T09:10:18.654Z")
  },
  {
    title: "secretos ocultos en genshin impact",
    category:"roblox",
    active: true,
    image: "https://image.com/genshin-secrets.jpg",
    secciones: [
      {
        titulo: "Cofres ocultos en Mondstadt",
        contenido: "Mondstadt esconde numerosos cofres en lugares difíciles de alcanzar. Usa personajes con habilidades de escalada como Venti o Kazuha para acceder a áreas elevadas."
      },
      {
        titulo: "Misiones secretas sin marcar",
        contenido: "Existen misiones que no aparecen en el mapa pero que otorgan recompensas valiosas. Habla con todos los NPCs y explora cada rincón del mundo para descubrirlas."
      },
      {
        titulo: "Estrategias para conseguir primogemas gratis",
        contenido: "Completa todas las misiones diarias, explora nuevas áreas al 100%, participa en eventos temporales y abre todos los cofres para maximizar tus primogemas."
      }
    ],
    createdAt: new Date("2025-06-20T16:55:07.321Z"),
    updatedAt: new Date("2025-06-20T16:55:07.321Z")
  },
  {
    title: "tutorial completo de valorant para nuevos jugadores",
    category:"roblox",
    active: true,
    image: "https://image.com/valorant-tutorial.jpg",
    secciones: [
      {
        titulo: "Fundamentos del gameplay",
        contenido: "Valorant combina elementos de FPS táctico con habilidades únicas. Aprende a usar el crosshair placement, controla el recoil de las armas y domina el counter-strafing."
      },
      {
        titulo: "Agentes recomendados para principiantes",
        contenido: "Comienza con agentes como Sage, Brimstone o Phoenix. Estos personajes tienen habilidades straightforward que te ayudarán a entender los fundamentos del juego."
      },
      {
        titulo: "Estrategias de equipo y comunicación",
        contenido: "La comunicación es vital en Valorant. Usa el micrófono para dar información útil, aprende los callouts de cada mapa y coordina con tu equipo las estrategias de ataque y defensa."
      }
    ],
    createdAt: new Date("2025-06-19T12:30:45.987Z"),
    updatedAt: new Date("2025-06-19T12:30:45.987Z")
  },
  {
    title: "optimización de pc para gaming",
    category:"roblox",
    active: true,
    image: "https://image.com/pc-optimization.jpg",
    secciones: [
      {
        titulo: "Configuración de Windows para gaming",
        contenido: "Desactiva las actualizaciones automáticas durante el juego, configura el modo de juego de Windows y ajusta las opciones de energía para máximo rendimiento."
      },
      {
        titulo: "Drivers y software esencial",
        contenido: "Mantén actualizados los drivers de tu tarjeta gráfica, instala MSI Afterburner para monitoreo y considera usar software como Process Lasso para optimizar la CPU."
      },
      {
        titulo: "Hardware upgrades que marcan la diferencia",
        contenido: "Una SSD mejorará drásticamente los tiempos de carga, mientras que más RAM y una mejor tarjeta gráfica aumentarán el rendimiento en juegos modernos."
      }
    ],
    createdAt: new Date("2025-06-18T08:15:22.123Z"),
    updatedAt: new Date("2025-06-18T08:15:22.123Z")
  },
  {
    title: "review de los mejores auriculares gaming 2025",
    category:"roblox",
    active: true,
    image: "https://image.com/gaming-headsets.jpg",
    secciones: [
      {
        titulo: "Auriculares para presupuestos ajustados",
        contenido: "Para gamers con presupuesto limitado, recomendamos el HyperX Cloud Stinger y el Corsair HS35. Ofrecen buena calidad de sonido y comodidad a un precio accesible."
      },
      {
        titulo: "Gama media: la mejor relación calidad-precio",
        contenido: "El SteelSeries Arctis 7 y el Logitech G Pro X destacan en esta categoría. Tienen audio envolvente, micrófonos de calidad y construcción duradera."
      },
      {
        titulo: "Auriculares premium para profesionales",
        contenido: "Para esports y streaming profesional, el Astro A50 y el Sennheiser Game One ofrecen la mejor calidad de audio y características avanzadas."
      }
    ],
    createdAt: new Date("2025-06-17T20:40:11.456Z"),
    updatedAt: new Date("2025-06-17T20:40:11.456Z")
  }
]);

// Verify the insertion
print("Posts inserted successfully!");
print("Total posts in collection: " + db.posts.countDocuments());

// Show a sample of the inserted data
print("\nSample post:");
printjson(db.posts.findOne());
