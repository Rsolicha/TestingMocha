/**
 * PARA LA CREACION DE LA FUNCION FUE NECESARIO CONFIGURAR ANGULAR.COPY DEBIDO A QUE NO USAMOS LA LIBRERIA ANGULAR
 * ADEMAS FUE NECESARIO TRATAR DE SUPONER LO QUE REALIZABA LA FUNCION SEARCHTOURNAMESBYTEXT YA QUE NO FUE DADA
 * ASI MISMO AL NO SABER QUE NOMBRE BUSCAR SIEMPRE VA A DEVOLVER LA LISTA YA QUE NO SE CONOCE BIEN LAS FUNCIONES
 */
let vm;
let tour_options;
module.exports = {
    restarVM() {
        vm = null;
    },
    restarTour() {
        tour_options = null;
    },
    uploadVM(data) {
        vm = data;
    },
    uploadTourOptions(data) {
        tour_options = data;
    },
    getVmProducts() {
        return vm.products
    },
    filterTours() {
        if (vm.filterByText || vm.location_id) {
            var productsFiltered = [];
            var productsCopy = JSON.parse(JSON.stringify(vm.productsCopy)) //angular.copy(vm.productsCopy);
            productsCopy.forEach(function(tour) {
                if ((vm.filterByText && vm.filterByText !== '') ||
                    (vm.location_id && tour.location_id === vm.location_id)) {
                    var item = '';
                    var itemFound = false;
                    var res;
                    if (vm.filterByText && vm.filterByText !== '') {
                        res = searchToursNamesByText(tour);

                        if (res.tour_options.length > 0) {

                            item = res;
                            itemFound = true;
                        }
                    }
                    if (!res) {
                        item = tour;
                    }
                    if (vm.location_id) {
                        itemFound = false;
                        if (vm.location_id === item.location_id) {

                            itemFound = true;
                        }
                    }
                    if (itemFound) {

                        productsFiltered.push(item);
                    }
                }
            });
            vm.products = productsFiltered;
        } else {
            vm.products = vm.productsCopy;
        }
    }

}

function searchToursNamesByText(tour) {
    let toursFound = { "tour_options": [], "location_id": "" };
    tour_options.forEach(function(element) {
        if (element.location_id === tour.location_id) {
            toursFound.tour_options.push(element);
            toursFound.location_id = element.location_id;
        }
    })
    return toursFound;
}