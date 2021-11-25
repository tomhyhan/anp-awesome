export interface SparePart {
  material_master_id?: number;
  spare_part_code: string;
  spare_part_desc: string;
  hsn_code: string;
  spare_parts_group: string;
  rate: number | string;
  uom: number | string;
  remarks?: string;
  active_id: number | string;
  photo?: string;
  created_by?: string;
  created_date?: Date;
  modified_by?: string;
  modified_date?: string;
}

// could use partial
export interface SparePartFilter {
  spare_part_code?: string;
  spare_part_desc?: string;
  hsn_code?: string;
  spare_part_group?: string;
  rate?: string | number;
  active_id?: string | number;
  frn_uom?: string | number;
}
