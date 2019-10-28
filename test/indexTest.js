const assert = require('chai').assert;


describe('Pruebas Caja Negra', function() {
    let app;

    before(function() {
        app = require('../index');
    });

    afterEach(function() {
        app.restarVM();
        app.restarTour();
    });

    it('P1 - FiltrarConTextoNullLocacionAlajuelaProductsCopyFullTourOptionsEmpty', function() {
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

    it('P2 - FiltrarConTextoTrueLocacionNullProductsCopyFullTourOptionsEmpty', function() {
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

    it('P3 - FiltrarConTextoFalseLocacionNullProductsCopyFullTourOptionsEmpty', function() {
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

    it('P4 - FiltrarConTextoTrueLocacionAlajuelaProductsCopyNullTourOptionsEmpty', function() {
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

    it('P5 - FiltrarConTextoFalseLocacionAlajuelaProductsCopyNullTourOptionsEmpty', function() {
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

    it('P6 - FiltrarConTextoNullLocacionNullProductsCopyNullTourOptionsEmpty', function() {
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

    it('P7 - FiltrarConTextoTrueLocacionNullProductsCopyNullTourOptionsEmpty', function() {
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

    it('P8 - FiltrarConTextoFalseLocacionNullProductsCopyNullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": false,
            "location_id": null,
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNull(app.getVmProducts());
    });

    it('P9 - FiltrarConTextoNullLocacionAlajuelaProductsCopyNullTourOptionsEmpty', async function() {
        app.uploadVM({
            "filterByText": null,
            "location_id": "Alajuela, Costa Rica",
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        await app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P10 - FiltrarConTextoNullLocacionNullProductsCopyNullTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": null,
            "location_id": null,
            "productsCopy": null,
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNull(app.getVmProducts());
    });

    it('P11 - FiltrarConTextoTrueLocacionAlajuelaProductsCopyFullTourOptionsEmpty', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P12 - FiltrarConTextoFalseLocacionAlajuelaProductsCopyFullTourOptionsFull', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions([{
            "location_id": "Grecia, Costa Rica",
            "name": "Canopy"
        }]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P13 - FiltrarConTextoFalseLocacionAlajuelaProductsCopyFullTourOptionsEmpty', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });

    it('P14 - FiltrarConTextoFalseLocacionFortunaProductsCopyFullTourOptionsFull', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions([{
            "location_id": "Grecia, Costa Rica",
            "name": "Canopy"
        }]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P15 - FiltrarConTextoTrueLocacionFortunaProductsCopyFullTourOptionsEmpty', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P16 - FiltrarConTextoFalseLocacionFortunaProductsCopyFullTourOptionsEmpty', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P17 - FiltrarConTextoTrueLocacionFortunaProductsCopyEmptyTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": true,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P18 - FiltrarConTextoFalseLocacionFortunaProductsCopyEmptyTourOptionsEmpty', function() {
        app.uploadVM({
            "filterByText": false,
            "location_id": "Fortuna, Costa Rica",
            "productsCopy": [],
            "products": []
        });
        app.uploadTourOptions([]);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });

    it('P19 - FiltrarConTextoTrueLocacionAlajuelaProductsCopyFullTourOptionsNull', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions(null);
        app.filterTours();
        assert.isNotEmpty(app.getVmProducts());
    });

    it('P20 - FiltrarConTextoTrueLocacionFortunaProductsCopyFullTourOptionsNull', function() {
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
                }
            ],
            "products": []
        });
        app.uploadTourOptions(null);
        app.filterTours();
        assert.isEmpty(app.getVmProducts());
    });




});