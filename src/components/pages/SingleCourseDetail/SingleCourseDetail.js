import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { MdWorkspacePremium } from "react-icons/md";

const SingleCourseDetail = () => {
    const [loader, setLoader] = useState(false);
    const courseDetail = useLoaderData();
    console.log(courseDetail);

    const downloadPDF = () => {
        const capture = document.querySelector('.actual-recipt')
        setLoader(true);
        html2canvas(capture)
            .then((canvas) => {
                const imgData = canvas.toDataURL('img/png');
                const doc = new jsPDF('p', 'mm', 'a2');
                const componentWidth = doc.internal.pageSize.getWidth();
                const componentHeight = doc.internal.pageSize.getHeight();
                doc.addImage(imgData, '', 0, 0, componentWidth, componentHeight);
                setLoader(false);
                doc.save('Authoi_Education.pdf')
            })
    }

    return (
        <div className='container mt-20 scrollbar-hide'>
            <div className="navbar bg-base-100 d-flex justify-content-between">
                <h1 className="btn-ghost normal-case text-5xl">{courseDetail.title}</h1>
                <h3><Button variant='outline-danger' onClick={downloadPDF} disabled={!(loader === false)}>
                    {
                        loader ? (
                            <span>Downloading</span>
                        ) : (<span>Download</span>)}
                </Button></h3>
            </div>
            <hr />
            <div className='lg:flex md:block'>
                <iframe className='lg:w-4/6 w-full' height="300" src={courseDetail.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div>
                    <h2 className=''>Learn {courseDetail.title} from Video</h2>
                    <p className='py-3 text-lg'>Learn {courseDetail.title} by video. In video our teachers teach you coding directly.After learning you should know basics of previous courses</p>
                </div>
            </div>
            <div className='actual-recipt'>
                <div>
                    <h1 className="btn-ghost normal-case text-5xl">{courseDetail.title}</h1>
                    <hr />
                    <h2 className='py-3 text-4xl'>What is {courseDetail.title}</h2>
                    <p className='py-3 text-2xl'>{courseDetail.introductoryDscription}</p>
                </div>
                <div className='flex py-5'>
                    <p className='py-3 text-2xl'>{courseDetail.courseBodyDetail}</p>
                    <img className='rounded-lg shadow-2xl' width={'50%'} src={courseDetail.codeImg} alt='' />
                </div>
                <div>
                    <h2 className='py-3 text-4xl'>How It Works</h2>
                    <p className='py-3 text-2xl'>{courseDetail.howWorks}</p>
                    <img className='rounded-lg shadow-2xl' width={'100%'} src={courseDetail.workingImg} alt='' />
                </div>
                <div className='bg-base-300'>
                    <h2 className='py-3 text-4xl'>Hello World</h2>
                    <div className='w-full h-full p-3 bg-black block'>
                        <h3 className='text-gray-400 pr-10'>{courseDetail.helloWorld.line1}</h3>
                        <h3 className='text-gray-400 pl-10'>{courseDetail.helloWorld.line2}</h3>
                        <h3 className='text-gray-400 pr-10'>{courseDetail.helloWorld.line3}</h3>
                    </div>
                    <div>
                        <span className='badge badge-primary'>OUTPUT</span>
                        <div className='w-full h-full p-3 bg-white shadow-lg block'>
                            <h1>Hello World !</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='py-4 text-4xl'>What is the History of {courseDetail.title}</h2>
                    <p className='py-3 text-2xl'>{courseDetail.history}</p>
                </div>
                <div className="hero h-full bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={courseDetail.creator} className="w-1/5 rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">The creator of {courseDetail.title}</h1>
                            <p className="py-6">He creates {courseDetail.title}, through his efforts. My teacher tells us 'No Pain No Gain'</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-success" type="button">
                <Link className='position-relative' to={`checkout/${courseDetail.id}`}>Get Premium Access
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <MdWorkspacePremium></MdWorkspacePremium>
                </span></Link></button>
        </div>
    );
};

export default SingleCourseDetail;