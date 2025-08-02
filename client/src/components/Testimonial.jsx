import React, { useState, useRef } from 'react';

const Testimonial = () => {
    const [hovered, setHovered] = useState({ index: null, x: 0, y: 0 });
    const cardRefs = useRef([]);

    const dummyTestimonialData = [
        {
            image: "/src/assets/neeraj.PNG",
            name: 'Neeraj Kumar',
            title: 'CEO, KumarCorp',
            content: 'As CEO, I’ve seen many tools—but GenieAi stands out. It’s boosted our team’s efficiency and elevated the quality of everything we publish.',
            rating: 4,
        },
        {
            image: "/src/assets/udit.PNG",
            name: 'Udit Narayan Pandey',
            title: 'Director, PandeyCorp',
            content: 'GenieAi has streamlined our content strategy across departments. It’s reliable, fast, and delivers results our team can trust.',
            rating: 5,
        },
        {
            image: "/src/assets/rishabh.jpg",
            name: 'Rishabh Sharma',
            title: 'Content Writer, SharmaCorp',
            content: 'As a writer, GenieAi is like having a smart assistant. It helps me brainstorm, write faster, and polish every article to perfection.',
            rating: 4,
        }
    ];

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
            </div>

            {/* Top two cards */}
            <div className='flex flex-wrap justify-center gap-12 mt-10'>
                {dummyTestimonialData.slice(0, 2).map((testimonial, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        onMouseMove={(e) => {
                            const bounds = cardRefs.current[index].getBoundingClientRect();
                            setHovered({
                                index,
                                x: e.clientX - bounds.left + 10,
                                y: e.clientY - bounds.top + 10
                            });
                        }}
                        onMouseLeave={() => setHovered({ index: null, x: 0, y: 0 })}
                        className='relative p-8 max-w-sm rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'
                    >
                        {hovered.index === index && (
                            <div
                                className='absolute z-10 px-3 py-1 text-white text-sm rounded bg-blue-600 pointer-events-none transition duration-150'
                                style={{
                                    top: hovered.y,
                                    left: hovered.x,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {testimonial.name}
                            </div>
                        )}

                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, starIdx) => (
                                <svg key={starIdx} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                        fill={starIdx < testimonial.rating ? "#5044E5" : "#D1D5DB"}
                                    />
                                </svg>
                            ))}
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt={testimonial.name} />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom card */}
            <div className='flex justify-center mt-10'>
                {dummyTestimonialData.slice(2, 3).map((testimonial, index) => {
                    const actualIndex = 2;
                    return (
                        <div
                            key={actualIndex}
                            ref={(el) => (cardRefs.current[actualIndex] = el)}
                            onMouseMove={(e) => {
                                const bounds = cardRefs.current[actualIndex].getBoundingClientRect();
                                setHovered({
                                    index: actualIndex,
                                    x: e.clientX - bounds.left + 10,
                                    y: e.clientY - bounds.top + 10
                                });
                            }}
                            onMouseLeave={() => setHovered({ index: null, x: 0, y: 0 })}
                            className='relative p-8 max-w-sm rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'
                        >
                            {hovered.index === actualIndex && (
                                <div
                                    className='absolute z-10 px-3 py-1 text-white text-sm rounded bg-blue-600 pointer-events-none transition duration-150'
                                    style={{
                                        top: hovered.y,
                                        left: hovered.x,
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {testimonial.name}
                                </div>
                            )}

                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, starIdx) => (
                                    <svg key={starIdx} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                                            fill={starIdx < testimonial.rating ? "#5044E5" : "#D1D5DB"}
                                        />
                                    </svg>
                                ))}
                            </div>
                            <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                            <hr className='mb-5 border-gray-300' />
                            <div className='flex items-center gap-4'>
                                <img src={testimonial.image} className='w-12 object-contain rounded-full' alt={testimonial.name} />
                                <div className='text-sm text-gray-600'>
                                    <h3 className='font-medium'>{testimonial.name}</h3>
                                    <p className='text-xs text-gray-500'>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Testimonial;
