import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

const LegalPage = ({ title, updated, children }: LegalPageProps) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <main className="px-4 pb-16 pt-28">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg md:p-10">
        <h1 className="text-3xl font-bold text-inspira-darkBlue">{title}</h1>
        <p className="mt-1 text-sm text-gray-500">Última actualización: {updated}</p>
        <div className="mt-6 space-y-4 text-gray-700 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-inspira-darkBlue [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          {children}
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default LegalPage;
