import dynamic from 'next/dynamic'
import { useState, useRef } from 'react'
import ScannerBar from '@/components/ScannerBar'

const DynamicFileUpload = dynamic(() => import('@components/FileUpload'), { ssr: false })

type State = 'START' | 'SCANNING' | 'RESULT'
type Result = {
    title: string
    description: string
}

const results: Result[] = [
    {
        title: 'Not Cake',
        description: 'Our data confirms that this is not a cake. You are safe... for now.',
    },
    {
        title: 'Probably Not Cake',
        description: 'Our data shows that this is probably not a cake, but test results are not conclusive.',
    },
    {
        title: 'Probably Cake',
        description: 'Our data shows that this is likely a cake, but test results are not conclusive.',
    },
    {
        title: 'Cake',
        description:
            "Our data confirms that this is definitely a cake. There's only one way to tell what kind of cake this is...",
    },
]

export default function Home() {
    const [imageData, setImageData] = useState(null)
    const [result, setResult] = useState<Result>(null)
    const imageEl = useRef(null)
    const [state, setState] = useState<State>('START')

    function onImageParse(data) {
        setImageData(data)
        setState('SCANNING')

        setTimeout(() => {
            getResult()
            setState('RESULT')
        }, 3000)
    }

    function getResult() {
        const newResult = results[Math.floor(Math.random() * results.length)]

        setResult(newResult)
    }

    return (
        <main className="max-w-lg mx-auto">
            <h1 className="text-5xl font-bold text-center mb-8">Cake or Not Cake</h1>

            {state === 'START' ? (
                <>
                    <p className="mb-4">
                        Are you tired of not knowing whether your household objects, pets, or loved ones are cake?
                    </p>
                    <p className="mb-4">
                        Simply upload a picture, and with the help of artificial learning, machine intelligence, and
                        blockchain, we will tell you with absolute certainty whether they are cake or not.
                    </p>
                    <p className="text-gray-700 mb-4">(No images are sent to a server.)</p>

                    <DynamicFileUpload onImageParse={onImageParse} />
                </>
            ) : null}

            {state === 'SCANNING' ? (
                <>
                    <div className="grid grid-cols-1 grid-rows-1 justify-center">
                        <img
                            className="col-start-1 row-start-1 mx-auto"
                            style={{ maxWidth: 300, maxHeight: 300 }}
                            src={imageData}
                            alt="Uploaded image with scanning bar animation"
                            ref={imageEl}
                        />
                        <ScannerBar
                            classes="col-start-1 row-start-1 w-4/5 mx-auto"
                            height={imageEl.current.offsetHeight}
                        />
                    </div>
                </>
            ) : null}

            {state === 'RESULT' ? (
                <div className="flex flex-col items-center text-center">
                    <img
                        className="mb-8"
                        style={{ maxWidth: 300, maxHeight: 300 }}
                        src={imageData}
                        alt="Uploaded image"
                    />
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{result.title}</h2>
                    <p>{result.description}</p>
                </div>
            ) : null}
        </main>
    )
}
