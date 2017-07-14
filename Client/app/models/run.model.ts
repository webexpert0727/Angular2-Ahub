import { AssetModel } from './asset.model';
export class RunModel {
    constructor(public id: number,
        public algoId: number,
        public algoName: string,
        public projectId: number,
        public dateAdded: Date,
        public dateStarted: Date,
        public dateCompleted: Date,
        public assets: AssetModel[],
        public runtimeMs: number,
        public status: string
    ) {
    }
}
