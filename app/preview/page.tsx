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
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-10 mt-10 border border-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center border-b pb-3">
        Preview CV
      </h1>

      {/* Informasi Pribadi */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 pl-3">
          Informasi Pribadi
        </h2>
        <div className="grid grid-cols-2 gap-y-2 text-gray-700">
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
        </div>

        {personalData.ringkasan && (
          <p className="mt-4 text-gray-700 leading-relaxed">
            <strong>Ringkasan:</strong> {personalData.ringkasan}
          </p>
        )}
      </section>

      {/* Pengalaman */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 pl-3">
          Pengalaman Kerja
        </h2>
        {experienceData?.posisi ? (
          <div className="space-y-1 text-gray-700">
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
              <strong>Selesai:</strong>{" "}
              {experienceData.selesai || "Masih bekerja"}
            </p>
            <p>
              <strong>Deskripsi:</strong> {experienceData.deskripsi}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Belum ada pengalaman ditambahkan</p>
        )}
      </section>

      {/* Pendidikan */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 pl-3">
          Pendidikan
        </h2>
        {educationData?.gelar ? (
          <div className="space-y-1 text-gray-700">
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
          </div>
        ) : (
          <p className="text-gray-500">Belum ada pendidikan ditambahkan</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 pl-3">
          Keahlian
        </h2>
        {skillsData?.nama ? (
          <div className="space-y-1 text-gray-700">
            <p>
              <strong>Keahlian:</strong> {skillsData.nama}
            </p>
            <p>
              <strong>Tingkat:</strong> {skillsData.tingkat}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Belum ada keahlian ditambahkan</p>
        )}
      </section>

      <a
        href="/"
        className="block w-fit mx-auto bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition"
      >
        Kembali ke Halaman Utama
      </a>
    </div>
  );
}
