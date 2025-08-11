ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KawasanWisataTelukPacitan_1 = new ol.format.GeoJSON();
var features_KawasanWisataTelukPacitan_1 = format_KawasanWisataTelukPacitan_1.readFeatures(json_KawasanWisataTelukPacitan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataTelukPacitan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataTelukPacitan_1.addFeatures(features_KawasanWisataTelukPacitan_1);
var lyr_KawasanWisataTelukPacitan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataTelukPacitan_1, 
                style: style_KawasanWisataTelukPacitan_1,
                popuplayertitle: 'Kawasan Wisata Teluk Pacitan',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataTelukPacitan_1.png" /> Kawasan Wisata Teluk Pacitan'
            });
var format_KawasanTelukPacitan_2 = new ol.format.GeoJSON();
var features_KawasanTelukPacitan_2 = format_KawasanTelukPacitan_2.readFeatures(json_KawasanTelukPacitan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTelukPacitan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTelukPacitan_2.addFeatures(features_KawasanTelukPacitan_2);
var lyr_KawasanTelukPacitan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTelukPacitan_2, 
                style: style_KawasanTelukPacitan_2,
                popuplayertitle: 'Kawasan Teluk Pacitan',
                interactive: true,
    title: 'Kawasan Teluk Pacitan<br />\
    <img src="styles/legend/KawasanTelukPacitan_2_0.png" /> PANTAI PANCER DORR<br />\
    <img src="styles/legend/KawasanTelukPacitan_2_1.png" /> PANTAI TELENG RIA<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_KawasanWisataTelukPacitan_1.setVisible(true);lyr_KawasanTelukPacitan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KawasanWisataTelukPacitan_1,lyr_KawasanTelukPacitan_2];
lyr_KawasanWisataTelukPacitan_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanTelukPacitan_2.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataTelukPacitan_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanTelukPacitan_2.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataTelukPacitan_1.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanTelukPacitan_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', });
lyr_KawasanTelukPacitan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});