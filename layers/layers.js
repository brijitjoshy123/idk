var wms_layers = [];

var lyr_kxf_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "kxf",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/kxf_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8529903.446644, 1036665.098956, 8618188.249621, 1159769.653623]
                            })
                        });
var lyr_fhd_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "fhd",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fhd_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8529903.446644, 1036665.098956, 8618188.249621, 1159769.653623]
                            })
                        });

lyr_kxf_0.setVisible(true);lyr_fhd_1.setVisible(true);
var layersList = [lyr_kxf_0,lyr_fhd_1];
