export class AssetModel {
    constructor(public id: number,
        public projectId: number,
        public runId: number,
        public filename: string,
        public downloadUrl: string,
        public mediaType: string,
        public source: string,
        public type: string,
        public dateCreated: Date
    ) {
    }
}
