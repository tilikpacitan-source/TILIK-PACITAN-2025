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
var format_JalurTilikPacitan_3 = new ol.format.GeoJSON();
var features_JalurTilikPacitan_3 = format_JalurTilikPacitan_3.readFeatures(json_JalurTilikPacitan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurTilikPacitan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurTilikPacitan_3.addFeatures(features_JalurTilikPacitan_3);
var lyr_JalurTilikPacitan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurTilikPacitan_3, 
                style: style_JalurTilikPacitan_3,
                popuplayertitle: 'Jalur Tilik Pacitan',
                interactive: false,
                title: '<img src="styles/legend/JalurTilikPacitan_3.png" /> Jalur Tilik Pacitan'
            });
var format_JalurTilikPacitan_4 = new ol.format.GeoJSON();
var features_JalurTilikPacitan_4 = format_JalurTilikPacitan_4.readFeatures(json_JalurTilikPacitan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurTilikPacitan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurTilikPacitan_4.addFeatures(features_JalurTilikPacitan_4);
var lyr_JalurTilikPacitan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurTilikPacitan_4, 
                style: style_JalurTilikPacitan_4,
                popuplayertitle: 'Jalur Tilik Pacitan',
                interactive: false,
                title: '<img src="styles/legend/JalurTilikPacitan_4.png" /> Jalur Tilik Pacitan'
            });
var format_KompleksWisataBuatanPacitan_5 = new ol.format.GeoJSON();
var features_KompleksWisataBuatanPacitan_5 = format_KompleksWisataBuatanPacitan_5.readFeatures(json_KompleksWisataBuatanPacitan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksWisataBuatanPacitan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksWisataBuatanPacitan_5.addFeatures(features_KompleksWisataBuatanPacitan_5);
var lyr_KompleksWisataBuatanPacitan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksWisataBuatanPacitan_5, 
                style: style_KompleksWisataBuatanPacitan_5,
                popuplayertitle: 'Kompleks Wisata Buatan Pacitan',
                interactive: false,
                title: '<img src="styles/legend/KompleksWisataBuatanPacitan_5.png" /> Kompleks Wisata Buatan Pacitan'
            });
var format_KompleksWisataBuatanPacitan_6 = new ol.format.GeoJSON();
var features_KompleksWisataBuatanPacitan_6 = format_KompleksWisataBuatanPacitan_6.readFeatures(json_KompleksWisataBuatanPacitan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksWisataBuatanPacitan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksWisataBuatanPacitan_6.addFeatures(features_KompleksWisataBuatanPacitan_6);
var lyr_KompleksWisataBuatanPacitan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksWisataBuatanPacitan_6, 
                style: style_KompleksWisataBuatanPacitan_6,
                popuplayertitle: 'Kompleks Wisata Buatan Pacitan',
                interactive: true,
    title: 'Kompleks Wisata Buatan Pacitan<br />\
    <img src="styles/legend/KompleksWisataBuatanPacitan_6_0.png" /> ALUN - ALUN PACITAN<br />\
    <img src="styles/legend/KompleksWisataBuatanPacitan_6_1.png" /> MUSEUM DAN GALERI SB - ANI PACITAN<br />' });
var format_KawasanWisataSitusPacitan_7 = new ol.format.GeoJSON();
var features_KawasanWisataSitusPacitan_7 = format_KawasanWisataSitusPacitan_7.readFeatures(json_KawasanWisataSitusPacitan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataSitusPacitan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataSitusPacitan_7.addFeatures(features_KawasanWisataSitusPacitan_7);
var lyr_KawasanWisataSitusPacitan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataSitusPacitan_7, 
                style: style_KawasanWisataSitusPacitan_7,
                popuplayertitle: 'Kawasan Wisata Situs Pacitan ',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataSitusPacitan_7.png" /> Kawasan Wisata Situs Pacitan '
            });
