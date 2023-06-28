import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes, ReactNode,
} from 'react'
import s from './SuperRadio.module.css'
import {arrType} from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: arrType[]
    onChangeOption?: (option: number) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
        // onChangeOption?.(e.currentTarget.value)
        // console.log('onChangeCallback from SuperRadio =', e.currentTarget.value) // onChangeCallback from SuperRadio = Pre-junior
        // console.log('onChangeCallback from SuperRadio =', e.target.value)

        // onChangeOption?.(e.target.id.at(-1))
        // console.log('onChangeCallback from SuperRadio =', e.target.id.at(-1))

        onChangeOption?.(+e.currentTarget.value)
        console.log('onChangeCallback from SuperRadio =', +e.currentTarget.value)
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: ReactNode = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'}
                      // name, checked, value делают студенты
                       value={o.id}
                       name={name}
                      checked={o.id === value}

                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
