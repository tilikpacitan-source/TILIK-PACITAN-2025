ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriStandard_3 = new ol.layer.Tile({
            'title': 'Esri Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KawasanWisataSitusPacitan_4 = new ol.format.GeoJSON();
var features_KawasanWisataSitusPacitan_4 = format_KawasanWisataSitusPacitan_4.readFeatures(json_KawasanWisataSitusPacitan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataSitusPacitan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataSitusPacitan_4.addFeatures(features_KawasanWisataSitusPacitan_4);
var lyr_KawasanWisataSitusPacitan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataSitusPacitan_4, 
                style: style_KawasanWisataSitusPacitan_4,
                popuplayertitle: 'Kawasan Wisata Situs Pacitan ',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataSitusPacitan_4.png" /> Kawasan Wisata Situs Pacitan '
            });
var format_KawasanSitusPacitan_5 = new ol.format.GeoJSON();
var features_KawasanSitusPacitan_5 = format_KawasanSitusPacitan_5.readFeatures(json_KawasanSitusPacitan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanSitusPacitan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanSitusPacitan_5.addFeatures(features_KawasanSitusPacitan_5);
var lyr_KawasanSitusPacitan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanSitusPacitan_5, 
                style: style_KawasanSitusPacitan_5,
                popuplayertitle: 'Kawasan Situs Pacitan',
                interactive: true,
    title: 'Kawasan Situs Pacitan<br />\
    <img src="styles/legend/KawasanSitusPacitan_5_0.png" /> GOA GONG<br />\
    <img src="styles/legend/KawasanSitusPacitan_5_1.png" /> GOA TABUHAN<br />\
    <img src="styles/legend/KawasanSitusPacitan_5_2.png" /> MUSEUM SONG TERUS<br />\
    <img src="styles/legend/KawasanSitusPacitan_5_3.png" /> TELAGA GUYANG WARAK<br />' });
var format_KompleksWisataRaudanWatukarungAR_6 = new ol.format.GeoJSON();
var features_KompleksWisataRaudanWatukarungAR_6 = format_KompleksWisataRaudanWatukarungAR_6.readFeatures(json_KompleksWisataRaudanWatukarungAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksWisataRaudanWatukarungAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksWisataRaudanWatukarungAR_6.addFeatures(features_KompleksWisataRaudanWatukarungAR_6);
var lyr_KompleksWisataRaudanWatukarungAR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksWisataRaudanWatukarungAR_6, 
                style: style_KompleksWisataRaudanWatukarungAR_6,
                popuplayertitle: 'Kompleks Wisata Rau dan Watukarung AR',
                interactive: false,
                title: '<img src="styles/legend/KompleksWisataRaudanWatukarungAR_6.png" /> Kompleks Wisata Rau dan Watukarung AR'
            });
var format_KompleksRaudanWatukarung_7 = new ol.format.GeoJSON();
var features_KompleksRaudanWatukarung_7 = format_KompleksRaudanWatukarung_7.readFeatures(json_KompleksRaudanWatukarung_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksRaudanWatukarung_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksRaudanWatukarung_7.addFeatures(features_KompleksRaudanWatukarung_7);
var lyr_KompleksRaudanWatukarung_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksRaudanWatukarung_7, 
                style: style_KompleksRaudanWatukarung_7,
                popuplayertitle: 'Kompleks Rau dan Watukarung',
                interactive: true,
    title: 'Kompleks Rau dan Watukarung<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_7_0.png" /> KALI COKEL<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_7_1.png" /> PANTAI BANTENG MATI<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_7_2.png" /> PANTAI BERCAK<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_7_3.png" /> PANTAI KASAP<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_7_4.png" /> PANTAI SRAU<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_7_5.png" /> PANTAI WATUKARUNG<br />' });
var format_KawasanWisataTelukPacitan_8 = new ol.format.GeoJSON();
var features_KawasanWisataTelukPacitan_8 = format_KawasanWisataTelukPacitan_8.readFeatures(json_KawasanWisataTelukPacitan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataTelukPacitan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataTelukPacitan_8.addFeatures(features_KawasanWisataTelukPacitan_8);
var lyr_KawasanWisataTelukPacitan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataTelukPacitan_8, 
                style: style_KawasanWisataTelukPacitan_8,
                popuplayertitle: 'Kawasan Wisata Teluk Pacitan',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataTelukPacitan_8.png" /> Kawasan Wisata Teluk Pacitan'
            });
var format_KawasanTelukPacitan_9 = new ol.format.GeoJSON();
var features_KawasanTelukPacitan_9 = format_KawasanTelukPacitan_9.readFeatures(json_KawasanTelukPacitan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTelukPacitan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTelukPacitan_9.addFeatures(features_KawasanTelukPacitan_9);
var lyr_KawasanTelukPacitan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTelukPacitan_9, 
                style: style_KawasanTelukPacitan_9,
                popuplayertitle: 'Kawasan Teluk Pacitan',
                interactive: true,
    title: 'Kawasan Teluk Pacitan<br />\
    <img src="styles/legend/KawasanTelukPacitan_9_0.png" /> PANTAI PANCER DORR<br />\
    <img src="styles/legend/KawasanTelukPacitan_9_1.png" /> PANTAI TELENG RIA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_EsriStandard_3.setVisible(true);lyr_KawasanWisataSitusPacitan_4.setVisible(true);lyr_KawasanSitusPacitan_5.setVisible(true);lyr_KompleksWisataRaudanWatukarungAR_6.setVisible(true);lyr_KompleksRaudanWatukarung_7.setVisible(true);lyr_KawasanWisataTelukPacitan_8.setVisible(true);lyr_KawasanTelukPacitan_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_EsriStandard_3,lyr_KawasanWisataSitusPacitan_4,lyr_KawasanSitusPacitan_5,lyr_KompleksWisataRaudanWatukarungAR_6,lyr_KompleksRaudanWatukarung_7,lyr_KawasanWisataTelukPacitan_8,lyr_KawasanTelukPacitan_9];
lyr_KawasanWisataSitusPacitan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanSitusPacitan_5.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KompleksWisataRaudanWatukarungAR_6.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KompleksRaudanWatukarung_7.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataTelukPacitan_8.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanTelukPacitan_9.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataSitusPacitan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanSitusPacitan_5.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KompleksWisataRaudanWatukarungAR_6.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KompleksRaudanWatukarung_7.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataTelukPacitan_8.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanTelukPacitan_9.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataSitusPacitan_4.set('fieldLabels', {'OBJECTID': 'no label', 'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanSitusPacitan_5.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KompleksWisataRaudanWatukarungAR_6.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KompleksRaudanWatukarung_7.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KawasanWisataTelukPacitan_8.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanTelukPacitan_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', });
lyr_KawasanTelukPacitan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});