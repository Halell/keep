import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const appService = {
    query,
}

const KEY = 'app_DB'
var gAppData

function query(filterBy) {
    let appData = _loadFromStorage()
    if (!appData) {
        appData = _createCars()
        _saveToStorage(appData)
    }

    if (filterBy) {
        let { filterByX, min, max } = filterBy
        if (!min) min = 0
        if (!max) max = Infinity
        appData = appData.filter(obj =>
            obj.filterByX.includes(vendor) &&
            obj.speed <= maxSpeed &&
            obj.speed >= minSpeed)
    }

    return Promise.resolve(appData)
}


function _saveToStorage(cars) {
    storageService.saveToStorage(KEY, cars)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}