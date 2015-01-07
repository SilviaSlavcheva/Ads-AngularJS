app.factory('filter', function() {
	var filterParams = {};

	function filterByCategory(category) {
		if (category) {
			filterParams.categoryId = category.id;
		} else {
			filterParams = {};
		}
	}

	function filterByTown(town) {
		if (town) {
			filterParams.townId = town.id;
		} else {
			filterParams = {};
		}
	}

	function getFilterParams() {
		return filterParams;
	}

	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams
	}
})