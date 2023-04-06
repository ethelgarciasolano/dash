var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Mapa Interactivo',
            'type': 'base',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
             attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var format_COORDENADAS_2 = new ol.format.GeoJSON();
        var features_COORDENADAS_2 = format_COORDENADAS_2.readFeatures(json_luruaco, 
                    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_COORDENADAS_2 = new ol.source.Vector({
            attributions: ' ',
        });
        jsonSource_COORDENADAS_2.addFeatures(features_COORDENADAS_2);
        var lyr_COORDENADAS_2 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_COORDENADAS_2, 
                        style: style_COORDENADAS_2,
                        interactive: true,
                        title: '<img src="./static/images/COORDENADAS_2.png" style="width:15px"/> Luruaco'
                    });

                
        var format_COORDENADAS_3 = new ol.format.GeoJSON();
        var features_COORDENADAS_3 = format_COORDENADAS_3.readFeatures(json_candelaria, 
                    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_COORDENADAS_3 = new ol.source.Vector({
            attributions: ' ',
        });
        jsonSource_COORDENADAS_3.addFeatures(features_COORDENADAS_3);
        var lyr_COORDENADAS_3 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_COORDENADAS_3, 
                        style: style_COORDENADAS_3,
                        interactive: true,
                        title: '<img src="./static/images/COORDENADAS_3.png" style="width:15px"/> Candelaria'
                    });
        

                        
        var format_COORDENADAS_4 = new ol.format.GeoJSON();
        var features_COORDENADAS_4 = format_COORDENADAS_4.readFeatures(json_ponedera, 
                    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_COORDENADAS_4 = new ol.source.Vector({
            attributions: ' ',
        });
        jsonSource_COORDENADAS_4.addFeatures(features_COORDENADAS_4);
        var lyr_COORDENADAS_4 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_COORDENADAS_4, 
                        style: style_COORDENADAS_4,
                        interactive: true,
                        title: '<img src="./static/images/COORDENADAS_4.png" style="width:15px"/> Ponedera'
                    });
                

        var format_COORDENADAS_5 = new ol.format.GeoJSON();
        var features_COORDENADAS_5 = format_COORDENADAS_5.readFeatures(json_santotomas, 
                    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_COORDENADAS_5 = new ol.source.Vector({
            attributions: ' ',
        });
        jsonSource_COORDENADAS_5.addFeatures(features_COORDENADAS_5);
        var lyr_COORDENADAS_5 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_COORDENADAS_5, 
                        style: style_COORDENADAS_5,
                        interactive: true,
                        title: '<img src="./static/images/COORDENADAS_5.png" style="width:15px"/> Santo tomás'
                    });


                                        
        var format_COORDENADAS_6 = new ol.format.GeoJSON();
        var features_COORDENADAS_6 = format_COORDENADAS_6.readFeatures(json_sabanagrande, 
                    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_COORDENADAS_6 = new ol.source.Vector({
            attributions: ' ',
        });
        jsonSource_COORDENADAS_6.addFeatures(features_COORDENADAS_6);
        var lyr_COORDENADAS_6 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_COORDENADAS_6, 
                        style: style_COORDENADAS_6,
                        interactive: true,
                        title: '<img src="./static/images/COORDENADAS_6.png" style="width:15px"/> Sabanagrande'
                    });


                    var format_COORDENADAS_7 = new ol.format.GeoJSON();
                    var features_COORDENADAS_7 = format_COORDENADAS_7.readFeatures(json_manati, 
                                {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
                    var jsonSource_COORDENADAS_7 = new ol.source.Vector({
                        attributions: ' ',
                    });
                    jsonSource_COORDENADAS_7.addFeatures(features_COORDENADAS_7);
                    var lyr_COORDENADAS_7 = new ol.layer.Vector({
                                    declutter: true,
                                    source:jsonSource_COORDENADAS_7, 
                                    style: style_COORDENADAS_7,
                                    interactive: true,
                                    title: '<img src="./static/images/COORDENADAS_7.png" style="width:15px"/> Manatí'
                                });
lyr_OpenStreetMap_0.setVisible(true);lyr_COORDENADAS_2.setVisible(true);lyr_COORDENADAS_3.setVisible(true);lyr_COORDENADAS_4.setVisible(true);lyr_COORDENADAS_5.setVisible(true);lyr_COORDENADAS_6.setVisible(true);lyr_COORDENADAS_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COORDENADAS_2,lyr_COORDENADAS_3,lyr_COORDENADAS_4,lyr_COORDENADAS_5,lyr_COORDENADAS_6,lyr_COORDENADAS_7]

lyr_COORDENADAS_2.set('fieldAliases', {'OBJECTID':'OBJECTID','Municipio': 'Municipio', 'Nombre': 'Nombre','Modelo':'Modelo' });
lyr_COORDENADAS_2.set('fieldImages', {'OBJECTID': '','Municipio': '', 'Nombre': '', 'Modelo':''});
lyr_COORDENADAS_2.set('fieldLabels', {'OBJECTID': 'inline label','Municipio': 'inline label', 'Nombre': 'inline label', 'Modelo':'inline label'});
lyr_COORDENADAS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';});
lyr_COORDENADAS_3.set('fieldAliases', {'OBJECTID':'OBJECTID','Municipio': 'Municipio', 'Nombre': 'Nombre','Modelo':'Modelo' });
lyr_COORDENADAS_3.set('fieldImages', {'OBJECTID': '','Municipio': '', 'Nombre': '', 'Modelo':''});
lyr_COORDENADAS_3.set('fieldLabels', {'OBJECTID': 'inline label','Municipio': 'inline label', 'Nombre': 'inline label', 'Modelo':'inline label'});
lyr_COORDENADAS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';});

lyr_COORDENADAS_4.set('fieldAliases', {'OBJECTID':'OBJECTID','Municipio': 'Municipio', 'Nombre': 'Nombre','Modelo':'Modelo' });
lyr_COORDENADAS_4.set('fieldImages', {'OBJECTID': '','Municipio': '', 'Nombre': '', 'Modelo':''});
lyr_COORDENADAS_4.set('fieldLabels', {'OBJECTID': 'inline label','Municipio': 'inline label', 'Nombre': 'inline label', 'Modelo':'inline label'});
lyr_COORDENADAS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';});

    lyr_COORDENADAS_5.set('fieldAliases', {'OBJECTID':'OBJECTID','Municipio': 'Municipio', 'Nombre': 'Nombre','Modelo':'Modelo' });
    lyr_COORDENADAS_5.set('fieldImages', {'OBJECTID': '','Municipio': '', 'Nombre': '', 'Modelo':''});
    lyr_COORDENADAS_5.set('fieldLabels', {'OBJECTID': 'inline label','Municipio': 'inline label', 'Nombre': 'inline label', 'Modelo':'inline label'});
    lyr_COORDENADAS_5.on('precompose', function(evt) {
        evt.context.globalCompositeOperation = 'normal';});
    

    lyr_COORDENADAS_6.set('fieldAliases', {'OBJECTID':'OBJECTID','Municipio': 'Municipio', 'Nombre': 'Nombre','Modelo':'Modelo' });
    lyr_COORDENADAS_6.set('fieldImages', {'OBJECTID': '','Municipio': '', 'Nombre': '', 'Modelo':''});
    lyr_COORDENADAS_6.set('fieldLabels', {'OBJECTID': 'inline label','Municipio': 'inline label', 'Nombre': 'inline label', 'Modelo':'inline label'});
    lyr_COORDENADAS_6.on('precompose', function(evt) {
        evt.context.globalCompositeOperation = 'normal';});
    

        lyr_COORDENADAS_7.set('fieldAliases', {'OBJECTID':'OBJECTID','Municipio': 'Municipio', 'Nombre': 'Nombre','Modelo':'Modelo' });
        lyr_COORDENADAS_7.set('fieldImages', {'OBJECTID': '','Municipio': '', 'Nombre': '', 'Modelo':''});
        lyr_COORDENADAS_7.set('fieldLabels', {'OBJECTID': 'inline label','Municipio': 'inline label', 'Nombre': 'inline label', 'Modelo':'inline label'});
        lyr_COORDENADAS_7.on('precompose', function(evt) {
            evt.context.globalCompositeOperation = 'normal';});
        