import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export function NumberInput({
    value,
    type,
    disabled,
    label,
    ...props
}: InputProps) {
    type = "number"
    disabled = true

    const [current, setCurrent] = useState<number>(4);

    if (value && typeof value === "string") {
        value = parseInt(value)
    }

    if (value && typeof value === "number" && value < 4) {
        setCurrent(4)
    } else if (value && typeof value === "number" && value > 4 && value % 2 === 0) {
        setCurrent(value)
    }

    if (value && typeof value !== "number") {
        throw new Error("value should be number or string")
    } else if (value && typeof value === "number" && value % 2 !== 0) {
        throw new Error("value should be multiple of two")
    }

    return (
        <div className="grid m-4 w-full max-w-xs content-center gap-1.5">
            <Label className="uppercase font-black col-span-3">{label}</Label>
            <Input type={type} value={current} {...props} disabled={disabled}></Input>
            <Button variant="outline" className="w-full"
            onClick={() => {setCurrent(current + 2)}}>+</Button>
            <Button variant="outline" className="w-full"
            onClick={() => {
                if ((current - 2) < 4) {
                    setCurrent(4)
                }else {
                    setCurrent(current - 2)
                }
            }}>-</Button>
        </div>
    )
}