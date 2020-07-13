type ScannerBarProps = {
    classes: string
    height: number
}

export default function ScannerBar({ classes, height }) {
    return (
        <>
            <style jsx>{`
                .scanner {
                    transform: translateY(0px);
                    animation: scanning 2s ease-in-out infinite;
                }

                @keyframes scanning {
                    50% {
                        transform: translateY(${height}px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
            `}</style>
            <div
                className={`scanner ${classes}`}
                style={{
                    maxWidth: 350,
                    height: 0,
                    background: 'green',
                    boxShadow: ' 0 0 1px 1px #0f0, 0 0 15px 3px #0f0',
                }}
            ></div>
        </>
    )
}
