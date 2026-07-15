import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function ResumeCard() {
  return (
    <section
      id="resume"
      className="flex h-full w-full flex-col rounded-lg bg-white p-6 dark:bg-[#2a2a2a]"
    >
      <h2 className="text-3xl font-bold">Resume</h2>

      <div className="overflow-auto">
        <Document file="/resume.pdf">
          <Page
            pageNumber={1}
            scale={1.5}
            className="dark:invert dark:hue-rotate-180 dark:mix-blend-difference"
          />
        </Document>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href="mailto:a8392280@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-md border border-[#1a1a1aa4] px-4 py-2 transition-colors duration-300 hover:bg-[#185FA5] hover:text-white dark:border-[#f0f0f0a9]"
        >
          Contact Me
        </a>

        <a
          href="/resume.docs"
          download
          className="cursor-pointer rounded-md border border-[#1a1a1a] bg-[#2a2a2a] px-4 py-2 text-[#f0f0f0] dark:bg-[#f0f0f0] dark:text-[#1a1a1a]"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
