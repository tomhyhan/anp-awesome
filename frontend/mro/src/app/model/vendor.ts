export interface vendor {
    vendor_id?: number;
    vendor_code: string;
    vendor_name: string;
    contact: string;
    address: string;
    remarks: string;
    created_by?: string;
    created_date?: Date;
  }
  
export interface VendorFilter {
    vendor_code: string | null;
    vendor_name: string | null;
    contact: string | null;
    address: string | null;
    remarks: string | null;
}