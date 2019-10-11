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

});