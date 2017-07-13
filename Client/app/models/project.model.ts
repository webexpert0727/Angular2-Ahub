import { CategoryModel } from './category.model';
export class ProjectModel {
    constructor(public id: number,
        public name: string,
        public exerpt: string,
        public dateAdded: Date,
        public categories: CategoryModel[],
        public runCount: number,
        public assetCount: number
    ) {
    }
}
