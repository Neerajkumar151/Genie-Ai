import React from "react";
import { useState } from "react";
import { Sparkles, Eraser, Scissors } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import Markdown from "react-markdown";


const RemoveObject = () => {
  const [input, setInput] = useState("");
  const [object, setObject] = useState("");

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (object.split(" ").length > 1) {
        return toast("Please enter a single object name to remove");
      }
      const formData = new FormData();
      formData.append("image", input);
      formData.append("object", object);

      const { data } = await axios.post(
        "/api/ai/remove-image-object",
        formData,
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Clean Up Your Image with AI</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Let’s Begin with Your Image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-e-gray-300 text-gray-600"
          required
        />
        <p className="mt-6 text-sm font-medium">
          Name the Unwanted Object
        </p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          row={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-e-gray-300"
          placeholder="e.g., Watch or spoon, Only single object name"
          required
        />
        <button disabled={loading} className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#582193] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
        {
          loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
          : <Scissors className="w-5" />
        }
          Make It Disappear ✨
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">AI-Powered Output</h1>
        </div>
        {
          !content ? (
            <div className="flex-1 flex justify-center items-center">
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                <Scissors className="w-9 h-9" />
                <p>Ready when you are — just upload an image</p>
              </div>
            </div>
          ) : (
              <img src={content} alt="image" className="mt-3 w-full h-full" />
          )
        }
      </div>
    </div>
  );
};

export default RemoveObject;