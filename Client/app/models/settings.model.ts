export class SettingsModel {
    constructor(public id: number,
        public connectionString: string,
        public runnerPath: string,
        public inputRouterPath: string,
        public outputRouterPath: string
    ) {
    }
}
