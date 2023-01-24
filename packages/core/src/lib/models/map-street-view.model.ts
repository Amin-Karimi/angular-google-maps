export class MapStreetViewLatLngModel {
    lat: number;
    lng: number;
}
export class MapStreetViewPovModel {
    heading: number;
    pitch: number;
    zoom?: number
}
export class MapStreetViewModel {
    coords: MapStreetViewLatLngModel;
    Pov: MapStreetViewPovModel
}