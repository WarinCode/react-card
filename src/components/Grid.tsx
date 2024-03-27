import { ReactElement, FC } from 'react'
import { GridProp } from "../types";

const Grid: FC<GridProp> = ({ children }): ReactElement => {
  return (
    <section className='grid-container'>
        {children}
    </section>
  )
}

export default Grid