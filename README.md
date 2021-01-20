"# intro-mapas"
# Pasos
1. Crear cuenta en ArcGIS for Developers: https://developers.arcgis.com/sign-up/
2. Importar la API de JS
3. Estructura básica de HTML
4. En el body un div con un id para añadir el mapa
5. Linkamos el archivo JS y ponemos la estructura del require.
  * Al require le pasaremos un array con todos los componentes de la librería que necesitemos. Para un mapa sencillo, nos vale con un mapa y la vista del mapa.
  * También le pasamos la función que se va a ejecutar justo después y será la que pinte el mapa.
6. Al array del require le pasamos el mapa y la vista del mapa:
  - Map: el mapa en sí
  - MapView: La vista del mapa, la parte que vamos a ver del mapa.
  Esto es porque los mapas los dividimos en capas para pintar la información.
7. Por orden, le pasamos como parámetros las partes de la librería que hemos cargado.
8. Creamos una variable mapa sobre la que instanciamos el Map, un objeto con la información del mapa y le decimos qué tipo de mapa queremos que sea el mapa base. Más tipos de mapas base: https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
9. Ya tenemos el mapa pero no lo estamos pintando, eso lo hacemos con la vista del mapa. En este objeto le pasaremos:
  - El contenedor del mapa, el id que hemos puesto antes.
  - El mapa que tiene que pintar (map)
  - Dónde tiene que centrarse el mapa, LONGITUD - LATITUD
  - El nivel de zoom
10. Estamos cargando el mapa pero no tiene tamaño el div. Vamos a hacer que se pinte en toda la pantalla así le quitamos el margin y el padding al html, body y mapDiv y le damos ancho y alto de 100%
11. Podemos sacar las coordenadas del objeto de la vista: mapView.center.longitude / mapView.center.latitude
12. Añadir un punto sobre el mapa:
  - Como no sabemos las coordenadas vamos a buscar las coordenadas a mano con el puntero. Vamos a coger las coordenas cuando hagamos click sobre el punto que queramos añadiendo el evento click a la vista // view.on("click", event => console.log(event))
  - Ya que sabemos las coordenadas del punto vamos a añadirle el punto. Como os he contado antes, los mapas van por capas que se visualizan a través de la vista.
    - La capa que vamos a añadir va a ser una capa de gráficos porque el punto que vamos a añadir será un gráfico.
    - Importamos de la API: Graphic y GraphicsLayer
    - Instanciamos la capa de gráficos.
    - Para pintar algo sobre el mapa necesitamos decirle dónde lo tiene que pintar y qué tiene que pintar. 
    - Vamos a decirle las coordenadas del punto y le damos el tipo punto. (point)
    - Cómo pintarlo con el symbolPoint. Le decimos el tipo y el color. (symbolPoint)
    - Si queremos añadirle un icono tendremos que cambiarle el tipo a picture-marker y añadir la url y el tamaño. (pointGraphic)
    - Añadimos el gráfico a la capa de gráficos // graphicLayer.add(pointGraphic);
    - Por último, añadimos la capa de gráficos al mapa // map.add(graphicLayer);

## Complementar
### Popup
Añadir al gráfico lo que queremos que se muestre por pantalla. popupTemplate: {title: "..", content: ".."}

### Widget de Zoom
Instanciamos el widget de zoom y lo añadimos a la vista dándole una posición.

### Widget de Medición
Lo importamos e instanciamos la vista y podemos declarar la herramienta de activa que mida la distancia o el area. // activeTool: "area"/"distance"
Elegimos donde visualizarlo en la vista
