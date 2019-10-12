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
});