var format_KawasanSitusPacitan_8 = new ol.format.GeoJSON();
var features_KawasanSitusPacitan_8 = format_KawasanSitusPacitan_8.readFeatures(json_KawasanSitusPacitan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanSitusPacitan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanSitusPacitan_8.addFeatures(features_KawasanSitusPacitan_8);
var lyr_KawasanSitusPacitan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanSitusPacitan_8, 
                style: style_KawasanSitusPacitan_8,
                popuplayertitle: 'Kawasan Situs Pacitan',
                interactive: true,
    title: 'Kawasan Situs Pacitan<br />\
    <img src="styles/legend/KawasanSitusPacitan_8_0.png" /> GOA GONG<br />\
    <img src="styles/legend/KawasanSitusPacitan_8_1.png" /> GOA TABUHAN<br />\
    <img src="styles/legend/KawasanSitusPacitan_8_2.png" /> MUSEUM SONG TERUS<br />\
    <img src="styles/legend/KawasanSitusPacitan_8_3.png" /> TELAGA GUYANG WARAK<br />' });
var format_KompleksWisataRaudanWatukarung_9 = new ol.format.GeoJSON();
var features_KompleksWisataRaudanWatukarung_9 = format_KompleksWisataRaudanWatukarung_9.readFeatures(json_KompleksWisataRaudanWatukarung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksWisataRaudanWatukarung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksWisataRaudanWatukarung_9.addFeatures(features_KompleksWisataRaudanWatukarung_9);
var lyr_KompleksWisataRaudanWatukarung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksWisataRaudanWatukarung_9, 
                style: style_KompleksWisataRaudanWatukarung_9,
                popuplayertitle: 'Kompleks Wisata Rau dan Watukarung',
                interactive: false,
                title: '<img src="styles/legend/KompleksWisataRaudanWatukarung_9.png" /> Kompleks Wisata Rau dan Watukarung'
            });
var format_KompleksRaudanWatukarung_10 = new ol.format.GeoJSON();
var features_KompleksRaudanWatukarung_10 = format_KompleksRaudanWatukarung_10.readFeatures(json_KompleksRaudanWatukarung_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompleksRaudanWatukarung_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompleksRaudanWatukarung_10.addFeatures(features_KompleksRaudanWatukarung_10);
var lyr_KompleksRaudanWatukarung_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompleksRaudanWatukarung_10, 
                style: style_KompleksRaudanWatukarung_10,
                popuplayertitle: 'Kompleks Rau dan Watukarung',
                interactive: true,
    title: 'Kompleks Rau dan Watukarung<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_10_0.png" /> KALI COKEL<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_10_1.png" /> PANTAI BANTENG MATI<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_10_2.png" /> PANTAI BERCAK<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_10_3.png" /> PANTAI KASAP<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_10_4.png" /> PANTAI SRAU<br />\
    <img src="styles/legend/KompleksRaudanWatukarung_10_5.png" /> PANTAI WATUKARUNG<br />' });
var format_KawasanWisataTelukPacitan_11 = new ol.format.GeoJSON();
var features_KawasanWisataTelukPacitan_11 = format_KawasanWisataTelukPacitan_11.readFeatures(json_KawasanWisataTelukPacitan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanWisataTelukPacitan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanWisataTelukPacitan_11.addFeatures(features_KawasanWisataTelukPacitan_11);
var lyr_KawasanWisataTelukPacitan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanWisataTelukPacitan_11, 
                style: style_KawasanWisataTelukPacitan_11,
                popuplayertitle: 'Kawasan Wisata Teluk Pacitan',
                interactive: false,
                title: '<img src="styles/legend/KawasanWisataTelukPacitan_11.png" /> Kawasan Wisata Teluk Pacitan'
            });
