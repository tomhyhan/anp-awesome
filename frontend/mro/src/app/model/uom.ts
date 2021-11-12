export interface UomPart {
    uom_id?: number;
    uom: number | string;
    remarks?: string;
    modified_by?: string;
    modified_date?: string;
  }
  
  // could use partial
  export interface UomPartFilter {
    uom: number | string;
    remarks?: string;
  }
  