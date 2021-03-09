import Image from 'next/image'
import { useState } from 'react'
import Bn1 from '../../assets/banner/banner1.png'
import Bn2 from '../../assets/banner/banner2.png'
import Bn3 from '../../assets/banner/banner3.png'
import { Before, Next, Sliders, Wrapper } from './styles'
export interface Props {
    [index: number]: string
}

export const Props = [Bn1, Bn2, Bn3]

const Slider: React.FC<Props> = () => {
    const [current, setCurrent] = useState(0)
    const length = 3

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Bn1) {
        return null
    }

    return (
        <Wrapper>
            <Sliders>
                <Before onClick={prevSlide} />
                <Next onClick={nextSlide} />

                {Props.map((slide, index) => (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <Image
                                src={slide}
                                alt="banner"
                                width={1330}
                                height={350}
                            />
                        )}
                    </div>
                ))}
            </Sliders>
        </Wrapper>
    )
}

export default Slider
