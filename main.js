require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/widgets/Zoom", "esri/widgets/Measurement"], 
  function(Map, MapView, Graphic, GraphicsLayer, Zoom, Measurement) {
  map = new Map ({
    basemap: "streets-navigation-vector"
  });

  view = new MapView ({
    container: "mapDiv",
    map: map,
    center: [-3.7197, 40.41304],
    zoom: 15
  });

  view.on("click", (event) => console.log('event', event));

  const graphicLayer = new GraphicsLayer();

  const point = {
    latitude: 40.41210108792506,
    longitude: -3.71963035485529,
    type: "point",
  };

  const symbolPoint = {
    // type: "simple-marker",
    // color: [205, 92, 92]
    type: "picture-marker",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Pin-location.png",
    width: "26px",
    height: "26px"
  };

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: symbolPoint,
    popupTemplate: {
      title: 'Google for Startups',
      content: 'Calle Moreno Nieto, 2. Madrid'
    }
  });

  graphicLayer.add(pointGraphic);
  
  var zoomWidget = new Zoom({
    view: view
  });

  const measurement = new Measurement({
    view: view,
    activeTool: "distance"
  });
  view.ui.add(measurement, "top-right");

  map.add(graphicLayer);
});