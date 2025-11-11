"use client";

import { useEffect, useState } from "react";

type PersonalData = {
  nama?: string;
  email?: string;
  telepon?: string;
  kota?: string;
  kodepos?: string;
  alamat?: string;
  kewarganegaraan?: string;
  ringkasan?: string;
};

type ExperienceData = {
  posisi?: string;
  perusahaan?: string;
  lokasi?: string;
  mulai?: string;
  selesai?: string;
  deskripsi?: string;
};

type EducationData = {
  gelar?: string;
  institusi?: string;
  ipk?: string;
  mulai?: string;
  selesai?: string;
  deskripsi?: string;
};

type SkillsData = {
  nama?: string[];
  tingkat?: string[];
};

export default function PreviewPage() {
  const [personalData, setPersonalData] = useState<PersonalData | null>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(
    null
  );
  const [educationData, setEducationData] = useState<EducationData | null>(
    null
  );
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);

  useEffect(() => {
    const pd = JSON.parse(
      localStorage.getItem("personalData") || "null"
    ) as PersonalData | null;
    const ed = JSON.parse(
      localStorage.getItem("experienceData") || "null"
    ) as ExperienceData | null;
    const edc = JSON.parse(
      localStorage.getItem("educationData") || "null"
    ) as EducationData | null;
    const sd = JSON.parse(
      localStorage.getItem("skillsData") || "null"
    ) as SkillsData | null;

    setPersonalData(pd);
    setExperienceData(ed);
    setEducationData(edc);
    setSkillsData(sd);
  }, []);

  if (!personalData) return <p>Loading preview...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Preview CV</h1>

      {/* Informasi Pribadi */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Informasi Pribadi</h2>
        <p>
          <strong>Nama:</strong> {personalData.nama}
        </p>
        <p>
          <strong>Email:</strong> {personalData.email}
        </p>
        <p>
          <strong>Telepon:</strong> {personalData.telepon}
        </p>
        <p>
          <strong>Kota:</strong> {personalData.kota}
        </p>
        <p>
          <strong>Kode Pos:</strong> {personalData.kodepos}
        </p>
        <p>
          <strong>Alamat:</strong> {personalData.alamat}
        </p>
        <p>
          <strong>Kewarganegaraan:</strong> {personalData.kewarganegaraan}
        </p>
        <p>
          <strong>Ringkasan:</strong> {personalData.ringkasan}
        </p>
      </section>

     {/* Pengalaman */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pengalaman</h2>
        {experienceData?.posisi ? (
          <>
            <p>
              <strong>Posisi:</strong> {experienceData.posisi}
            </p>
            <p>
              <strong>Perusahaan:</strong> {experienceData.perusahaan}
            </p>
            <p>
              <strong>Lokasi:</strong> {experienceData.lokasi}
            </p>
            <p>
              <strong>Mulai:</strong> {experienceData.mulai}
            </p>
            <p>
              <strong>Selesai:</strong> {experienceData.selesai}
            </p>
            <p>
              <strong>Deskripsi:</strong> {experienceData.deskripsi}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Belum ada pengalaman ditambahkan</p>
        )}
      </section>

        {/* Pendidikan */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pendidikan</h2>
        {educationData?.gelar ? (
          <>
            <p>
              <strong>Gelar:</strong> {educationData.gelar}
            </p>
            <p>
              <strong>Institusi:</strong> {educationData.institusi}
            </p>
            <p>
              <strong>IPK:</strong> {educationData.ipk}
            </p>
            <p>
              <strong>Mulai:</strong> {educationData.mulai}
            </p>
            <p>
              <strong>Selesai:</strong> {educationData.selesai}
            </p>
            <p>
              <strong>Deskripsi:</strong> {educationData.deskripsi}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Belum ada pendidikan ditambahkan</p>
        )}
      </section>

      {/* Keahlian */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Keahlian</h2>
        {skillsData?.nama ?(
          <>
          <p>
            <strong>Nama Keahlian:</strong> {skillsData.nama}
          </p>
          <p>
            <strong>Tingkat Keahlian:</strong> {skillsData.tingkat}
          </p>
          </>
        ):(
            <p className="text-gray-500">
            <strong>Belum ada keahlian ditambahkan</strong>
            </p>
        )}
      </section>
      <button className="mt-5 bg-gray-900 text-white px-4 py-2 rounded">
        <a href="/"><strong>Kembali ke Halaman Utama</strong></a>
      </button>
    </div>
  );
}
