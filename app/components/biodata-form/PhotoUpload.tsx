"use client";

import { useState } from "react";
import Image from "next/image";
import api from "@/app/lib/api";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PhotoUpload({ biodata, setBiodata }: any) {
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    // Show preview immediately
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Upload to backend
    const formData = new FormData();
    formData.append("photo", file);

    try {
      setUploading(true);

      const res = await api.post("/upload/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = res.data.imageUrl;

      // Save URL in biodata state
      setBiodata((prev: any) => ({
        ...prev,
        profilePhoto: imageUrl,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4 border p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Profile Photo</h2>

      <div>
        <Label>Upload Photo</Label>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {/* Preview */}
      {preview && (
        <div className="mt-3">
          <Image
            src={preview}
            alt="preview"
            width={120}
            height={120}
            className="rounded border object-cover"
          />
        </div>
      )}

      {uploading && <p className="text-sm text-gray-500">Uploading image...</p>}
    </div>
  );
}
