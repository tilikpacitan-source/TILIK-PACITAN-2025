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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriStandard_2 = new ol.layer.Tile({
            'title': 'Esri Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KawasanWisataSitusPacitan_3 = new ol.format.GeoJSON();
var features_KawasanWisataSitusPacitan_3 = format_KawasanWisataSitusPacitan_3.readFeatures(json_KawasanWisataSitusPacitan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataSitusPacitan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataSitusPacitan_3.addFeatures(features_KawasanWisataSitusPacitan_3);
var lyr_KawasanWisataSitusPacitan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataSitusPacitan_3, 
                style: style_KawasanWisataSitusPacitan_3,
                popuplayertitle: 'Kawasan Wisata Situs Pacitan ',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataSitusPacitan_3.png" /> Kawasan Wisata Situs Pacitan '
            });
var format_KawasanSitusPacitan_4 = new ol.format.GeoJSON();
var features_KawasanSitusPacitan_4 = format_KawasanSitusPacitan_4.readFeatures(json_KawasanSitusPacitan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanSitusPacitan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanSitusPacitan_4.addFeatures(features_KawasanSitusPacitan_4);
var lyr_KawasanSitusPacitan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanSitusPacitan_4, 
                style: style_KawasanSitusPacitan_4,
                popuplayertitle: 'Kawasan Situs Pacitan',
                interactive: true,
    title: 'Kawasan Situs Pacitan<br />\
    <img src="styles/legend/KawasanSitusPacitan_4_0.png" /> GOA GONG<br />\
    <img src="styles/legend/KawasanSitusPacitan_4_1.png" /> GOA TABUHAN<br />\
    <img src="styles/legend/KawasanSitusPacitan_4_2.png" /> MUSEUM SONG TERUS<br />\
    <img src="styles/legend/KawasanSitusPacitan_4_3.png" /> TELAGA GUYANG WARAK<br />' });
var format_KompleksWisataRaudanWatukarung_5 = new ol.format.GeoJSON();
var features_KompleksWisataRaudanWatukarung_5 = format_KompleksWisataRaudanWatukarung_5.readFeatures(json_KompleksWisataRaudanWatukarung_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksWisataRaudanWatukarung_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksWisataRaudanWatukarung_5.addFeatures(features_KompleksWisataRaudanWatukarung_5);
var lyr_KompleksWisataRaudanWatukarung_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksWisataRaudanWatukarung_5, 
                style: style_KompleksWisataRaudanWatukarung_5,
                popuplayertitle: 'Kompleks Wisata Rau dan Watukarung',
                interactive: false,
                title: '<img src="styles/legend/KompleksWisataRaudanWatukarung_5.png" /> Kompleks Wisata Rau dan Watukarung'
            });
var format_KompleksRaudanWatukarung_6 = new ol.format.GeoJSON();
var features_KompleksRaudanWatukarung_6 = format_KompleksRaudanWatukarung_6.readFeatures(json_KompleksRaudanWatukarung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksRaudanWatukarung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksRaudanWatukarung_6.addFeatures(features_KompleksRaudanWatukarung_6);
var lyr_KompleksRaudanWatukarung_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksRaudanWatukarung_6, 
                style: style_KompleksRaudanWatukarung_6,
                popuplayertitle: 'Kompleks Rau dan Watukarung',
                interactive: true,
    title: 'Kompleks Rau dan Watukarung<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_6_0.png" /> KALI COKEL<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_6_1.png" /> PANTAI BANTENG MATI<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_6_2.png" /> PANTAI BERCAK<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_6_3.png" /> PANTAI KASAP<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_6_4.png" /> PANTAI SRAU<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_6_5.png" /> PANTAI WATUKARUNG<br />' });
var format_KawasanWisataTelukPacitan_7 = new ol.format.GeoJSON();
var features_KawasanWisataTelukPacitan_7 = format_KawasanWisataTelukPacitan_7.readFeatures(json_KawasanWisataTelukPacitan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataTelukPacitan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataTelukPacitan_7.addFeatures(features_KawasanWisataTelukPacitan_7);
var lyr_KawasanWisataTelukPacitan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataTelukPacitan_7, 
                style: style_KawasanWisataTelukPacitan_7,
                popuplayertitle: 'Kawasan Wisata Teluk Pacitan',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataTelukPacitan_7.png" /> Kawasan Wisata Teluk Pacitan'
            });
var format_KawasanTelukPacitan_8 = new ol.format.GeoJSON();
var features_KawasanTelukPacitan_8 = format_KawasanTelukPacitan_8.readFeatures(json_KawasanTelukPacitan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTelukPacitan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTelukPacitan_8.addFeatures(features_KawasanTelukPacitan_8);
var lyr_KawasanTelukPacitan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTelukPacitan_8, 
                style: style_KawasanTelukPacitan_8,
                popuplayertitle: 'Kawasan Teluk Pacitan',
                interactive: true,
    title: 'Kawasan Teluk Pacitan<br />\
    <img src="styles/legend/KawasanTelukPacitan_8_0.png" /> PANTAI PANCER DORR<br />\
    <img src="styles/legend/KawasanTelukPacitan_8_1.png" /> PANTAI TELENG RIA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_EsriStandard_2.setVisible(true);lyr_KawasanWisataSitusPacitan_3.setVisible(true);lyr_KawasanSitusPacitan_4.setVisible(true);lyr_KompleksWisataRaudanWatukarung_5.setVisible(true);lyr_KompleksRaudanWatukarung_6.setVisible(true);lyr_KawasanWisataTelukPacitan_7.setVisible(true);lyr_KawasanTelukPacitan_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_EsriStandard_2,lyr_KawasanWisataSitusPacitan_3,lyr_KawasanSitusPacitan_4,lyr_KompleksWisataRaudanWatukarung_5,lyr_KompleksRaudanWatukarung_6,lyr_KawasanWisataTelukPacitan_7,lyr_KawasanTelukPacitan_8];
lyr_KawasanWisataSitusPacitan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanSitusPacitan_4.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KompleksWisataRaudanWatukarung_5.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KompleksRaudanWatukarung_6.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataTelukPacitan_7.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanTelukPacitan_8.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataSitusPacitan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanSitusPacitan_4.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KompleksWisataRaudanWatukarung_5.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KompleksRaudanWatukarung_6.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataTelukPacitan_7.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanTelukPacitan_8.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataSitusPacitan_3.set('fieldLabels', {'OBJECTID': 'no label', 'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanSitusPacitan_4.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KompleksWisataRaudanWatukarung_5.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KompleksRaudanWatukarung_6.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KawasanWisataTelukPacitan_7.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanTelukPacitan_8.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KawasanTelukPacitan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});