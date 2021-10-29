export interface project {
    project_master_id?: number;
    project_code: string;
    project_name: string;
    remarks: string;
    active_id: number | string;
    star_date?:Date;
    end_date?:Date;
    created_by?: string;
    created_date?: Date;
  }
  
export interface ProjectFilter {
    project_code: string | null;
    project_name: string | null;
    remarks: string | null;
    star_date: Date | null;
    end_date: Date |  null;
    active_id: string | number | null;
}
  