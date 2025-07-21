import React from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';

const sizes = {
    small: 'text-sm w-20 h-8',
    medium: 'text-base w-28 h-10',
    large: 'text-lg w-36 h-12',
};

const shapes = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
};

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
            <Card />

            <div className="flex gap-4 flex-wrap">
                {Object.entries(sizes).map(([sizeName, sizeClass]) =>
                    Object.entries(shapes).map(([shapeName, shapeClass]) => (
                        <Button
                            key={`${sizeName}-${shapeName}`}
                            title={`${sizeName} ${shapeName}`}
                            styles={`bg-blue-500 text-white flex items-center justify-center p-2 ${sizeClass} ${shapeClass}`}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Landing;
