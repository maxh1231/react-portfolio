import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdf from './maxHResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        // <section className=' h-full bg-[#e5e5e5] flex flex-col items-center pt-2'>
        //     <div>
        //         <img src={photo} alt=""></img>
        //     </div>
        //     <div className='mt-2'>

        //         <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit?usp=sharing" target="_blank">
        //             <button className='btn py-2 px-6 bg-[#FFF]'>
        //                 View Resume
        //             </button>
        //         </a>

        //     </div>
        // </section>
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}

export default Resume;