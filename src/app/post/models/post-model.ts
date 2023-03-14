export class PostModel {
    userId!: number;
    id!: number;
    title!: string;
    body!: string;
    constructor(object: any) {
        this.init();
        if (object) {
            this.userId = object.userId;
            this.id = object.id;
            this.title = object.title;
            this.body = object.body;
        }
    }

    init() {
        this.userId = -1;
        this.id = -1;
        this.title = '';
        this.body = '';
    }
}