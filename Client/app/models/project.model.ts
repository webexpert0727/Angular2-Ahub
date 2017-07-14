import { CategoryModel } from './category.model';
import { RunModel } from './run.model';
import { AssetModel } from './asset.model';

export class ProjectModel {
    constructor(public id: number,
        public name: string,
        public exerpt: string,
        public dateAdded: Date,
        public categories: CategoryModel[],
        public category: string,
        public runs: RunModel[],
        public assets: AssetModel[],
        public runCount: number,
        public assetCount: number
    ) {
    }
}
