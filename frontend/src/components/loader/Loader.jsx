import React from 'react'

const Loader = () => {
    return (
            <div id='loader' className=" my-5 flex-col gap-4 flex items-center justify-center">
                <div
                    className="w-20 h-20 border-4 border-transparent text-gray-200 text-4xl animate-spin flex items-center justify-center border-t-gray-500 rounded-full"
                >
                    <div
                        className="w-16 h-16 border-4 border-transparent text-white text-2xl animate-spin flex items-center justify-center border-t-white rounded-full"
                    ></div>
                </div>
            </div>
    )
}

export default Loader