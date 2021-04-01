
/*
* 基本类型
let str: string = '' // 字符串类型
let bool: boolean = false // 布尔类型
let num: number = 0 // 数字类型
let arr: number[] = [1, 2, 3] // 数字型数组
let arrT: Array<string> = ['1', '2', '3'] // 泛型的方式定义数组
let tuple: [string, number] = ['1', 1] // 元组类型
enum Color { 'Red', Green, Blue } // 枚举类型
let c: Color = Color.Red // 获取枚举类型的值
let any: any = 1 // 任意类型
any = '1' // 任意类型可以随便赋值
let unusable: void = undefined // void 只能赋值undefined或者null
let u: undefined = undefined // undefined 类型
let n: null = null // null 类型

// never类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// Object 类型
declare function create(o: object | null): void;
*/

import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import classnames from 'classnames'; // 类名合并的小工具，使用前别忘了安装它以及它的@types，安装命令是： npm install classnames @types/classnames --save

// 定义按钮的类型和大小
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'dash'
export type Size = 'lg' | 'md' | 'lg'

// 用interface定义按钮props类型约束
interface baseBtnType {
    children?: ReactNode,
    className?: string,
    btnType?: ButtonType,
    size?: Size
}

// 定义两种联合类型，一种是button型的，一种是a标签型的按钮
type NativeButtonProps = baseBtnType & ButtonHTMLAttributes<HTMLElement> // 基础按钮类型，props类型定义
type AnchorButtonProps = baseBtnType & AnchorHTMLAttributes<HTMLElement> // a标签类型的按钮，props类型定义

// 用Partial组合两种类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // 按钮最终的prop类型定义

// 使用泛型定义函数的入参及返回值类型
export const Button: FC<ButtonProps> = (props) => {
    let {
        className,
        children,
        btnType,
        size,
        ...restProps
    } = props

    // 类名合并工具classnames
    const finalClassName = classnames('dd-btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
    })

    return (
        <button
            className={finalClassName}
            {...restProps}
        >
            {
                children
            }
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    btnType: 'primary',
    size: 'md'
}

export default Button