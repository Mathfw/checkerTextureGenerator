import { Slider } from "./ui/slider"
import { Label } from "./ui/label"
import { useState } from "react"

type rangeProps = {
    label: string
    id: string
}

export function RangeInput(props: rangeProps) {
    
    const [current, setCurrent] = useState<number[]>([0])

    return (
        <div className="grid grid-cols-2 w-full max-w-xs gap-1.5 m-4">
            <Label htmlFor={props.id} className="uppercase font-black">{props.label}</Label>
            <span className="justify-self-end uppercase font-black">
                {current}
            </span>
            <Slider id={props.id} defaultValue={[0]} min={0} max={100} step={1}
            className="col-span-2" 
            onValueChange={(value: number[]) => {setCurrent(value)}}></Slider>
        </div>
    )
}