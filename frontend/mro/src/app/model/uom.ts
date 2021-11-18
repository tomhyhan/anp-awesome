export interface uom {
    uom_id?: number;
    uom: string;
    remarks: string;
    created_by?: string;
    created_date?: Date;
    modified_by?: string;
    modified_date?: string;
  }
  
export interface uomPartFilter {
    uom: string | null;
    remarks: string | null;
}