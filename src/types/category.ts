export interface Category {
  _id: string;
  name: string;
  description?: string;
  parentId: string | null;
  image?: string;
}

export interface CategoryChildrenGroup {
  _id?: string;
  name?: string;
  createdAt?: Date;
  description?: string;
  imageUrl?: string;
}

export interface CategoryGroup {
  _id: string;
  parentName: string;
  children: CategoryChildrenGroup[];
}
