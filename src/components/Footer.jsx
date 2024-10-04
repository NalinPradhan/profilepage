import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-teal-300'>
            <div className="h-32 ">
                {/* <a href="resume" className="resume">Resume</a> */}
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-bold">Contact Me</h4>
                        <p>Email: <a href="mailto:pnalin63@gmail.com" className="text-blue-300">pnalin63@gmail.com</a></p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold">Quick Links</h4>
                        <ul>
                            <li><a href="#about" className="text-blue-300">About</a></li>
                            <li><a href="#projects" className="text-blue-300">Projects</a></li>
                            <li><a href="#blog" className="text-blue-300">Blog</a></li>
                            <li><a href="/resume.pdf" className="text-blue-300">Resume</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold">Follow Me</h4>
                        <a href="https://github.com/NalinPradhan" className="text-blue-300">GitHub</a>
                        <a href="https://linkedin.com/in/yourprofile" className="text-blue-300">LinkedIn</a>
                        <a href="https://twitter.com/yourprofile" className="text-blue-300">Twitter</a>
                    </div>
                </div>

                <p>&copy; {new Date().getFullYear()} Nalin Pradhan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;