export interface aircraft {
    material_aircraft_id?: number;
    aircraft_name: string;
    remarks: string;
    created_by?: string;
    created_date?: Date;
  }
  
export interface aircraftFilter {
    aircraft_name: string | null;
    remarks: string | null;
}