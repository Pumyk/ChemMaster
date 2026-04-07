import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Terms of Service</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PrepMaster, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on PrepMaster's website for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may not modify or copy the materials.</li>
              <li>You may not use the materials for any commercial purpose.</li>
              <li>You may not attempt to decompile or reverse engineer any software contained on PrepMaster's website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">3. Disclaimer</h2>
            <p>
              The materials on PrepMaster's website are provided on an 'as is' basis. PrepMaster makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">4. Limitations</h2>
            <p>
              In no event shall PrepMaster or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PrepMaster's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">5. Revisions and Errata</h2>
            <p>
              The materials appearing on PrepMaster's website could include technical, typographical, or photographic errors. PrepMaster does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which PrepMaster operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
