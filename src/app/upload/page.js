import UploadForm from "@/components/UploadForm";

export default function UploadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Upload a Meme</h1>
      <UploadForm />
    </div>
  );
}
