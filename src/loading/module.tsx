export interface PropsInterface {
    /**
     * 大小
     */
    size?: number

    [x: string]: any
}

export class Props implements PropsInterface {
    size = 100
}

export interface StateInterface {

}

export class State implements StateInterface {

}