import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface WorkItemProps {
    image: any;
    title: string;
    description: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ image, title, description }) => {
    return (
        <div className="flex basis-1/2 flex-col">
            <Image
                src={image}
                width={500} height={48} alt={title}
            />
            <div className="flex flex-col self-stretch pt-6">
                <h3 className="font-display text-display-md pb-4">{title}</h3>
                <p className="text-body-lg font-light text-neutral-700">
                    {description}
                </p>
            </div>
        </div>
    );
};

WorkItem.propTypes = {
    image: PropTypes.object.isRequired, // Adjust prop type for GatsbyImage
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default WorkItem;