var format_KawasanTelukPacitan_12 = new ol.format.GeoJSON();
var features_KawasanTelukPacitan_12 = format_KawasanTelukPacitan_12.readFeatures(json_KawasanTelukPacitan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTelukPacitan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTelukPacitan_12.addFeatures(features_KawasanTelukPacitan_12);
var lyr_KawasanTelukPacitan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTelukPacitan_12, 
                style: style_KawasanTelukPacitan_12,
                popuplayertitle: 'Kawasan Teluk Pacitan',
                interactive: true,
    title: 'Kawasan Teluk Pacitan<br />\
    <img src="styles/legend/KawasanTelukPacitan_12_0.png" /> PANTAI PANCER DORR<br />\
    <img src="styles/legend/KawasanTelukPacitan_12_1.png" /> PANTAI TELENG RIA<br />' });
var group_JalurTilikPacitan = new ol.layer.Group({
                                layers: [lyr_JalurTilikPacitan_3,lyr_JalurTilikPacitan_4,],
                                fold: 'close',
                                title: 'Jalur Tilik Pacitan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_EsriStandard_2.setVisible(true);lyr_JalurTilikPacitan_3.setVisible(true);lyr_JalurTilikPacitan_4.setVisible(true);lyr_KompleksWisataBuatanPacitan_5.setVisible(true);lyr_KompleksWisataBuatanPacitan_6.setVisible(true);lyr_KawasanWisataSitusPacitan_7.setVisible(true);lyr_KawasanSitusPacitan_8.setVisible(true);lyr_KompleksWisataRaudanWatukarung_9.setVisible(true);lyr_KompleksRaudanWatukarung_10.setVisible(true);lyr_KawasanWisataTelukPacitan_11.setVisible(true);lyr_KawasanTelukPacitan_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_EsriStandard_2,group_JalurTilikPacitan,lyr_KompleksWisataBuatanPacitan_5,lyr_KompleksWisataBuatanPacitan_6,lyr_KawasanWisataSitusPacitan_7,lyr_KawasanSitusPacitan_8,lyr_KompleksWisataRaudanWatukarung_9,lyr_KompleksRaudanWatukarung_10,lyr_KawasanWisataTelukPacitan_11,lyr_KawasanTelukPacitan_12];
lyr_JalurTilikPacitan_3.set('fieldAliases', {'id': 'id', });
lyr_JalurTilikPacitan_4.set('fieldAliases', {'id': 'id', });
lyr_KompleksWisataBuatanPacitan_5.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KompleksWisataBuatanPacitan_6.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataSitusPacitan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanSitusPacitan_8.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KompleksWisataRaudanWatukarung_9.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KompleksRaudanWatukarung_10.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_KawasanWisataTelukPacitan_11.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_KawasanTelukPacitan_12.set('fieldAliases', {'Name': 'Name', 'Link': 'Link', 'Deskripsi': 'Deskripsi', });
lyr_JalurTilikPacitan_3.set('fieldImages', {'id': 'Range', });
lyr_JalurTilikPacitan_4.set('fieldImages', {'id': 'Range', });
lyr_KompleksWisataBuatanPacitan_5.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KompleksWisataBuatanPacitan_6.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataSitusPacitan_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanSitusPacitan_8.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KompleksWisataRaudanWatukarung_9.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KompleksRaudanWatukarung_10.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_KawasanWisataTelukPacitan_11.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_KawasanTelukPacitan_12.set('fieldImages', {'Name': 'TextEdit', 'Link': 'ExternalResource', 'Deskripsi': 'TextEdit', });
lyr_JalurTilikPacitan_3.set('fieldLabels', {'id': 'no label', });
lyr_JalurTilikPacitan_4.set('fieldLabels', {'id': 'no label', });
lyr_KompleksWisataBuatanPacitan_5.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KompleksWisataBuatanPacitan_6.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KawasanWisataSitusPacitan_7.set('fieldLabels', {'OBJECTID': 'no label', 'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanSitusPacitan_8.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KompleksWisataRaudanWatukarung_9.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KompleksRaudanWatukarung_10.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KawasanWisataTelukPacitan_11.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_KawasanTelukPacitan_12.set('fieldLabels', {'Name': 'no label', 'Link': 'no label', 'Deskripsi': 'no label', });
lyr_KawasanTelukPacitan_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});