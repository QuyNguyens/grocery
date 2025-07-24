export interface Ward {
  name: string;
  code: number;
  division_type: string;
}

export interface District {
  name: string;
  code: number;
  wards: Ward[];
}

export interface Province {
  name: string;
  code: number;
  districts: District[];
}
