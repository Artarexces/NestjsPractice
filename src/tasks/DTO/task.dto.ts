export interface Task{
    id: number,
    title: string,
    status: boolean
}

export interface CreateTaskDTO{
    title: string,
    status: boolean
}