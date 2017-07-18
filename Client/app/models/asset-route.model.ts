import { AssetModel } from './asset.model';
export class AssetRouteModel {
    constructor(public id: number,
        public sourceAssets: AssetModel[],
        public destInputId: number
    ) {
    }
}
