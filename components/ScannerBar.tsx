export default function ScannerBar({ classes }) {
    return (
        <div
            className={`scanner ${classes}`}
            style={{
                maxWidth: 350,
                height: 0,
                background: 'green',
                boxShadow: '0 0 10px 5px #0f0',
            }}
        ></div>
    )
}
