//  *** knockout.js - Query binding for search menu
var viewModel = {
	query: ko.observable(''),
};
viewModel.destinations = ko.dependentObservable(function() {
	var self = this;
	var search = self.query().toLowerCase();
	return ko.utils.arrayFilter(destinations, function(marker) {
		if (marker.name.toLowerCase().indexOf(search) >= 0) {
			marker.boolTest = true;
			return marker.visible(true);
		} else {
			marker.boolTest = false;
			setAllMap();
			return marker.visible(false);
		}
	});
}, viewModel);
ko.applyBindings(viewModel);
//show - hide markers with search pram
$("#input").keyup(function() {
	setAllMap();
});