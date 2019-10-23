const assert = require('chai').assert;
const app = require('../index');

describe('Pruebas Caja Negra', function() {

    it('FiltrarConTextoNullLocacionAlajuelaProductsCopyFullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": null,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": [{
                    "location_id": "Alajuela, Costa Rica",
                    "name": "Kayak"
                },
                {
                    "location_id": "Grecia, Costa Rica",
                    "name": "Canopy"
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionNullProductsCopyFullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": true,
            "location_id": null,
            "productsCopy": [{
                    "location_id": "Alajuela, Costa Rica",
                    "name": "Kayak"
                },
                {
                    "location_id": "Grecia, Costa Rica",
                    "name": "Canopy"
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionNullProductsCopyFullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": false,
            "location_id": null,
            "productsCopy": [{
                    "location_id": "Alajuela, Costa Rica",
                    "name": "Kayak"
                },
                {
                    "location_id": "Grecia, Costa Rica",
                    "name": "Canopy"
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionAlajuelaProductsCopyNullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": true,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotOk(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionAlajuelaProductsCopyNullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotOk(app.getVmProducts());
    });
    it('FiltrarConTextoNullLocacionNullProductsCopyNullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": null,
            "location_id": null,
            "productsCopy": [{
                    "location_id": "Alajuela, Costa Rica",
                    "name": "Kayak"
                },
                {
                    "location_id": "Grecia, Costa Rica",
                    "name": "Canopy"
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionNullProductsCopyNullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": true,
            "location_id": null,
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    //Ignacio
    
    it('FiltrarConTextoFalseLocacionNullProductsCopyNullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": null,
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoNullLocacionAlajuelaProductsCopyNullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": null,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoNullLocacionNullProductsCopyNullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": null,
            "location_id": null,
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionAlajuelaProductsCopyFullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": true,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionAlajuelaProductsCopyFullTourOptionsFull', function(done) { //revisar
        app.uploadVM({
            "filterByText": true,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions([{
            location_id = "Grecia, Costa Rica",
            name = "Canopy"
          }]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionAlajuelaProductsCopyFullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionFortunaProductsCopyFullTourOptionsFull', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions([{
                location_id = "Grecia, Costa Rica",
                name = "Canopy"
              }]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionFortunaProductsCopyFullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": true,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionFortunaProductsCopyFullTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionFortunaProductsCopyEmptyTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": true,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoFalseLocacionFortunaProductsCopyEmptyTourOptionsEmpty', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionAlajuelaProductsCopyFullTourOptionsNull', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions(null);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });
    it('FiltrarConTextoTrueLocacionFortunaProductsCopyFullTourOptionsNull', function(done) {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [{
                "location_id": "Alajuela, Costa Rica",
                "name": "Kayak"
            },
            {
                "location_id": "Grecia, Costa Rica",
                "name": "Canopy"
            }],
            "products": []
        });
        app.uploadTourOptions(null);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });



    
});