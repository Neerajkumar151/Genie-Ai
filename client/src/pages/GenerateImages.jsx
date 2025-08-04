import { Image, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-react';
import Markdown from 'react-markdown';

const GenerateImages = () => {

  const imageStyles = [
  'Realistic',
  'Photorealistic',
  'Ghibli Style',
  'Anime Style',
  'Cartoon Style',
  'Fantasy Style',
  '3D Style',
  'Portrait Style',
  'Cyberpunk',
  'Pixel Art',
  'Oil Painting',
  'Watercolor',
  'Sketch / Pencil Drawing',
  'Flat Illustration',
  'Minimalist',
  'Surrealism',
  'Abstract',
  'Dark Fantasy',
  'Vaporwave',
  'Noir Style',
  'Futuristic',
  'Vintage / Retro',
  'Low Poly',
  'Isometric',
  'Steampunk',
  'Sci-Fi',
  'Digital Painting',
  'Line Art',
  'Ink Drawing',
  'Pop Art',
  'Paper Cutout',
  'Comic Book Style',
  'Concept Art',
  'Dreamcore / Aesthetic'
];

    
      const [selectedStyle, setSelectedStyle] = useState('Realistic')
      const [input, setInput] = useState('')
      const [publish, setPublish] = useState(false)

    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState('')

    const {getToken} = useAuth()
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
          setLoading(true)
          const prompt = `Generate an image of ${input} in the style ${selectedStyle}`
          const {data} = await axios.post('/api/ai/generate-image', {prompt, publish}, {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
        })

        if(data.success) {
          setContent(data.content)
        } else {
          toast.error(data.message)
        }
        } catch(error) {
          toast.error(error.message)
        }
        setLoading(false)
      }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
        {/* Left col */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6 text-[#cbce30]'/>
            <h1 className='text-xl font-semibold'>AI Image Generator</h1>
          </div>
          <p className='mt-6 text-sm font-medium'>Visualize Your Imagination</p>
          <textarea onChange={(e)=>setInput(e.target.value)} value={input} row={4} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-e-gray-300' placeholder='Describe the Image you want to see....' required />
          <p className='mt-4 text-sm font-medium'>Style</p>
          <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
            {imageStyles.map((item)=>(
              <span onClick={()=>setSelectedStyle(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'}`} key={item}>{item}</span>
            ) )}
          </div>
          <div className='my-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
              <input type="checkbox" onChange={(e)=>setPublish(e.target.checked)} checked={publish} className='sr-only peer' />
              <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>
              <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
            </label>
            <p className='text-sm'>Make this image public</p>
          </div>
          <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#84bc0c] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          {
            loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
            : <Image className='w-5' />
          }
            Generate Image ✨
          </button>
        </form>

        {/* Right col */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
          <div className='flex items-center gap-3'>
            <Image className='w-5 h-5 text-[#1f5b2c]'/>
            <h1 className='text-xl font-semibold'>Your Imagination</h1>
          </div>
          {!content ? (
            <div className='flex-1 flex justify-center items-center'>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Image className='w-9 h-9'/>
              <p>Enter a topic and click "Generate Image" to get started</p>
            </div>
          </div>
          ) : (
            <div className='mt-3 h-full'>
              <img src={content} alt="image" className='w-full h-full' />
            </div>
          )}
        </div>
    </div>
  )
}

export default GenerateImages