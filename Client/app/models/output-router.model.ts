import { ParameterModel } from './parameter.model';

export class OutputRouterModel {
    constructor(public id: number,
        public name: string,
        public settings: ParameterModel[]
    ) {
    }
}
