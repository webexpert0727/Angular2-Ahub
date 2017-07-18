import { AssetModel } from './asset.model';
import { AssetRouteModel } from './asset-route.model';
import { ParameterModel } from './parameter.model';

export class RunModel {
    constructor(public id: number,
        public algoId: number,
        public algoName: string,
        public projectId: number,
        public dateAdded: Date,
        public dateStarted: Date,
        public dateCompleted: Date,
        public assets: AssetModel[],
        public assetRoutes: AssetRouteModel[],
        public parameters: ParameterModel[],
        public runtimeMs: number,
        public status: string,
        public completionPercent: number,
        public stdOut: string,
        public stdErr: string,
        public hasErrors: boolean
    ) {
    }
}
