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

    const previousPage = () => {
        setPageNumber(1);
    }

    const nextPage = () => {
        setPageNumber(2);
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
        <div className='h-full bg-[#e5e5e5] flex flex-col justify-center items-center'>
            <div className='mt-16'>
                <span>
                    Page {pageNumber} of {numPages}
                </span>
                <div className="flex flex-col justify-center">
                    <div className='flex flex-row justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={previousPage}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={nextPage}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>

                </div>
            </div >
            <div className="w-7/8">
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>

            <div className='absolute bottom-[-46px]'>
                <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit?usp=sharing" target="_blank">
                    <button className='btn py-2 px-4 bg-[#FFF]'>
                        View Resume
                    </button>
                </a>
            </div>


        </div >
    )
}

export default Resume;

