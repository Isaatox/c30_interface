export default function ConstantInfo({
    min,
    max,
    constant,
    infoTitle,
}: {
    min: number
    max: number
    constant: number
    infoTitle?: string
}) {
    return (
        <div className="flex flex-row items-center justify-between flex-1 p-2">
            <div className="flex flex-col justify-between h-full">
                <p className="text-2xl">{max}</p>
                <p className="text-2xl">{min}</p>
            </div>
            <div className="flex flex-col items-center">
                {infoTitle && (<p className="text-2xl -mb-4">{infoTitle}</p>)}
                <p className="text-8xl">{constant}</p>
            </div>
            <div />
        </div>
    );
}
