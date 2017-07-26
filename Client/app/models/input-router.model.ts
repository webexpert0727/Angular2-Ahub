import { ParameterModel } from './parameter.model';

export class InputRouterModel {
    constructor(public id: number,
        public name: string,
        public settings: ParameterModel[]
    ) {
    }
}
