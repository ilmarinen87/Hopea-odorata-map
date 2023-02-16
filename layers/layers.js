ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([97.955357, 13.664488, 112.785465, 22.693840]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });
var lyr_laos_dem_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "laos_dem",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/laos_dem_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.081111, 13.908194, 107.635278, 22.510278]
                            })
                        });
var lyr_elevation_below_300m_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "elevation_below_300m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/elevation_below_300m_2.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.081111, 13.908194, 107.635278, 22.510278]
                            })
                        });
var lyr_average_temperature_below_25C_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "average_temperature_below_25C",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/average_temperature_below_25C_3.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.081111, 13.908194, 107.635278, 22.510278]
                            })
                        });
var lyr_protected_areas_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "protected_areas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/protected_areas_4.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.081111, 13.908194, 107.635278, 22.510278]
                            })
                        });
var lyr_deforestation_20002019_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "deforestation_(2000-2019)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/deforestation_20002019_5.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.079028, 13.908194, 107.635278, 22.512361]
                            })
                        });
var lyr_Hopea_odorata_areas_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hopea_odorata_areas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hopea_odorata_areas_6.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.081111, 13.908194, 107.635278, 22.510278]
                            })
                        });
var lyr_Hopea_odorata_near_river_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hopea_odorata_near_river",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hopea_odorata_near_river_7.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [100.081111, 13.908194, 107.635278, 22.510278]
                            })
                        });
var format_major_rivers_8 = new ol.format.GeoJSON();
var features_major_rivers_8 = format_major_rivers_8.readFeatures(json_major_rivers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_major_rivers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_major_rivers_8.addFeatures(features_major_rivers_8);
var lyr_major_rivers_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_major_rivers_8, 
                style: style_major_rivers_8,
                interactive: true,
    title: 'major_rivers<br />\
    <img src="styles/legend/major_rivers_8_0.png" /> 1 - 1<br />\
    <img src="styles/legend/major_rivers_8_1.png" /> 1 - 1<br />\
    <img src="styles/legend/major_rivers_8_2.png" /> 1 - 2<br />\
    <img src="styles/legend/major_rivers_8_3.png" /> 2 - 3<br />\
    <img src="styles/legend/major_rivers_8_4.png" /> 3 - 6<br />'
        });
var format_lao_administrative_boundaries_9 = new ol.format.GeoJSON();
var features_lao_administrative_boundaries_9 = format_lao_administrative_boundaries_9.readFeatures(json_lao_administrative_boundaries_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lao_administrative_boundaries_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lao_administrative_boundaries_9.addFeatures(features_lao_administrative_boundaries_9);
var lyr_lao_administrative_boundaries_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lao_administrative_boundaries_9, 
                style: style_lao_administrative_boundaries_9,
                interactive: false,
                title: '<img src="styles/legend/lao_administrative_boundaries_9.png" /> lao_administrative_boundaries'
            });

lyr_StamenWatercolor_0.setVisible(true);lyr_laos_dem_1.setVisible(true);lyr_elevation_below_300m_2.setVisible(false);lyr_average_temperature_below_25C_3.setVisible(false);lyr_protected_areas_4.setVisible(false);lyr_deforestation_20002019_5.setVisible(false);lyr_Hopea_odorata_areas_6.setVisible(false);lyr_Hopea_odorata_near_river_7.setVisible(false);lyr_major_rivers_8.setVisible(true);lyr_lao_administrative_boundaries_9.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_laos_dem_1,lyr_elevation_below_300m_2,lyr_average_temperature_below_25C_3,lyr_protected_areas_4,lyr_deforestation_20002019_5,lyr_Hopea_odorata_areas_6,lyr_Hopea_odorata_near_river_7,lyr_major_rivers_8,lyr_lao_administrative_boundaries_9];
lyr_major_rivers_8.set('fieldAliases', {'ARCID': 'ARCID', 'FROM_NODE': 'FROM_NODE', 'TO_NODE': 'TO_NODE', 'Sub_Bas': 'Sub_Bas', 'Maj_Bas': 'Maj_Bas', 'To_Bas': 'To_Bas', 'Sub_Name': 'Sub_Name', 'Maj_Name': 'Maj_Name', 'Sub_Area': 'Sub_Area', 'Maj_Area': 'Maj_Area', 'Strahler': 'Strahler', 'GMS': 'GMS', });
lyr_lao_administrative_boundaries_9.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_LO': 'ADM1_LO', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1LO': 'ADM1ALT1LO', 'ADM1ALT2LO': 'ADM1ALT2LO', 'ADM0_EN': 'ADM0_EN', 'ADM0_LO': 'ADM0_LO', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_major_rivers_8.set('fieldImages', {'ARCID': 'Range', 'FROM_NODE': 'Range', 'TO_NODE': 'Range', 'Sub_Bas': 'Range', 'Maj_Bas': 'Range', 'To_Bas': 'Range', 'Sub_Name': 'TextEdit', 'Maj_Name': 'TextEdit', 'Sub_Area': 'Range', 'Maj_Area': 'Range', 'Strahler': 'Range', 'GMS': 'Range', });
lyr_lao_administrative_boundaries_9.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_LO': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1LO': 'TextEdit', 'ADM1ALT2LO': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_LO': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_major_rivers_8.set('fieldLabels', {'ARCID': 'no label', 'FROM_NODE': 'no label', 'TO_NODE': 'no label', 'Sub_Bas': 'no label', 'Maj_Bas': 'no label', 'To_Bas': 'no label', 'Sub_Name': 'no label', 'Maj_Name': 'no label', 'Sub_Area': 'no label', 'Maj_Area': 'no label', 'Strahler': 'no label', 'GMS': 'no label', });
lyr_lao_administrative_boundaries_9.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_LO': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1LO': 'no label', 'ADM1ALT2LO': 'no label', 'ADM0_EN': 'no label', 'ADM0_LO': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_lao_administrative_boundaries_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});