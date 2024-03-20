import React, { DragEvent, MouseEvent } from "react"

type canvasProps = {
    id: string
    width?: number
    height?: number
    children?: HTMLElement | React.ReactNode | string
    onUpdate?: () => void
    onDraw?: () => void
    onClick?: (e: MouseEvent<HTMLCanvasElement>) => void
    onDrag?: (e: DragEvent<HTMLCanvasElement>) => void
    onDragStart?: (e: DragEvent<HTMLCanvasElement>) => void
    onDragEnd?: (e: DragEvent<HTMLCanvasElement>) => void
}

export default function Canvas(props: canvasProps) {

    let WIDTH = props.width ? props.width : 512
    let HEIGHT = props.height ? props.height : 512

    let thisCanvas: HTMLCanvasElement = document.querySelector(`#${props.id}-canvas`)!
    let ctx: CanvasRenderingContext2D = thisCanvas.getContext("2d")

    function draw(f?: () => void) {
        ctx.clearRect(0,0,WIDTH,HEIGHT)
        if (f) {
            f()
        }
    }

    function update(f?: () => void) {
        if (f) {
            f()
        }
        if (props.onDraw) {
            draw(props.onDraw)   
        } else {
            draw()
        }
    }

    if (props.onUpdate) {
        update(props.onUpdate)
    }else {
        update()
    }
    
    return (
        <>
            <canvas id={props.id+"-canvas"} width={WIDTH} height={HEIGHT}
            onClick={(e) => {if (props.onClick) {props.onClick(e)}}} 
            onDrag={(e) => {if (props.onDrag) {props.onDrag(e)}}} 
            onDragStart={(e) => {if (props.onDragStart) {props.onDragStart(e)}}} 
            onDragEnd={(e) => {if (props.onDragEnd) {props.onDragEnd(e)}}}></canvas>
        </>
    )
}