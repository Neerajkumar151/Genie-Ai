import React from 'react';

const SiteOverview = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className='px-4 sm:px-20 xl:px-32 my-24 text-center'>
        <h1 className='text-slate-700 text-[42px] font-semibold'>What GenieAi Can Do for You</h1>
        <p className='text-gray-500 max-w-lg mx-auto'>
          A glimpse of the AI-powered features that simplify, beautify, and automate your workflow.
        </p>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
          {[
            "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop"
          ].map((url, i) => (
            <div key={i} className="relative group flex-grow transition-all w-60 rounded-lg overflow-hidden h-[400px] duration-400 hover:w-full">
              <img className="h-full w-full object-cover object-center" src={url} alt={`image${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SiteOverview;
