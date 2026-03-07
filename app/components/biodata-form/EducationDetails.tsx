"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EducationDetails({ biodata, setBiodata }: any) {

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setBiodata((prev: any) => ({
      ...prev,
      educationProfession: {
        ...prev.educationProfession,
        [name]: value,
      },
    }));
  };

  return (
    <div className="space-y-4 border p-4 rounded-lg">

      <h2 className="text-lg font-semibold">
        Education & Profession
      </h2>

      {/* Highest Qualification */}
      <div>
        <Label>Highest Qualification</Label>
        <Input
          name="highestQualification"
          placeholder="e.g. B.Tech / MBA"
          onChange={handleChange}
        />
      </div>

      {/* College */}
      <div>
        <Label>College / University</Label>
        <Input
          name="college"
          placeholder="Enter college name"
          onChange={handleChange}
        />
      </div>

      {/* Profession */}
      <div>
        <Label>Profession</Label>
        <Input
          name="profession"
          placeholder="e.g. Software Engineer"
          onChange={handleChange}
        />
      </div>

      {/* Company */}
      <div>
        <Label>Company</Label>
        <Input
          name="company"
          placeholder="Company name"
          onChange={handleChange}
        />
      </div>

      {/* Income */}
      <div>
        <Label>Income</Label>
        <Input
          name="income"
          placeholder="e.g. 10 LPA"
          onChange={handleChange}
        />
      </div>

    </div>
  );
}