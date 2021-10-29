export interface SparePart {
  material_master_id?: number;
  spare_part_code: string;
  spare_part_desc: string;
  hsn_code: string;
  spare_parts_group: string;
  rate: number | string;
  uom: number | string;
  remarks: string;
  active_id: number | string;
  photo: string;
  created_by?: string;
  created_date?: Date;
}

export interface SparePartFilter {
  spare_part_code: string | null;
  spare_part_desc: string | null;
  hsn_code: string | null;
  spare_part_group: string | null;
  rate: string | number | null;
  active_id: string | number | null;
  frn_uom: string | number | null;
}
