import { MediaTypeModel } from './media-type.model';

export class InputModel {
    constructor(public id: number,
        public name: string,
        public description: string,
        public isRequired: boolean,
        public acceptMultiAsset: boolean,
        public mediaTypes: MediaTypeModel[]
    ) {
    }
}
