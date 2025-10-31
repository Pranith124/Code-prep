import codePrepLogo1 from '../assets/code-prep-logo1.jpg';
export function Topbar() {
    
    

    return (
        <div className="flex justify-between max-w-screen border-b-2 pl-20 pr-20 pb-2 pt-2 bg-[rgb(68_68_68)] border border-solid border-gray-600 text-gray-200">
        <div className="flex ">
            <a className="pl-5" href="#"><img className="max-w-8" src={codePrepLogo1} alt="" /></a>
            <a className="pl-5" href="#">Explore</a>
            <a className="pl-5" href="#">Problems</a>
            <a className="pl-5" href="#">Content</a>
            <a className="pl-5" href="#">Discuss</a>
            <a className="pl-5" href="#">Interview</a>
            <a className="pl-5" href="#">Store</a>
        </div>
        <div className="flex ">
            <a href="#notification"><img className="max-w-7 mr-5" src="https://img.icons8.com/?size=160&id=ZW2vgTIQ1bkh&format=png" alt="" /></a>
            <a href="#profile"><img  className="max-w-7 mr-5" src="https://leetcode.com/_next/static/images/default_avatar-e9984af6de73f121d0e6801af2749ca5.jpg" alt="" /></a>
        </div>
        </div>
    )
}