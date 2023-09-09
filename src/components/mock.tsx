// import {type Link} from '../components/customize'

export function Mock (){
    return (
        <div className="border rounded-lg w-[40%] h-[550px]">
            <h1>Mock</h1>
            <div className="border-2 flex items-center p-4 justify-center rounded-2xl h-[90%] w-[45%] m-auto">
                <div className="flex flex-col w-full gap-3 text-xs font-medium ">
                    <div className="h-[40px] flex items-center rounded-md border">Github</div>
                    <div className="h-[40px] flex items-center rounded-md border">Youtube</div>
                </div>
            </div>
        </div>
    )
}