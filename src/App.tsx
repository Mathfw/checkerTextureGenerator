import React from 'react'
import './App.css'
import Canvas from './components/Canvas'
import { NumberInput } from './components/NumberInput'
import { ThemeProvider } from './components/ThemProvider'
import { RangeInput } from './components/RangeInput'
import { ColorPicker } from './components/ColorPicker'

function App() {

  return (
    <>
      <ThemeProvider>
        <nav>
          <p>Hello World</p>
        </nav>
        <main className='flex flex-row items-center justify-between'>
          <div className='grid grid-cols-2 gap-4'>
            <NumberInput placeholder='dimensions' label='dimensions'></NumberInput>
            <RangeInput id='rounded' label='rounded'></RangeInput>
          </div>
          <Canvas id="checker"></Canvas>
          <div className='grid grid-cols-2 gap-4'>
            <ColorPicker canvasId='color01picker' defaultColor='#fff' placeholder='color01' label='color01'></ColorPicker>
          </div>
        </main>
        <footer>
          <a href="https://github.com/Mathfw">github</a>
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App