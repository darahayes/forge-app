angular.module('settingsServiceModule', ['ngStorage', 'authServiceModule'])

.factory('settingsService', function($localStorage, authService) {
	var massUnits = ['kg', 'lb'];
	var distanceUnits = ['km', 'mi'];

	var defaultMassUnit = $localStorage.defaultMassUnit || 'kg'
	var defaultDistanceUnit = $localStorage.defaultDistanceUnit || 'km'

	function clearLocalStorage() {
		authService.clearLogin();
		$localStorage.$reset();
	}

	function setDefaultMassUnit(unit) {
		$localStorage.defaultMassUnit = unit;
		console.log('default mass unit set to', unit);
		defaultMassUnit = unit;
	}

	function setDefaultDistanceUnit(unit) {
		$localStorage.defaultDistanceUnit = unit;
		console.log('default distance unit set to', unit);
		defaultDistanceUnit = unit;
	}

	function getDefaultMassUnit() {
		return defaultMassUnit;
	}

	function getDefaultDistanceUnit() {
		return defaultDistanceUnit;
	}

	function getMassUnits() {
		return massUnits;
	}

	function getDistanceUnits() {
		return distanceUnits;
	}

	return {
		clear: clearLocalStorage,
		setDefaultDistanceUnit: setDefaultDistanceUnit,
		getDefaultDistanceUnit: getDefaultDistanceUnit,
		setDefaultMassUnit: setDefaultMassUnit,
		getDefaultMassUnit: getDefaultMassUnit,
		getMassUnits: getMassUnits,
		getDistanceUnits: getDistanceUnits
	}

})