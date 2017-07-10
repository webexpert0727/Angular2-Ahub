import { CategoryModel } from './category.model';
import { RunnerModel } from './runner.model';
import { ProjectModel } from './project.model';

export class LibraryItemModel {
    constructor(public id: number,
        public name: string,
        public itemUrl: string,
        public thumbnailUrl: string,
        public authorId: number,
        public authorUsername: string,
        public authorAvatarUrl: string,
        public exerpt: string,
        public content: string,
        public version: string,
        public sourceCodeUrl: string,
        public categories: CategoryModel[],
        public runners: RunnerModel[],
        public projects: ProjectModel[],
        public runCount: number,
        public projectCount: number,
        public isDownloaded: boolean
    ) {
    }
}
