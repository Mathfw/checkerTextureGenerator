import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { Label } from "./ui/label"
import Canvas from "./Canvas"

export function ColorPicker(
    {placeholder, label, defaultColor, canvasId}: 
    {placeholder: string, label: string, defaultColor: string, canvasId: string}
) {
    
    const [ current, setCurrent ] = useState<string>("")
    const [ color, setColor ] = useState<string>(defaultColor)

    return (
        <Popover>
            <PopoverTrigger className="grid grid-cols-2 w-full max-w-xs gap-1.5">
                <Label className="col-span-2 text-start uppercase font-black">{label}</Label>
                <Input type="text" placeholder={placeholder} className="w-full" disabled></Input>
                <Button variant="outline" className="w-full"
                style={{
                    backgroundColor: color
                }}></Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="grid grid-cols-4">
                    <div className="col-span-4 grid w-full max-w-sm items-center gap-1.5">
                        <Label className="text-start uppercase font-black">hex</Label>
                        <Input type="text" placeholder="hex"></Input>
                    </div>
                    <Canvas id={canvasId} width={384} height={384}></Canvas>
                </div>
            </PopoverContent>
        </Popover>
    )
}