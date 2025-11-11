"use client";

import { useState, useEffect } from "react";
import { Tabs, Tab } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const router = useRouter();
  const [personalData, setPersonalData] = useState({
    nama: "",
    email: "",
    telepon: "",
    lahir: "",
    kota: "",
    kodepos: "",
    alamat: "",
    kewarganegaraan: "",
    ringkasan: "",
  });

  const [experienceData, setExperienceData] = useState({
    posisi: "",
    perusahaan: "",
    lokasi: "",
    mulai: "",
    selesai: "",
    masihKerja: false,
    deskripsi: "",
  });

  const [educationData, setEducationData] = useState({
    gelar: "",
    institusi: "",
    lokasi: "",
    ipk: "",
    mulai: "",
    selesai: "",
    deskripsi: "",
  });

  const [skillsData, setSkillsData] = useState({
    nama: "",
    tingkat: "",
  });

  useEffect(() => {
    const savedPersonal = localStorage.getItem("personalData");
    const savedExperience = localStorage.getItem("experienceData");
    const savedEducation = localStorage.getItem("educationData");
    const savedSkills = localStorage.getItem("skillsData");

    if (savedPersonal) setPersonalData(JSON.parse(savedPersonal));
    if (savedExperience) setExperienceData(JSON.parse(savedExperience));
    if (savedEducation) setEducationData(JSON.parse(savedEducation));
    if (savedSkills) setSkillsData(JSON.parse(savedSkills));
  }, []);

  const handleSavePersonal = () => {
    localStorage.setItem("personalData", JSON.stringify(personalData));
    alert("Data Personal tersimpan!");
  };

  const handleSaveExperience = () => {
    localStorage.setItem("experienceData", JSON.stringify(experienceData));
    alert("Pengalaman Kerja tersimpan!");
  };

  const handleSaveEducation = () => {
    localStorage.setItem("educationData", JSON.stringify(educationData));
    alert("Riwayat Pendidikan tersimpan!");
  };
  const handleSaveSkills = () => {
    localStorage.setItem("skillsData", JSON.stringify(skillsData));
    alert("Keahlian tersimpan!");
  }

  return (
    <div className="w-full flex flex-col bg-white text-black">
      <div className="bg-gray-500 text-white p-6">
        <h1 className="text-2xl font-semibold">Formulir CV</h1>
        <p className="text-sm mt-1">
          Lengkapi informasi Anda untuk membuat CV profesional
        </p>
        <button
          onClick={() => router.push("/preview")}
          className="bg-gray-900 rounded text-white px-4 py-2 ml-2"
        >
          Lihat Preview
        </button>
      </div>
      <div className="px-4 pt-4 bg-white rounded-b-xl shadow-md">
        <Tabs
          aria-label="CV Sections"
          variant="underlined"
          fullWidth
          classNames={{
            tabList: "border-b border-gray-200",
            cursor: "bg-indigo-500",
            tabContent: "group-data-[selected=true]:text-indigo-600",
          }}
        >
          <Tab key="data-personal" title="Data Personal">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Informasi Pribadi</h2>
              <p className="text-sm text-gray-600 mb-4">
                Tambahkan Informasi Pribadi Anda
              </p>

              <div className="border-2 p-6 rounded-xl bg-gray-50">
                <h3 className="font-semibold text-lg mb-4">
                  Informasi Pribadi
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Nama Lengkap *</label>
                    <input
                      value={personalData.nama}
                      onChange={(e) =>
                        setPersonalData({
                          ...personalData,
                          nama: e.target.value,
                        })
                      }
                      className="rounded-lg p-3 bg-gray-100"
                      placeholder="Nama lengkap"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Email *</label>
                    <input
                      value={personalData.email}
                      onChange={(e) =>
                        setPersonalData({
                          ...personalData,
                          email: e.target.value,
                        })
                      }
                      className="rounded-lg p-3 bg-gray-100"
                      placeholder="Email"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Nomor Telepon *</label>
                    <input
                      value={personalData.telepon}
                      onChange={(e) =>
                        setPersonalData({
                          ...personalData,
                          telepon: e.target.value,
                        })
                      }
                      className="rounded-lg p-3 bg-gray-100"
                      placeholder="Nomor telepon"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Tanggal Lahir</label>
                    <input
                      type="date"
                      value={personalData.lahir}
                      onChange={(e) =>
                        setPersonalData({
                          ...personalData,
                          lahir: e.target.value,
                        })
                      }
                      className="rounded-lg p-3 bg-gray-100"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Kota</label>
                    <input
                      value={personalData.kota}
                      onChange={(e) =>
                        setPersonalData({
                          ...personalData,
                          kota: e.target.value,
                        })
                      }
                      className="rounded-lg p-3 bg-gray-100"
                      placeholder="Kota"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Kode Pos</label>
                    <input
                      value={personalData.kodepos}
                      onChange={(e) =>
                        setPersonalData({
                          ...personalData,
                          kodepos: e.target.value,
                        })
                      }
                      className="rounded-lg p-3 bg-gray-100"
                      placeholder="Kode pos"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-4">
                  <label>Alamat Lengkap</label>
                  <input
                    value={personalData.alamat}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        alamat: e.target.value,
                      })
                    }
                    className="rounded-lg p-3 bg-gray-100"
                    placeholder="Alamat lengkap"
                  />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                  <label>Kewarganegaraan</label>
                  <input
                    value={personalData.kewarganegaraan}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        kewarganegaraan: e.target.value,
                      })
                    }
                    className="rounded-lg p-3 bg-gray-100"
                    placeholder="Kewarganegaraan"
                  />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                  <label>Ringkasan Profil</label>
                  <textarea
                    value={personalData.ringkasan}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        ringkasan: e.target.value,
                      })
                    }
                    className="rounded-lg p-3 bg-gray-100 h-32"
                    placeholder="Ringkasan profil"
                  />
                </div>

                <button
                  onClick={handleSavePersonal}
                  className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  Simpan Data Personal
                </button>
              </div>
            </div>
          </Tab>

          <Tab key="pengalaman" title="Pengalaman">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Pengalaman Kerja</h2>
              <p className="text-sm text-gray-600 mb-4">
                Tambahkan pengalaman kerja Anda
              </p>

              <div className="border-2 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Tambah Pengalaman Kerja</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Posisi *</label>
                    <input
                      value={experienceData.posisi}
                      onChange={(e) =>
                        setExperienceData({
                          ...experienceData,
                          posisi: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="Senior Engineer"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Nama Perusahaan *</label>
                    <input
                      value={experienceData.perusahaan}
                      onChange={(e) =>
                        setExperienceData({
                          ...experienceData,
                          perusahaan: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="PT Teknologi"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Lokasi</label>
                    <input
                      value={experienceData.lokasi}
                      onChange={(e) =>
                        setExperienceData({
                          ...experienceData,
                          lokasi: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="Jakarta"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Tanggal Mulai</label>
                    <input
                      type="date"
                      value={experienceData.mulai}
                      onChange={(e) =>
                        setExperienceData({
                          ...experienceData,
                          mulai: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Tanggal Selesai</label>
                    <input
                      type="date"
                      value={experienceData.selesai}
                      onChange={(e) =>
                        setExperienceData({
                          ...experienceData,
                          selesai: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-6">
                    <input
                      type="checkbox"
                      checked={experienceData.masihKerja}
                      onChange={(e) =>
                        setExperienceData({
                          ...experienceData,
                          masihKerja: e.target.checked,
                        })
                      }
                    />
                    <label>Masih bekerja di sini</label>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-4">
                  <label>Deskripsi</label>
                  <textarea
                    value={experienceData.deskripsi}
                    onChange={(e) =>
                      setExperienceData({
                        ...experienceData,
                        deskripsi: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 bg-gray-100 h-32"
                    placeholder="Jelaskan pekerjaan Anda..."
                  />
                </div>

                <button
                  onClick={handleSaveExperience}
                  className="w-full bg-black text-white py-3 rounded-lg mt-6"
                >
                  Simpan Pengalaman
                </button>
              </div>
            </div>
          </Tab>

          <Tab key="pendidikan" title="Pendidikan">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Riwayat Pendidikan</h2>
              <p className="text-sm text-gray-600 mb-4">
                Tambahkan Riwayat Pendidikan Anda, mulai dari yang terbaru
              </p>
              <div className="border-2 rounded-xl p-6">
                <h3 className="font-semibold mb-4">
                  Tambah Riwayat Pendidikan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Gelar / Jurusan *</label>
                    <input
                      value={educationData.gelar}
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          gelar: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="Senior Engineer"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Nama Institusi *</label>
                    <input
                      value={educationData.institusi}
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          institusi: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="PT Teknologi"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Lokasi</label>
                    <input
                      value={educationData.lokasi}
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          lokasi: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="Jakarta"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>IPK / Nilai</label>
                    <input
                      type="number"
                      value={educationData.ipk}
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          ipk: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Tanggal Mulai</label>
                    <input
                      type="date"
                      value={educationData.mulai}
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          mulai: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Tanggal Selesai</label>
                    <input
                      type="date"
                      value={educationData.selesai}
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          selesai: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-4">
                  <label>Deskripsi</label>
                  <textarea
                    value={educationData.deskripsi}
                    onChange={(e) =>
                      setEducationData({
                        ...educationData,
                        deskripsi: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 bg-gray-100 h-32"
                    placeholder="Jelaskan pekerjaan Anda..."
                  />
                </div>

                <button
                  onClick={handleSaveEducation}
                  className="w-full bg-black text-white py-3 rounded-lg mt-6"
                >
                  Simpan Pendidikan
                </button>
              </div>
            </div>
          </Tab>
          <Tab key="keahlian" title="Keahlian">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Keahlian</h2>
              <p className="text-sm text-gray-600 mb-4">
                Tambahkan keahlian atau skill yang Anda miliki
              </p>
              <div className="border-2 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Tambah Keahlian</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Nama Keahlian *</label>
                    <input
                      value={skillsData.nama}
                      onChange={(e) =>
                        setSkillsData({
                          ...skillsData,
                          nama: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="Contoh: JavaScript"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Tingkat Kemahiran *</label>
                    <input
                      value={skillsData.tingkat}
                      onChange={(e) =>
                        setSkillsData({
                          ...skillsData,
                          tingkat: e.target.value,
                        })
                      }
                      className="border rounded-lg p-2 bg-gray-100"
                      placeholder="Contoh: Pemula, Menengah, Ahli"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveSkills}
                  className="w-full bg-black text-white py-3 rounded-lg mt-6"
                >
                  Simpan Keahlian
                </button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
