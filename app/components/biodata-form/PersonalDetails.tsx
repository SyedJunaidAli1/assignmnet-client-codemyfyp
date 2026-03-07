"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalDetails({ biodata, setBiodata }: any) {
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    const updatedDetails = {
      ...biodata.personalDetails,
      [name]: value,
    };

    // Auto calculate age when DOB changes
    if (name === "dob") {
      updatedDetails.age = calculateAge(value);
    }

    setBiodata((prev: any) => ({
      ...prev,
      personalDetails: updatedDetails,
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Personal Details</h2>

      <div>
        <Label>Full Name</Label>
        <Input name="fullName" onChange={handleChange} />
      </div>

      <div>
        <Label>Date of Birth</Label>
        <Input type="date" name="dob" onChange={handleChange} />
      </div>

      <div>
        <Label>Age</Label>
        <Input name="age" value={biodata.personalDetails.age || ""} readOnly />
      </div>
    </div>
  );
}
