import React from "react";
import { useState } from "react";
import { Sparkles, Eraser, FileText } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import Markdown from "react-markdown";


const ReviewResume = () => {
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("resume", input);

      const { data } = await axios.post("/api/ai/resume-review", formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

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
          <Sparkles className="w-6 text-[#9e179a]" />
          <h1 className="text-xl font-semibold">Instant Resume Feedback</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Drop Your Resume to Get Started</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="applications/pdf"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-e-gray-300 text-gray-600"
          required
        />
        <p className="text-xs text-gray-500 font-light mt-1">
          Only PDF files are supported for now.
        </p>
        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#9724b4] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          {loading ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <FileText className="w-5" />
          )}
          Get AI Feedback ✨
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#791574]" />
          <h1 className="text-xl font-semibold">Your Resume Feedback</h1>
        </div>
        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <FileText className="w-9 h-9" />
              <p>Waiting for a resume to review...</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
            <div className="reset-tw">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewResume;