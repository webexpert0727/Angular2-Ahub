import { DataTypeModel } from './data-type.model';

export class ParameterModel {
    constructor(public id: number,
        public sortOrder: number,
        public name: string,
        public value: string,
        public description: string,
        public dataType: DataTypeModel[]
    ) {
    }
}
