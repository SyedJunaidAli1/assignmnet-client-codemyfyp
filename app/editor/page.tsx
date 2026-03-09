"use client";

import { useState, useEffect } from "react";
import PersonalDetails from "@/app/components/biodata-form/PersonalDetails";
import FamilyDetails from "@/app/components/biodata-form/FamilyDetails";
import EducationDetails from "@/app/components/biodata-form/EducationDetails";
import HoroscopeSection from "@/app/components/biodata-form/HoroscopeSection";
import PhotoUpload from "@/app/components/biodata-form/PhotoUpload";
import BiodataPreview from "@/app/components/preview/BiodataPreview";
import { Button } from "@/components/ui/button";
import api from "@/app/lib/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditorPage() {
  const [biodata, setBiodata] = useState({
    personalDetails: {
      fullName: "",
      dob: "",
      age: "",
      height: "",
      religion: "",
      caste: "",
      location: "",
      contact: "",
    },
    familyDetails: {},
    educationProfession: {},
    horoscope: {},
    profilePhoto: "",
    template: "classic",
  });

  const handleSave = async () => {
    try {
      if (biodata._id) {
        await api.put(`/biodata/${biodata._id}`, biodata);
      } else {
        await api.post("/biodata", biodata);
      }

      alert("Biodata saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save biodata");
    }
  };

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const res = await api.get("/biodata/me");

        setBiodata(res.data);
      } catch (error) {
        console.log("No biodata found");
      }
    };

    fetchBiodata();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* LEFT SIDE FORM */}
      <div className="w-full lg:w-1/2 p-6 space-y-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">Create Biodata</h1>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Choose Template</h2>
          <Select
            value={biodata.template}
            onValueChange={(value) =>
              setBiodata((prev: any) => ({
                ...prev,
                template: value,
              }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Template" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <PersonalDetails biodata={biodata} setBiodata={setBiodata} />
        <FamilyDetails biodata={biodata} setBiodata={setBiodata} />
        <EducationDetails biodata={biodata} setBiodata={setBiodata} />
        <HoroscopeSection biodata={biodata} setBiodata={setBiodata} />
        <PhotoUpload biodata={biodata} setBiodata={setBiodata} />
        <Button onClick={handleSave} className="w-full mt-4">
          {biodata._id ? "Update Biodata" : "Save Biodata"}
        </Button>
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="w-full lg:w-1/2 bg-muted p-6">
        <BiodataPreview biodata={biodata} />
      </div>
    </div>
  );
}
