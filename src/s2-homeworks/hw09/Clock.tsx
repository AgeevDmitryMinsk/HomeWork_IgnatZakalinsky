import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается

    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    // console.log('date=', date)
    // console.log('timerId=', timerId)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

        console.log('start at', new Intl.DateTimeFormat('ru',  {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }).format(Date.now()) )
        let timerId = +setInterval(() => setDate(new Date()), 1000);
        setTimerId(timerId)
        // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
        // setTimeout(() => { clearInterval(timerId); alert('stop'); setTimerId(undefined) }, 9000);
    }



    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        // setTimerId(undefined)
        setTimeout(() => { clearInterval(timerId);
            console.log('stop at', stringTime); setTimerId(undefined) }, 0);
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        console.log('onMouseEnter')
        setShow(true)

    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        console.log('onMouseLeave')
        setShow(false)

    }

    // const stringTime = 'date->time' || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

    const stringTime = new Intl.DateTimeFormat('ru',  {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format(Date.now()) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

    // const stringDate = 'date->date' || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    const stringDate = new Intl.DateTimeFormat("ru").format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем


    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    // const stringDay = 'date->day' || <br/> // пишут студенты
    const stringDay = new Intl.DateTimeFormat('en-US',{weekday: "long",}).format(date) || <br/>


    // const stringMonth = 'date->month' || <br/> // пишут студенты
    const stringMonth = new Intl.DateTimeFormat('en-US', {
        month: "long"
    }).format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    // disabled={true} // пишут студенты // задизэйблить если таймер запущен
                    disabled={timerId? true :false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    // disabled={true} // пишут студенты // задизэйблить если таймер не запущен
                    disabled={timerId? false :true} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
