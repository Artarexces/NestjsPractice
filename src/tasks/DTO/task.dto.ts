export interface Task{
    id: number,
    title: string,
    status: boolean
}

export interface CreateTask{
    title: string,
    status: boolean
}