



function getNextCarId(carId) {
    const cars = _loadFromStorage()
    const carIdx = cars.findIndex(car => carId === car.id)
    const nextCarIdx = (carIdx + 1 === cars.length) ? 0 : carIdx + 1
    return cars[nextCarIdx].id
}

function getById(carId) {
    const cars = _loadFromStorage()
    const car = cars.find(car => carId === car.id)
    return Promise.resolve(car)
}

function remove(carId) {
    let cars = _loadFromStorage()
    cars = cars.filter(car => car.id !== carId)
    _saveToStorage(cars)
    return Promise.resolve()
}

function saveCar(car) {
    if (car.id) return _update(car)
    else return _add(car)
}

function _add(carToAdd) {
    let cars = _loadFromStorage()
    const car = _createCar(carToAdd.vendor, carToAdd.speed)
    cars = [car, ...cars]
    _saveToStorage(cars)
    return Promise.resolve()
}

function _update(carToUpdate) {
    let cars = _loadFromStorage()
    cars = cars.map(car => car.id === carToUpdate.id ? carToUpdate : car)
    _saveToStorage(cars)
    return Promise.resolve()
}

function getVendors() {
    return gVendors
}

function _createCar(vendor, speed = utilService.getRandomIntInclusive(1, 200)) {
    return {
        id: utilService.makeId(),
        vendor,
        speed,
        desc: utilService.makeLorem(),
        ctg: (Math.random() > 0.5) ? 'bestSeller' : 'stam'
    }
}

function _createCars() {
    const cars = []
    for (let i = 0; i < 20; i++) {
        const vendor = gVendors[utilService.getRandomIntInclusive(0, gVendors.length - 1)]
        cars.push(_createCar(vendor))
    }
    return cars
}