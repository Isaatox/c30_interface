export default function ConstantInfo({
    min,
    max,
    infoTitle,
}: {
    min: number
    max: number
    infoTitle?: string
}) {
    return (
        <div className="flex flex-row items-center justify-between flex-1 p-2">
            <div className="flex flex-col justify-between h-full">
                <p className="text-2xl">{max}</p>
                <p className="text-2xl">{min}</p>
            </div>
            <div>
                <p className="text-8xl">85</p>
            </div>
            <div />
        </div>
    );
}
