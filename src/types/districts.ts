export interface District {
  id: string;
  name: string;
  coordinates: [number, number];
  temperature: number;
  humidity: number;
}

export interface DistrictData {
  type: string;
  properties: {
    name: string;
    temperature: number;
    humidity: number;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}