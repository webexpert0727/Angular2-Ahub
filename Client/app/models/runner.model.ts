import { ParameterModel } from './parameter.model';

export class RunnerModel {
    constructor(public id: number,
        public name: string,
        public description: string,
        public thumbnailUrl: string,
        public parameters: ParameterModel[]
    ) {
    }
}
