"use strict";
// Задача 6.
// Дано масив маркерів на карті  [lat, long, city]. Визначити найближче місто до вказаних координат
function getMarkersList(markersNumber) {
    const markersList = [];
    for (let i = 0; i < markersNumber; i++) {
        const input = prompt(`Маркер ${i + 1}: Введіть lat, long та назву міста через пробіл`);
        if (input) {
            const data = input.split(" ");
            markersList.push([Number(data[0]), Number(data[1]), data[2]]);
        }
    }
    return markersList;
}
const markersList = getMarkersList(3);
if (markersList.length > 0) {
    userSearch();
}
function userSearch() {
    const input = prompt("Введіть координати для пошуку (lat long)");
    if (input) {
        const data = input.split(" ");
        const searchResult = getClosestPlace(Number(data[0]), Number(data[1]), markersList);
        alert(`Найближче місто: ${searchResult[2]} (Координати: ${searchResult[0]}, ${searchResult[1]})`);
        console.log("Результат:", searchResult);
    }
}
function getClosestPlace(lat, long, list) {
    let closestMarker = list[0];
    let minDistance = Infinity;
    list.forEach((marker) => {
        const [mLat, mLong] = marker;
        const distance = Math.pow(lat - mLat, 2) + Math.pow(long - mLong, 2);
        if (distance < minDistance) {
            minDistance = distance;
            closestMarker = marker;
        }
    });
    return closestMarker;
}
