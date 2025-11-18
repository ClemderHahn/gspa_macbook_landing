import useMacbookStore from "../store";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";

import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls bottom-30">
                <p className="info">Macbook Pro | Available in 14" & 16" in Titanium Silver, Graphite Storm, Rose Gold, Olive Chrome & Sky Breeze</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div 
                            onClick={() => setColor('#b0b0b0')}
                            className={clsx('bg-[#b0b0b0]', color === '#b0b0b0' && 'active')}
                        />
                        <div 
                            onClick={() => setColor('#2f3a44')}
                            className={clsx('bg-[#2f3a44]', color === '#2f3a44' && 'active')} 
                        />
                        <div       
                            onClick={() => setColor('#c08081')}
                            className={clsx('bg-[#c08081]', color === '#c08081' && 'active')} 
                        />
                        <div 
                            onClick={() => setColor('#3a5a47')}
                            className={clsx('bg-[#3a5a47]', color === '#3a5a47' && 'active')} 
                        />
                        <div 
                            onClick={() => setColor('#87ceeb')}
                            className={clsx('bg-[#87ceeb]', color === '#87ceeb' && 'active')} 
                        />
                    </div>

                    <div className="size-control">
                        <div 
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')} 
                        >
                            <p>14"</p>
                        </div>
                        <div 
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')} 
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />

                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}

export default ProductViewer