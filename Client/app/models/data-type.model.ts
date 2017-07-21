import { ParameterOptionModel } from './parameter-option.model';

export class DataTypeModel {
    constructor(public id: number,
        public name: string,
        public shortName: string,
        public precision?: number,
        public scale?: number,
        public options?: ParameterOptionModel[]
    ) {
    }
}
