let tupple: [number, string] = [22,'2222']

//interfaces extends with extends word or initialize twice the same interface
// types with &

//const enum only for fast usage, but enums lives in runtime as a function

//private onlu in current class, protected also in extended classes, both cannot be rich from the outside

//abstarct class like implenting interfaces, abstract method is the method that u have to implement
//keyof keys of object type
interface AdditionalProp {
    prop: number
}
const log = <T extends AdditionalProp>(a:T): T => a

log<number>(5)

class MyClass<T> {
    int: T
}

new MyClass<number>()