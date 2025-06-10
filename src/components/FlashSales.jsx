import React from 'react';
import { timeUnits } from '../utils/data';

const FlashSales = () => {

    return (
        <section className='container px-5 md:px-4 mx-auto pt-4 md:pt-7'>
            {/* Header */}
            <div className='flex items-center gap-3 mb-4'>
                <div className='w-4 h-7 bg-red-500 rounded-sm' />
                <h3 className='text-red-500 font-semibold'>Today's</h3>
            </div>

            {/* Title + Countdown */}
            <div className="flex gap-5 md:gap-10 items-end mb-6 flex-wrap">
                <h2 className="text-3xl font-bold">Flash Sales</h2>

                {/* Countdown */}
                <div className="flex items-center">
                    {timeUnits.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-sm text-gray-500 font-medium">{item.label}</span>
                                <span className="text-2xl font-bold">{item.value}</span>
                            </div>

                            {i !== timeUnits.length - 1 && (
                                <div className="flex items-center mx-2">
                                    <span className="text-2xl text-red-400 font-bold">:</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlashSales;
