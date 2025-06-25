import ConstantInfo from "./ConstantInfo";
type ConstantProps = {
    title: string;
    titleInformation: string;
    min: number;
    max: number;
    min2?: number
    max2?: number
    divClass?: string;
    titleClass?: string;
    asMultipleConstant?: boolean;
    constant1: number;
    constant2?: number;
};

export default function Constant({
    title,
    titleInformation,
    min,
    max,
    min2,
    max2,
    divClass,
    titleClass,
    asMultipleConstant = false,
    constant1,
    constant2
}: ConstantProps) {
    return (
        <div className={`flex flex-col flex-1 w-full p-1 bg-blue-500 border-blue-950 border ${divClass || ''}`}>
            <div className={`bg-blue-800 flex justify-between items-center px-2 py-1 ${titleClass || ''}`}>
                <p className="text-2xl">{title}</p>
                <p className="text-2xl">{titleInformation}</p>
            </div>

            {asMultipleConstant && max2 && min2 && constant2 ? (
                <>
                <div className="flex flex-row h-full">
                    <ConstantInfo max={max} min={min} infoTitle="SYS" constant={constant1}/>
                    <ConstantInfo max={max2} min={min2} infoTitle="DIA" constant={constant2}/>
                </div>
                </>
            ) : (
                <ConstantInfo max={max} min={min} constant={constant1}/>
            )}
        </div>
    );
}
