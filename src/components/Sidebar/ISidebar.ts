export interface IRoute {
    path: string,
    label: string
}

export interface ISidebar {
    routes: IRoute[],
    title: string
}